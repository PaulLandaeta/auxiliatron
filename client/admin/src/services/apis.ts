import axios from 'axios';
// una instancia para conectarme al API de Pokemon

// TODO: create env
const POKE_API_BASE_URL = 'https://pokeapi.co/api/v2/';
export const pokeAPI = axios.create({
    baseURL: POKE_API_BASE_URL, // Cambia esta URL por tu API
    timeout: 10000, // Tiempo máximo de espera para las solicitudes (en milisegundos)
    headers: {
        'Content-Type': 'application/json',
        // Aquí puedes agregar otros encabezados si es necesario
    },
});

const INTERNAL_API = 'http://localhost:5000/';

export const internarAPI = axios.create({
    baseURL: INTERNAL_API, // Cambia esta URL por tu API
    timeout: 10000, // Tiempo máximo de espera para las solicitudes (en milisegundos)
    headers: {
        'Content-Type': 'application/json',
        // Aquí puedes agregar otros encabezados si es necesario
    },
});
