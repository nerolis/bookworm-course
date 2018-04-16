import express from 'express';
import request from 'request-promise';
import { parseString } from 'xml2js';
import authenticate from '../middlewares/authenticate';
import Dream from '../models/Dream';
import parseErrors from '../utils/parseErrors';

const router = express.Router();
router.use(authenticate);

router.get('/', (req, res) => {
  Dream.find({ userId: req.currentUser._id })
    .then(dreams => res.json({ dreams }));
});

router.post('/', (req, res) => {
  Dream.create({ ...req.body.dream, userId: req.currentUser._id })
    .then(dream => res.json({ dream }))
    .catch(err => res.status(400).json({ errors: parseErrors(err.errors) }));
});

export default router;