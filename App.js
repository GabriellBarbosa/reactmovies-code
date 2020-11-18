import React from 'react';
import './App.css';
import { api } from './api';
import AllMovies from './Components/MovieList/AllMovies';
import FeaturedMovie from './Components/FeaturedMovie';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Loading from './Components/Loading';

const App = () => {
  const [movieData, setMovieData] = React.useState([]);
  const [featured, setFeatured] = React.useState({});

  React.useEffect(() => {
    async function pullMoviesData() {
      const info = await api.movieInfo();
      setMovieData(info);

      const originalsMovies = info.filter((item) => item.slug === 'originals');
      let randomNumber = Math.floor(
        Math.random() * originalsMovies[0].item.results.length - 1,
      );
      if (randomNumber === 16) {
        randomNumber += 1;
      }
      console.log(originalsMovies[0].item.results.length - 1);
      const movieChosen = originalsMovies[0].item.results[randomNumber];
      const chosenInfo = await api.pullMovieInfo(movieChosen.id, 'tv');
      setFeatured(chosenInfo);
    }
    pullMoviesData();
  }, []);

  if (!movieData.length) return <Loading />;
  return (
    <div>
      <Header />
      {featured && <FeaturedMovie data={featured} />}
      <section className="AllMovies">
        {movieData.map((item) => (
          <AllMovies key={item.title} title={item.title} items={item.item} />
        ))}
      </section>
      <Footer />
    </div>
  );
};

export default App;
