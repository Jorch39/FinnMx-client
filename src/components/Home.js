import React from 'react';
import { Link } from 'react-router-dom';
// import AlertaContext from '../../context/alertas/alertaContext';
// import AuthContext from '../../context/autenticacion/authContext';
import Footer from './layout/Footer';
import Navbar from './layout/Navbar';
import cdmx from './cdmx.jpg'



const Home = () => {

  return (
    <div >
      <Navbar />
      <section className='lg:items-center text-center pt-16'>
        <img src={cdmx} height="1000" width="1000" className='object-cover opacity-50 pt-3 z-10'></img>
        <p className="text-gray-800 text-xl my-16 mb-10 px-10 text-base">En México, sólo el 0.0035% de la población económicamente activa invierte en la Bolsa Mexicana de Valores.* </p>
      </section>
      <section className='px-10'>
        <div className=" border-b border-t border-b-2 border-teal-500 my-12 lg:my-40">
          <h2 className='text-center text-2xl py-4 lg:min-w-8xl lg:my-20 font-bold'>¿Te gustaría invertir pero no sabes donde? </h2>
        </div>

        <p className="text-gray-800 text-xl mt-16 mb-10 text-base">FinnMx te ayuda a tener mejor visibilidad de instrumentos financieros donde puedes invertir de acuerdo a tu perfil. </p>

        <div className=" border-b border-t border-b-2 border-teal-500 my-12 lg:my-40">
          <h2 className='text-center text-2xl py-4 lg:min-w-8xl lg:my-20 font-bold'>¿Cómo lo hace? </h2>
        </div>

        <p className="text-gray-800 text-xl mt-16 mb-10 text-base">Analiza tu información financiera y el nivel de riesgo que estás dispuesto a afrontar. Nuestro algoritmo hará el resto y te dirá las opciones que más se adecuen para ti.</p>
        <div className="xl:flex items-center py-8 my-12 text-center ">
          <div className="text-center">
            <button className="shadow bg-black text-white font-bold py-4 px-12 rounded-full text-lg transition duration-500 ease-in-out hover:bg-teal-500 hover:text-white transform hover:-translate-y-1 hover:scale-110" type='button'><Link to={'/savings-info'}>Ingresar</Link></button>

          </div>
          {/* <div className="xl:w-1/3"/> */}
        </div>
      </section>
      <Footer />

    </div>
  );
}

export default Home;

