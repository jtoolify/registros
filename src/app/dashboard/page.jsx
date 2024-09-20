import LayoutWrapper from "@/layout/LayoutWrapper";
import { Box, Typography } from '@mui/material';

export default function Dashboard() {
  return (
    <LayoutWrapper layout="dashboard">
      <Box 
        sx={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          justifyContent: 'center', 
          height: 'calc(100vh - 65px)', // Ajustar el alto
          backgroundColor: '#e0f7fa',
          padding: '20px', 
          borderRadius: '8px', 
          boxShadow: 3 
        }}
      >
        <Typography variant="h2" sx={{ marginBottom: '20px', color: '#00796b' }}>
          Inicio de la Dashboard
        </Typography>
        <Typography variant="body1" sx={{ textAlign: 'center', color: '#555' }}>
          Bienvenido a tu panel de control. Aquí puedes gestionar tus dispositivos y acceder a todas las funcionalidades disponibles.
        </Typography>
      </Box>
    </LayoutWrapper>
  );
}
