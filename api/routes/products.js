import express from 'express';

import db from '../data/db.json';
const router = express.Router();
const basePath = '/products';

router.get(`${basePath}`, (req, res) => {
  return res.status(200).json({
    data: db.products,
    id: 2
  });
});

export default router;
