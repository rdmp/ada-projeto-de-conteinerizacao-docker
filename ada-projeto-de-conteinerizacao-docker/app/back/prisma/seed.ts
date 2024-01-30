import { PrismaClient } from '@prisma/client';
import { myAnimeList }  from '../src/hellpers/animeList';

const prisma = new PrismaClient();

const animeList = myAnimeList;

async function main() {
  for (const anime of animeList) {
    const exists = await prisma.anime.findUnique({
      where: { id: anime.id },
    });

    if (!exists) {
      await prisma.anime.create({
        data: anime,
      });
    }
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
