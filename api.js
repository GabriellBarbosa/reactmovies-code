const API_KEY = 'f91aada4d1ee567f301885f614e26e94';
const BASE_URL = 'https://api.themoviedb.org/3';

/*
- originais da netflix
- recomendados (trending)
- em alta (top_rated)
- ação
- comédia
- terror
- romance
- documentários
*/

const pullMovieList = async (endpoint) => {
  const request = await fetch(`${BASE_URL}${endpoint}`);
  const json = await request.json();
  return json;
};

export const api = {
  movieInfo: async () => {
    return [
      {
        slug: 'originals',
        title: 'Originais ReactPrime',
        item: await pullMovieList(
          `/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`,
        ),
      },
      {
        slug: 'trending',
        title: 'Recomendados',
        item: await pullMovieList(
          `/trending/all/week?language=pt-BR&api_key=${API_KEY}`,
        ),
      },
      {
        slug: 'toprated',
        title: 'Em Alta',
        item: await pullMovieList(
          `/movie/top_rated?language=pt-BR&api_key=${API_KEY}`,
        ),
      },
      {
        slug: 'action',
        title: 'Ação',
        item: await pullMovieList(
          `/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`,
        ),
      },
      {
        slug: 'comedy',
        title: 'Comédia',
        item: await pullMovieList(
          `/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`,
        ),
      },
      {
        slug: 'horror',
        title: 'Terror',
        item: await pullMovieList(
          `/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`,
        ),
      },
      {
        slug: 'romance',
        title: 'Romance',
        item: await pullMovieList(
          `/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`,
        ),
      },
      {
        slug: 'documentary',
        title: 'Documentário',
        item: await pullMovieList(
          `/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`,
        ),
      },
    ];
  },
  pullMovieInfo: async (id, type) => {
    let info = {};
    if (id) {
      switch (type) {
        case 'movie':
          info = await pullMovieList(
            `/movie/${id}?language=pt-BR&api_key=${API_KEY}`,
          );
          break;
        case 'tv':
          info = await pullMovieList(
            `/tv/${id}?language=pt-BR&api_key=${API_KEY}`,
          );
          break;
        default:
          info = await pullMovieList(
            `/tv/${id}?language=pt-BR&api_key=${API_KEY}`,
          );

          break;
      }
    }
    return info;
  },
};
