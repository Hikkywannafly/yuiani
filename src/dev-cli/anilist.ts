import axios from 'axios';

export type GetIdParams = {
  media: {
    id: number;
    title: {
      romaji: string;
      english: string;
      userPreferred: string;
      native: string;
    };
  };
};

export const getAnilistMedia = async (mediaId: number | string): Promise<GetIdParams> => {
  const { data } = await axios({
    url: `https://graphql.anilist.co`,
    method: `post`,
    data: {
      query: `
              query ($id: Int) {
                Media (id: $id, type: ANIME) {
                  id
                  title {
                    romaji
                    english
                    native
                    userPreferred
                  }
                }
              }
            `,
      variables: {
        id: mediaId,
      },
    },
  });
  return data?.data?.Media;
};
