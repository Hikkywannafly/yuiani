import { ScrapeMedia } from '@/entrypoint/utils/media';

function makeMedia(media: ScrapeMedia): ScrapeMedia {
  return media;
}

export const testMedia = {
  arcane: makeMedia({
    type: 'show',
    title: 'Arcane',
    tmdbId: '94605',
    releaseYear: 2021,
    episode: {
      number: 1,
      tmdbId: '1953812',
    },
    season: {
      number: 1,
      tmdbId: '134187',
    },
    imdbId: 'tt11126994',
  }),
  hamilton: makeMedia({
    type: 'movie',
    tmdbId: '556574',
    imdbId: 'tt8503618',
    releaseYear: 2020,
    title: 'Hamilton',
  }),
};

export const testMediaAnime = {
  jujutsuKaisen: makeMedia({
    type: 'anime',
    releaseYear: 2020,
    title: 'Jujutsu Kaisen',
    media: {
      id: 107922,
      title: {
        romaji: 'Jujutsu Kaisen',
        english: 'Jujutsu Kaisen',
      },
    },
    episode: {
      number: 1,
      anilistId: '117469',
    },
    season: {
      number: 1,
      anilistId: '117469',
    },
  }),
};
