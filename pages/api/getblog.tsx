import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

type Data = { title: string; content: string; author: string; slug: string } | { error: string };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { slug } = req.query;
    // const filePath = path.join(process.cwd(), 'blogdata', `${slug}.json`);
    // const fileContent = await fs.promises.readFile(filePath, 'utf-8');
    let getblog=await fs.promises.readFile(`blogdata/${slug}.json`, 'utf-8');
    const blogData = JSON.parse(getblog);
    res.status(200).json(blogData);

}
