import { load } from 'cheerio';

import { flags } from '@/entrypoint/utils/targets';
import { makeSourcerer } from '@/providers/base';
import { scrapeMovie } from '@/providers/sources/zoechip/scrape-movie';
import { scrapeShow } from '@/providers/sources/zoechip/scrape-show';
import { AnimeScrapeContext } from '@/utils/context';

import { urltoId } from './util';

export const animevsubBase = `https://animevietsub.fun/`;

export async function _totalSearch(mediaRoot: any, search: any) {
  const media = mediaRoot.media;
  const titles = Array.from(new Set([media?.title?.english, media?.title?.romaji]));

  if (!titles?.length) return [];

  for (const title of titles) {
    try {
      const searchResults = await search(title);

      if (!searchResults?.length) continue;

      return searchResults;
    } catch (err) {
      console.error(err);
    }
  }

  return [];
}

export async function _search(ctx: AnimeScrapeContext) {
  const search = ctx.fetcher<string>(
    `/tim-kiem/${encodeURIComponent(ctx.media.title.toLowerCase()).replaceAll('%20', '+')}}`,
  );
  const searchPage = load(await search);

  const searchResults = searchPage('.TPostMv')
    .toArray()
    .map((el) => {
      const query = searchPage(el);
      const url = query.find('a').attr('href');
      const id = urltoId(url);
      const title = query.find('h2').text();

      return {
        id,
        title,
      };
    });
  return searchResults;
}

export const animevsubScraper = makeSourcerer({
  id: 'animevsub',
  name: 'Animevsub',
  rank: 62,
  flags: [flags.CORS_ALLOWED],
  disabled: true,
  scrapeMovie,
  scrapeShow,
  async scrapeAnime(ctx) {
    const getId = async () => {
      const searchResults = await _totalSearch(ctx.media, _search(ctx));

      const target = searchResults.find((r: any) => r.title === ctx.media.title);
      if (!target) throw new Error('Media not found');

      return target.id;
    };

    return {
      embeds: [],
      getId,
    };
  },
});
