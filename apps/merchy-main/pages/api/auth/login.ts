import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    res.status(405).send({ message: 'Only POST requests allowed' });
    return;
  }

  try {
    const response = await fetch('http://127.0.0.1:8000/dj-rest-auth/login/', {
      method: 'POST',
      mode: 'cors', // no-cors, *cors, same-origin
      //   cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      //   credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json',
      },
      redirect: 'manual', // manual, *follow, error
      referrerPolicy: 'same-origin', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: req.body,
    });

    return response.json();
  } catch (error) {
    res.status(error.status).json(error.response.data);
    return;
  }
}
