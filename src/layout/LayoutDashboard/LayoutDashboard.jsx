"use client";
import React, { useState } from 'react';
import { Roboto } from 'next/font/google';
import LayoutDashboardHeader from '@/components/unique/LayoutDashboardHeader/LayoutDashboardHeader';
import LayoutDashboardFooter from '@/components/unique/LayoutDashboardFooter/LayoutDashboardFooter';
import LayoutDashboardMenu from '@/components/unique/LayoutDashboardMenu/LayoutDashboardMenu';
import './DashboardLayoutglobal.css';
import './DashboardLayout.css';

const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['latin'],
});

const LayoutDashboard = ({ children }) => {
  const [userModalOpen, setUserModalOpen] = useState(false);
  
  return (
  <div className="contenedorLayoutAdmin">
    <LayoutDashboardMenu userModalOpen={userModalOpen} />
    <div className={`mainAdmin ${userModalOpen ? 'toggle' : ''}`} id="idMainAdmin">
      <LayoutDashboardHeader setUserModalOpen={setUserModalOpen}  />
      <main >
        {children}
      </main>
      <LayoutDashboardFooter />
    </div>
  </div>
)};

export default LayoutDashboard;


