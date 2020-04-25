import React from 'react';

const Footer = () => {
    return (
        <footer className='bg-white p-4 border-t border-gray-500 flex flex-col text-center'>
            <h2 className='text-2xl p-2 font-bold'>FinnMx</h2>
            <a href='/' className='p-2 '>Ir a Inicio</a>
            <a href='/savings-info' className='p-2 '>Accesar a nuestro simulador</a>
            <p className='text-gray-800 p-4 '>Desarrollado por Jorge Miguel Mendoza</p>
            <p className='text-gray-800 p-4 '>© 2020 Todos los derechos reservados</p>
        </footer>
    )
    }

 export default Footer;
