import express from 'express';
import path from 'path';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import Promise from 'bluebird';

import auth from './routes/auth';
import users from './routes/users';
import books from './routes/books';
import dreams from './routes/dreams';

dotenv.config();
const app = express();
app.use(bodyParser.json());
mongoose.Promise = Promise;
mongoose.connect(process.env.MONGODB_URL, { useMongoClient: true });

app.use('/api/auth', auth);
app.use('/api/users', users);
app.use('/api/books', books);
app.use('/api/dreams', dreams);

app.use('/test/', (req, res) => {
    const data = [{ id: 1, name: 'an name', description: 'какое-то описание', my: true, important: false, date: Date.now() }]
    res.json({ data });
})
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
})

app.listen(8080, () => console.log('Running on localhost:8081'));


