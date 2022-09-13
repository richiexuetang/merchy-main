import S3 from 'aws-sdk/clients/s3'
import { NextApiRequest, NextApiResponse } from 'next'

const s3 = new S3({
    region: process.env.APP_AWS_REGION,
    accessKeyId: process.env.APP_AWS_ACCESS_KEY,
    secretAccessKey: process.env.APP_AWS_SECRET_KEY,
    signatureVersion: "v4"
  })

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    let { name, type } = req.body;

    const fileParams = {
        Bucket: process.env.AWS_S3_BUCKET_NAME,
        Key: name,
        Expires: 600,
        ContentType: type,
        ACL: 'public-read'
      };

      const url = await s3.getSignedUrlPromise("putObject", fileParams);
      
      res.status(200).json({ url });
  } else {
      const post = await s3.createPresignedPost({
      Bucket: process.env.AWS_S3_BUCKET_NAME,
      Fields: {
        key: name,
        'Content-Type': req.query.fileType,
      },
      Expires: 60, // seconds
      Conditions: [
        ['content-length-range', 0, 1048576], // up to 1 MB
      ],
    })

    res.status(200).json(post)
  }
}