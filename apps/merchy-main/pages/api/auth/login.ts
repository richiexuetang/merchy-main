import { setCookie } from 'cookies-next';

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  if (req.method === 'POST') {
    const { email, password } = req.body;
    const body = JSON.stringify({
      email,
      password,
    });

    try {
      const apiRes = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}api/token/`,
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
          success: 'Logged in successfully',
        });
      } else {
        return res.status(apiRes.status).json({
          error: 'Authentication failed',
        });
      }
    } catch (err) {
      return res.status(500).json({
        error: 'Something went wrong when authenticating',
      });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ error: `Method ${req.method} now allowed` });
  }
};
