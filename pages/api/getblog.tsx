// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
//http://localhost:3000/api/getblog?slug=how-to-learn-js

import type { NextApiRequest, NextApiResponse } from "next";
import { data } from 'autoprefixer';

import * as fs from 'fs'; 
import { error } from "console";
type Data = string[] | { error: string };
export default  async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  let data =await fs.promises.readdir("blogdata")
  let myfile;
    for (let index = 0; index < data.length; index++) {
      const item = data[index];
      // console.log(item);
      myfile= await fs.promises.readFile(('blogdata/' + item), 'utf-8')
      // console.log(myfile);
      
  }
  res.status(200).json(data);
}






