import express from 'express';

import animeListRouter from './routes/animeListRoute';

import cors from 'cors';


const app = express();

app.use(cors());

app.use(express.json());

app.use('/anime-list', animeListRouter);

export default app;
