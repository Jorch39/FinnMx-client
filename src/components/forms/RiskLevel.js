import React, { useContext, useEffect, useState } from 'react';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';

import AuthContext from '../../context/auth/authContext';
import FormContext from '../../context/forms/formContext';

const RiskLevel = props => {

    //Extraer la información de autenticación
    const authContext = useContext(AuthContext);
    const { authenticatedUser } = authContext;

    //Extraer la información del form
    const formContext = useContext(FormContext);
    const { updateForm, showError } = formContext;

    useEffect(() => {
        authenticatedUser();
        //eslint-disable-next-line
    }, [])

    //State para proyecto
    const [form, setForm] = useState({
        risk: ''
    }
    );

    const { risk } = form;

    //Contenido del input
    const onChange = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    //Submit 
    const onSubmit = e => {
        e.preventDefault();

        //Validar
        if (risk === '') {
            showError();
            return;
        }

        const formId = localStorage.getItem('formId');
        const isValid = updateForm(formId, form);
        console.log(isValid)

        if (isValid) props.history.push('/loading-analysis')

        //Reiniciar el form
        setForm({
            risk: ''
        });
    }

    return (
        <div>
            <Navbar />
            <div className='flex justify-center bg-white pt-20'>
                <div className='bg-white rounded-t-lg overflow-hidden border-l border-r border-gray-400 lg:pt-64 flex justify-center m-4 p-10 shadow-xl'>
                    <form className="w-full max-w-5xl items-center" onSubmit={onSubmit} >
                        <p className='text-center text-teal-500'>Paso 6 de 6</p>
                        <h2 className='text-center text-3xl mt-8 py-2 lg:min-w-8xl lg:my-20'>¿Qué tipo de rentabilidad te gustaría obtener? </h2>
                        <p className='text-gray-700 mt-10 text-md'>Toma en cuenta que instrumentos con mayor rentabilidad son también los que enfrentan mayor nivel de riesgo.</p>
                        <div className='text-center mt-16'>
                            <div className="inline-block relative w-64 text-center">
                                <select className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-6 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline" type="text" name='risk' id='risk' value={risk} onChange={onChange}>
                                    <option>Rendimientos altos -  Riesgo alto</option>
                                    <option>Rendimientos moderados - Riesgo moderado</option>
                                    <option>Rendimientos bajos - Riesgo bajo</option>
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                </div>
                            </div>
                        </div>
                        <div className='text-center lg:my-48 mt-16 '>
                            <button className="shadow bg-black text-white font-bold py-4 px-12 rounded-full text-lg transition duration-500 ease-in-out hover:bg-teal-500 hover:text-white transform hover:-translate-y-1 hover:scale-110" type='submit'>Enviar</button>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default RiskLevel;

