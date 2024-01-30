import express from 'express';

import animeListController from '../controllers/animeListController';

const animeListRouter = express.Router();

animeListRouter.get(
  '/',
  animeListController.getAnimeList
);

export default animeListRouter;