import LayoutWrapper from "@/layout/LayoutWrapper";
import Link from 'next/link';
import { Box, Typography, Button } from '@mui/material';

export default function Inicio() {
  return (
    <LayoutWrapper layout="cliente">
      <Box 
        sx={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          justifyContent: 'center', 
          height: '100vh', 
          backgroundColor: '#f5f5f5',
          padding: '20px', 
          borderRadius: '8px', 
          boxShadow: 3 
        }}
      >
        <Typography variant="h2" sx={{ marginBottom: '20px', color: '#333' }}>
          Bienvenido a Inicio
        </Typography>
        <Link href="/login" style={{ textDecoration: 'none' }}>
          <Button variant="contained" color="primary" size="large">
            Ir a Dashboard
          </Button>
        </Link>
      </Box>
    </LayoutWrapper>
  );
}
