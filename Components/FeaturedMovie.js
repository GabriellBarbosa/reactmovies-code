import React from 'react';
import styles from './Featured.module.css';

const FeaturedMovie = ({ data }) => {
  let year = '';
  let genresList = [];

  if (data.first_air_date) year = new Date(data.first_air_date);
  if (data.genres) {
    for (let i in data.genres) {
      genresList.unshift(data.genres[i].name);
      genresList.slice(', ');
    }
  }
  return (
    <section
      className={styles.featuredMovie}
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${data.backdrop_path})`,
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
      }}
    >
      <div className={styles.backgroundGradientVertical}>
        <div className={styles.backgroundGradientHorizontal}>
          <div className={styles.featuredMovie__content}>
            <h1 className={styles.featuredMovie__title}>
              {data.original_name}
            </h1>
            <ul className={styles.featuredMovie__info}>
              <li>Relevância: {data.vote_average}</li>
              <li>{year && year.getFullYear()}</li>
              <li>
                {data.number_of_seasons}{' '}
                {data.number_of_seasons > 1 ? 'Temporadas' : 'Temporada'}
              </li>
            </ul>
            <p className={styles.featuredMovie__overview}>{data.overview}</p>
            <div>
              <button className={styles.featuredMovie__watch}>
                ► Assistir
              </button>
              <button className={styles.featuredMovie__addList}>
                + Minha Lista
              </button>
            </div>

            <div className={styles.featuredMovie__genres}>
              <b>Gêneros:</b> {genresList}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedMovie;
