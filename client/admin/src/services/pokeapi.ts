import axios from 'axios';

const api = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com', // Cambia esta URL por tu API
    timeout: 10000, // Tiempo máximo de espera para las solicitudes (en milisegundos)
    headers: {
        'Content-Type': 'application/json',
        // Aquí puedes agregar otros encabezados si es necesario
    },
});