import express from 'express';
import request from 'request-promise';
import { parseString } from 'xml2js';
import authenticate from '../middlewares/authenticate';
import Dream from '../models/Dream';
import parseErrors from '../utils/parseErrors';

const router = express.Router();
router.use(authenticate);

const dreams = [
  {
    childKey: 0,
    image: 'https://i.ytimg.com/vi/fX_0ECJp4GM/maxresdefault.jpg',
    header: 'Сон про Киру',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    meta: '2017.01.02',
  },
  {
    childKey: 1,
    image: 'https://i.pinimg.com/originals/e3/57/b5/e357b5af2c1dc292e5b4b36a39aa9c69.jpg',
    header: 'Первый сезон жижы',
    description: 'Description',
    meta: '2018.05.05',
  }
]
router.get('/', (req, res) => {
  Dream.find({ userId: req.currentUser._id })
    .then(test => res.json({dreams}));
});

router.post('/', (req, res) => {
  Dream.create({ ...req.body.dream, userId: req.currentUser._id })
    .then(dream => res.json({ dream }))
    .catch(err => res.status(400).json({ errors: parseErrors(err.errors) }));
});

export default router;