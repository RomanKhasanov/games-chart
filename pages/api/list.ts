// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function list(req, res) { 
  const json = await fetch(process.env.API_URL).then(x => x.json());
  
  res.status(200).json(json)
}
