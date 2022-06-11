// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function list(req: NextApiRequest, res: NextApiResponse) { 
  if (req.method === 'GET') {
    const json = await fetch(process.env.API_URL).then(x => x.json());
    res.status(200).json(json)
  }
  
  if (req.method === 'POST') {
   
  }
}
