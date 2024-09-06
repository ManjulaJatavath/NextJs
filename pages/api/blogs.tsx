
import type { NextApiRequest, NextApiResponse } from "next";
import { data } from 'autoprefixer';

import * as fs from 'fs'; 
type Data = string[] | { error: string };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  fs.readdir("blogdata", async (err, data) => {
    if (err) {
      res.status(500).json({ error: "Internal server error occurred" });
      return;
    }

    let myfile;
    let allBlogs=[]
    for (let index = 0; index < data.length; index++) {
      const item = data[index];
      // console.log(item);
      myfile = await fs.promises.readFile('blogdata/' + item, 'utf-8');
      // console.log(myfile);
      allBlogs.push(JSON.parse(myfile))
    }

    res.status(200).json(allBlogs);
  });
}