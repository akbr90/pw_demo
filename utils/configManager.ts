import { readFileSync } from 'fs';

const env = process.env.ENV || 'dev';

export const config = JSON.parse(
  readFileSync(`./config/${env}.json`, 'utf-8')
);