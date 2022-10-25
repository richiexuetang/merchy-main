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

      return res.status(200).json(data);
    } catch (err) {
      return res.status(500).json({
        error: 'Something went wrong when trying to fulfill token request',
      });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    return res.status(405).json({ error: `Method ${req.method} not allowed` });
  }
};
