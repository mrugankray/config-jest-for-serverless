import { add } from "./util"
import fetch from 'node-fetch';
// import fetch from 'node-fetch';

export const handler = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: add(1,2)
      },
      null,
      2
    ),
  };
};
