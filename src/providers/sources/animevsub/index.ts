import { flags } from '@/entrypoint/utils/targets';
import { makeSourcerer } from '@/providers/base';
import { scrapeMovie } from '@/providers/sources/zoechip/scrape-movie';
import { scrapeShow } from '@/providers/sources/zoechip/scrape-show';

export const animevsubBase = `https://animevietsub.day/`;

export const animevsubScraper = makeSourcerer({
  id: 'animevsub',
  name: 'Animevsub',
  rank: 62,
  flags: [flags.CORS_ALLOWED],
  disabled: true,
  scrapeMovie,
  scrapeShow,
});
