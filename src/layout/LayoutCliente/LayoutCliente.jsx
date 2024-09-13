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
    <h2>layout de cliente</h2>
    {children}
  </div>
);

export default LayoutCliente;
