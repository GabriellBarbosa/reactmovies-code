import React from 'react';
import styles from './Footer.module.css';
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>Todos os dados foram tirados da API do The Movie Database.</p>
    </footer>
  );
};

export default Footer;
