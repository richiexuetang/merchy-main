import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    res.status(405).send({ message: 'Only POST requests allowed' });
    return;
  }

  let endpoint = 'http://127.0.0.1:8000/dj-rest-auth/login/';
  if (process.env.NODE_ENV === 'production')
    endpoint = process.env.NEXT_PUBLIC_AUTH_LOGIN_ENDPOINT;

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      redirect: 'manual',
      referrerPolicy: 'same-origin',
      body: req.body,
    });

    return response.json();
  } catch (error) {
    res.status(error.status).json(error.response.data);
    return;
  }
}
