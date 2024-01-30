import prisma from '../database/connection';
import { IAnimeList } from '../interfaces/animeListInterface';

const getAnimeList = async (): Promise<IAnimeList[]> => {
  try {
    const animeList: IAnimeList[] = await prisma.anime.findMany();
    return animeList;
  } catch (error) {
    console.log(error);
    throw new Error('Error on get anime list');
  }
}

export default { getAnimeList };