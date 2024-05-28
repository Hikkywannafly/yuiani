import { animevsubScraper } from "@/providers/sources/animevsub";
import { test } from "vitest";
import { makeSourcerer } from "@/providers/base";
import { testSource } from './providerUtils';
import { testMediaAnime } from './testMedia';

testSource({
    source: animevsubScraper,
    testSuite: [testMediaAnime.jujutsuKaisen],
    types: ['proxied'],
    expect: {
        streams: 1,
    },
});

// test("animevsubScraper", async () => {

//     const avs = await animevsubScraper.scrapeAnime(testMediaAnime.jujutsuKaisen);
// });