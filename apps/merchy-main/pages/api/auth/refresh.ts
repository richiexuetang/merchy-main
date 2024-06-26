import { getCookie, setCookie } from 'cookies-next';

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  if (req.method === 'GET') {
    const refresh = getCookie('refresh', { req, res });

    if (!refresh) {
      return;
    }

    const body = JSON.stringify({
      refresh,
    });

    try {
      const apiRes = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}api/token/refresh/`,
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: body,
        }
      );

      const data = await apiRes.json();

      if (apiRes.status === 200) {
        setCookie('access', data.access, {
          req,
          res,
          httpOnly: true,
          secure: process.env.NODE_ENV !== 'development',
          maxAge: 60 * 60 * 24,
          sameSite: 'strict',
          path: '/api/',
        });
        setCookie('refresh', data.refresh, {
          req,
          res,
          httpOnly: true,
          secure: process.env.NODE_ENV !== 'development',
          maxAge: 60 * 60 * 24,
          sameSite: 'strict',
          path: '/api/',
        });

        return res.status(200).json({
          success: 'Refresh request successful',
        });
      } else {
        return res.status(apiRes.status).json({
          error: 'Failed to fulfill refresh request',
        });
      }
    } catch (err) {
      return res.status(500).json({
        error: 'Something went wrong when trying to fulfill refresh request',
      });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    return res.status(405).json({ error: `Method ${req.method} not allowed` });
  }
};
