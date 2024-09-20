import React from 'react';
import { Roboto } from 'next/font/google';
import './LayoutClienteglobal.css';
import styles from './LayoutCliente.module.css';

const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['latin'],
});

const LayoutCliente = ({ children }) => (
  <div className={`${styles.LayoutClienteContenedor} ${roboto.className}`}>
    {children}
  </div>
);

export default LayoutCliente;
