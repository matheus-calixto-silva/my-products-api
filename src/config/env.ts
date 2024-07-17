import 'dotenv/config';

const PORT = process.env.PORT;
const MYSQL_URI = process.env.MYSQL_URI!;

export const env = {
  port: PORT,
  mongodbUri: MYSQL_URI,
};
