import { render, screen } from '@testing-library/react';
import TitleCard from '../../components/TitleCard';

test('Renderiza TitleCard correctamente', () => { // Cambia "MiComponente" a "TitleCard"
  render(<TitleCard title="Título de prueba"/>);
  const elemento = screen.getByText(/Título/i);
  expect(elemento).toBeTruthy();
});

test('Realiza alguna otra prueba', () => {
  // Agrega tus pruebas personalizadas aquí
});