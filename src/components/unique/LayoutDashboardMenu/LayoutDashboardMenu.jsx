import React from 'react';
import style from './LayoutAdminMenu.module.css';
import Link from 'next/link';

const LayoutAdminMenu = ({userModalOpen}) => {
  return (
    <nav className={`contenedorMenuAdmin ${userModalOpen ? 'toggle' : ''}`}  >
      <div className={style.contenedorTituloMenu}>
        <Link href="/dashboard"><h2>admin</h2></Link>
      </div>
      <div className={style.divisorMenuBorder}></div>
      <ul className={style.contenedorUl}>
        <li><Link href="/dashboard/dispositivo">dispositivo</Link></li>
      </ul>
      <div className={style.divisorMenuBorder}></div>

    </nav>
  );
};

export default LayoutAdminMenu;
