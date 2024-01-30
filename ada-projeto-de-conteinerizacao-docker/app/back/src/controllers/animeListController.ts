import { Request, Response } from 'express';
import animeListService from '../services/animeListService';

const getAnimeList = async (req: Request, res: Response) => {
  const animeList = await animeListService.getAnimeList();
  return res.status(200).json({ animeList });
};

export default { getAnimeList };