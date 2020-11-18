import React from 'react';
import styles from './AllMovies.module.css';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

const AllMovies = ({ title, items }) => {
  const [scrollX, setScrollX] = React.useState(0);
  function handleClickLeft() {
    let x = scrollX + Math.round(window.innerWidth / 2);
    if (x > 0) {
      x = 0;
    }
    setScrollX(x);
  }

  function handleClickRight() {
    let x = scrollX - Math.round(window.innerWidth / 2);
    let listWidth = items.results.length * 200;
    if (window.innerWidth - listWidth > x) {
      const padding = window.innerWidth <= 602 ? 20 : 60;
      x = window.innerWidth - listWidth - padding;
    }
    setScrollX(x);
  }
  return (
    <main className={styles.movieItem}>
      <h1 className={styles.title}>{title}</h1>

      <div onClick={handleClickLeft} className={styles.navigateLeft}>
        <NavigateBeforeIcon style={{ fontSize: '3.5rem' }} />
      </div>
      <div onClick={handleClickRight} className={styles.navigateAfter}>
        <NavigateNextIcon style={{ fontSize: '3.5rem' }} />
      </div>

      <div className={styles.movieList__Area}>
        <div
          className={styles.movieList}
          style={{
            marginLeft: scrollX,
            width: items.results.length * 200,
          }}
        >
          {items.results.length > 0 &&
            items.results.map((movieList) => (
              <div key={movieList.id} className={styles.movieList__item}>
                <img
                  src={`https://image.tmdb.org/t/p/w300${movieList.poster_path}`}
                  alt={movieList.original_name || movieList.original_title}
                />
              </div>
            ))}
        </div>
      </div>
    </main>
  );
};

export default AllMovies;
