import express from 'express';

import { filter } from 'lodash/collection';
import { slice } from 'lodash/array';

import db from '../data/db.json';
const router = express.Router();
const basePath = '/products';

const filterProductByCategory = category => val => {
  return val.category === category;
};

router.get(`${basePath}`, (req, res) => {
  const category = req.query.category;
  const skip = isNaN(parseInt(req.query.skip)) ? 0 : parseInt(req.query.skip);
  const take = isNaN(parseInt(req.query.take)) ? 10 : parseInt(req.query.take);

  const filteredData = category
    ? filter(db.products || [], filterProductByCategory(category))
    : db.products;

  return res.status(200).json({
    data: {
      total: filteredData.length,
      items: slice(filteredData, skip, skip + take)
    }
  });
});

export default router;
