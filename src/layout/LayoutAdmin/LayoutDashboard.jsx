"use client";
import { Roboto } from 'next/font/google';
import './DashboardLayoutglobal.css';
import './DashboardLayout.css';

const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['latin'],
});

const LayoutDashboard = ({ children }) => {
  
  return (
  <div className="contenedorLayoutDashboard">
    <h2>layout dashboard</h2>
    {children}
  </div>
)};

export default LayoutDashboard;

