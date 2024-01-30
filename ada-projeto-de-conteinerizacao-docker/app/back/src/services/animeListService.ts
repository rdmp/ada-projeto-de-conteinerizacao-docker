import animeListRepositorie from '../repositories/animeListRepositorie';
import { IAnimeList } from '../interfaces/animeListInterface';

const getAnimeList = async (): Promise<IAnimeList[]> => {
  const animeList: IAnimeList[] = await animeListRepositorie.getAnimeList();
  return animeList;
};

export default { getAnimeList };