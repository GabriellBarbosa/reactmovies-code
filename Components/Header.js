import React from 'react';
import styles from './Header.module.css';
const Header = () => {
  const [activeHeader, setActiveHeader] = React.useState(false);
  const [menuMobile, setMenuMobile] = React.useState(false);

  function handleClick({ currentTarget }) {
    currentTarget.addEventListener('click', () => {
      setMenuMobile(!menuMobile);
      return currentTarget;
    });
  }
  React.useEffect(() => {
    function onScroll() {
      const topDistance = document.documentElement.scrollTop;
      if (topDistance > 0) {
        setActiveHeader(true);
      } else {
        setActiveHeader(false);
      }
    }
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <header className={`${styles.header} ${activeHeader ? styles.active : ''}`}>
      <h1 className={styles.header__title}>
        React<span>Movies</span>
      </h1>
      <div
        onClick={handleClick}
        className={`${styles.menuMobile__wrapper} ${
          menuMobile ? styles.ativo : ''
        }`}
      >
        <span className={styles.menuMobile}></span>
      </div>
      <ul
        className={`${styles.header__list} ${
          menuMobile ? styles.header__listAtivo : ''
        }`}
      >
        <li>Inicio</li>
        <li>Filmes</li>
        <li>Séries</li>
        <li>Documentários</li>
      </ul>
    </header>
  );
};

export default Header;
