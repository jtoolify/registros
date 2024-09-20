'use client';

import { useState, useEffect } from 'react';
import LayoutWrapper from "@/layout/LayoutWrapper";
import {
  TextField,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Pagination,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle
} from '@mui/material';
import * as XLSX from 'xlsx';

export default function Page() {
  const [dispositivos, setDispositivos] = useState([]);
  const [formData, setFormData] = useState({ tipo: '', marca: '', modelo: '', numeroDeSerie: '', fechaAdquisicion: '', estado: '', ubicacion: '', notas: '' });
  const [editingDispositivo, setEditingDispositivo] = useState(null);
  const [searchInput, setSearchInput] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const dispositivosPerPage = 8;

  useEffect(() => {
    fetchDispositivos();
  }, []);

  const fetchDispositivos = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/dispositivo');
      const data = await res.json();
      setDispositivos(data);
    } catch (error) {
      console.error('Error fetching dispositivos:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formattedData = {
      ...formData,
      fechaAdquisicion: new Date(formData.fechaAdquisicion).toISOString(),
    };

    if (editingDispositivo) {
      await updateDispositivo(editingDispositivo.id, formattedData);
    } else {
      await createDispositivo(formattedData);
    }

    setFormData({ tipo: '', marca: '', modelo: '', numeroDeSerie: '', fechaAdquisicion: '', estado: '', ubicacion: '', notas: '' });
    setEditingDispositivo(null);
    setModalOpen(false);
    fetchDispositivos();
  };

  const createDispositivo = async (dispositivo) => {
    try {
      const res = await fetch('/api/dispositivo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dispositivo),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Error creando dispositivo');
    } catch (error) {
      console.error('Error creando dispositivo:', error);
      alert('Error creando dispositivo: ' + error.message);
    }
  };

  const updateDispositivo = async (id, dispositivo) => {
    try {
      const res = await fetch(`/api/dispositivo/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dispositivo),
      });
      if (!res.ok) throw new Error('Error actualizando dispositivo');
    } catch (error) {
      console.error('Error actualizando dispositivo:', error);
    }
  };

  const deleteDispositivo = async (id) => {
    try {
      await fetch(`/api/dispositivo/${id}`, { method: 'DELETE' });
      fetchDispositivos();
    } catch (error) {
      console.error('Error eliminando dispositivo:', error);
    }
  };

  const handleEdit = (dispositivo) => {
    setFormData({
      tipo: dispositivo.tipo,
      marca: dispositivo.marca,
      modelo: dispositivo.modelo,
      numeroDeSerie: dispositivo.numeroDeSerie,
      fechaAdquisicion: dispositivo.fechaAdquisicion ? dispositivo.fechaAdquisicion.split('T')[0] : '',
      estado: dispositivo.estado,
      ubicacion: dispositivo.ubicacion,
      notas: dispositivo.notas,
    });
    setEditingDispositivo(dispositivo);
    setModalOpen(true); // Abrir el modal para editar
  };

  const openModal = () => {
    setModalOpen(true);
    setEditingDispositivo(null);
    setFormData({ tipo: '', marca: '', modelo: '', numeroDeSerie: '', fechaAdquisicion: '', estado: '', ubicacion: '', notas: '' });
  };

  const filteredDispositivos = dispositivos.filter(dispositivo =>
    dispositivo.tipo?.toLowerCase().includes(searchInput.toLowerCase()) ||
    dispositivo.marca?.toLowerCase().includes(searchInput.toLowerCase()) ||
    dispositivo.modelo?.toLowerCase().includes(searchInput.toLowerCase()) ||
    dispositivo.numeroDeSerie?.toLowerCase().includes(searchInput.toLowerCase()) ||
    dispositivo.estado?.toLowerCase().includes(searchInput.toLowerCase()) ||
    dispositivo.ubicacion?.toLowerCase().includes(searchInput.toLowerCase()) ||
    dispositivo.notas?.toLowerCase().includes(searchInput.toLowerCase())
  );

  const indexOfLastDispositivo = currentPage * dispositivosPerPage;
  const indexOfFirstDispositivo = indexOfLastDispositivo - dispositivosPerPage;
  const currentDispositivos = filteredDispositivos.slice(indexOfFirstDispositivo, indexOfLastDispositivo);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const downloadExcel = () => {
    const ws = XLSX.utils.json_to_sheet(dispositivos);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Dispositivos');
    XLSX.writeFile(wb, 'dispositivos.xlsx');
  };

  return (
    <LayoutWrapper layout="dashboard">
      <div style={{ padding: '25px' }}>
        <h2>Dispositivos</h2>

        <Button variant="contained" color="secondary" onClick={downloadExcel} style={{ marginBottom: '20px' }}>
          Descargar Excel
        </Button>

        <Button variant="contained" color="primary" onClick={openModal} style={{ marginBottom: '20px' }}>
          Crear Dispositivo
        </Button>

        <TextField
          label="Buscar"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          fullWidth
          margin="normal"
        />

        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Tipo</TableCell>
                <TableCell>Marca</TableCell>
                <TableCell>Modelo</TableCell>
                <TableCell>Número de Serie</TableCell>
                <TableCell>Acciones</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {loading ? (
                <TableRow>
                  <TableCell colSpan={5} style={{ textAlign: 'center' }}>
                    <CircularProgress />
                    <div>Cargando...</div>
                  </TableCell>
                </TableRow>
              ) : (
                currentDispositivos.map((dispositivo) => (
                  <TableRow key={dispositivo.id}>
                    <TableCell>{dispositivo.tipo}</TableCell>
                    <TableCell>{dispositivo.marca}</TableCell>
                    <TableCell>{dispositivo.modelo}</TableCell>
                    <TableCell>{dispositivo.numeroDeSerie}</TableCell>
                    <TableCell>
                      <Button onClick={() => handleEdit(dispositivo)}>Editar</Button>
                      <Button onClick={() => deleteDispositivo(dispositivo.id)} color="error">
                        Eliminar
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </TableContainer>

        <Pagination
          count={Math.ceil(filteredDispositivos.length / dispositivosPerPage)}
          page={currentPage}
          onChange={handlePageChange}
          color="primary"
          style={{ marginTop: '20px' }}
        />

        <Dialog open={modalOpen} onClose={() => setModalOpen(false)}>
          <DialogTitle>{editingDispositivo ? 'Editar Dispositivo' : 'Crear Dispositivo'}</DialogTitle>
          <DialogContent>
            <form onSubmit={handleSubmit}>
              <TextField
                label="Tipo"
                value={formData.tipo}
                onChange={(e) => setFormData({ ...formData, tipo: e.target.value })}
                required
                fullWidth
                margin="normal"
              />
              <TextField
                label="Marca"
                value={formData.marca}
                onChange={(e) => setFormData({ ...formData, marca: e.target.value })}
                required
                fullWidth
                margin="normal"
              />
              <TextField
                label="Modelo"
                value={formData.modelo}
                onChange={(e) => setFormData({ ...formData, modelo: e.target.value })}
                required
                fullWidth
                margin="normal"
              />
              <TextField
                label="Número de Serie"
                value={formData.numeroDeSerie}
                onChange={(e) => setFormData({ ...formData, numeroDeSerie: e.target.value })}
                required
                fullWidth
                margin="normal"
              />
              <TextField
                label="Fecha de Adquisición"
                type="date"
                value={formData.fechaAdquisicion}
                onChange={(e) => setFormData({ ...formData, fechaAdquisicion: e.target.value })}
                fullWidth
                margin="normal"
                InputLabelProps={{ shrink: true }}
              />
              <TextField
                label="Estado"
                value={formData.estado}
                onChange={(e) => setFormData({ ...formData, estado: e.target.value })}
                fullWidth
                margin="normal"
              />
              <TextField
                label="Ubicación"
                value={formData.ubicacion}
                onChange={(e) => setFormData({ ...formData, ubicacion: e.target.value })}
                fullWidth
                margin="normal"
              />
              <TextField
                label="Notas"
                value={formData.notas}
                onChange={(e) => setFormData({ ...formData, notas: e.target.value })}
                fullWidth
                margin="normal"
              />
              <DialogActions>
                <Button onClick={() => setModalOpen(false)}>Cancelar</Button>
                <Button type="submit" color="primary">{editingDispositivo ? 'Actualizar' : 'Crear'}</Button>
              </DialogActions>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    </LayoutWrapper>
  );
}
