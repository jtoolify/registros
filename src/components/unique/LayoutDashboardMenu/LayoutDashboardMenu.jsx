import React from 'react';
import './LayoutDashboardMenu.css';

const LayoutDashboardMenu = ({userModalOpen}) => {
  return (
    <nav className={`contenedorMenuAdmin ${userModalOpen ? 'toggle' : ''}`} id="idMenuAdmin" >
      <div className="contenedorTituloMenu">
        <h2>admin</h2>
      </div>
      <div className="divisorMenuBorder"></div>
    </nav>
  );
};

export default LayoutDashboardMenu;
