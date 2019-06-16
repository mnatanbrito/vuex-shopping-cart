import express from 'express';
import { green } from 'chalk';
import { json } from 'body-parser';

import products from './routes/products';

const app = express();

app.use(json());

// routes
const basePath = '/api';
app.use(basePath, products);

app.listen(process.env.API_PORT || 3001, () => {
  //eslint-disable-next-line
  console.log(green('\nFake api started and ready to rock 😎 ...'));
});
