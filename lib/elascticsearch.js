import {Client} from '@elastic/elasticsearch'
import fs from 'fs'
export const client = new Client({
  node: process.env.NEXT_PUBLIC_ELACTICSEARCH_HOST,
  auth: {
    // username: process.env.NEXT_PUBLIC_ELASTICSEARCH_USER,
    // password: process.env.EXT_PUBLIC_ELASTICSEARCH_PASSWORD,
    apiKey: 'ODF6b0tJOEJFRDd3dlhGZUxWRUQ6aWFDZzhhZzNTTXktbFhrTnVpS0lBQQ=='
  },
  tls: {
    ca: fs.readFileSync('./http_ca.crt'),
    rejectUnauthorized: false
  }
});
