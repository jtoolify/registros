import { UserButton, useUser } from "@clerk/nextjs";
import './LayoutDashboardHeader.css';
import Image from 'next/image';
import logoMenu from '@/assets/img/menu.png';

const LayoutDashboardHeader = ({ setUserModalOpen }) => {
  const { user } = useUser(); // Accede a los detalles del usuario

  // Extrae el correo electrónico y elimina todo después del símbolo '@'
  const email = user?.emailAddresses[0]?.emailAddress || '';
  const emailPrefix = email.split('@')[0]; // Toma la parte antes del '@'

  return (
    <header className="header">
      <button 
        className="btnMenuAdmin" 
        onClick={() => setUserModalOpen(prev => !prev)}
      >
        <Image 
          src={logoMenu} 
          alt="Menu" 
          priority
        />
      </button>
      <div className="contenedoBtnHeader">
        <div className="divisorHeaderBorder"></div>
        <div className="contenedorUsuario">
          {/* Muestra solo la parte antes del '@' */}
          {emailPrefix && <span>{emailPrefix}</span>} 
          <UserButton afterSignOutUrl="/login" />
        </div>
      </div>
    </header>
  );
};

export default LayoutDashboardHeader;
