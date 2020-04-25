import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../../context/auth/authContext';
import FormContext from '../../context/forms/formContext';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';

const SavingsInfo = (props) => {

    //Extraer la información de autenticación
    const authContext = useContext(AuthContext);
    const { user, authenticatedUser } = authContext;

    //Extraer la información del form
    const formContext = useContext(FormContext);
    const { addForm, showError} = formContext;

    useEffect(() => {
        authenticatedUser();
        //eslint-disable-next-line
    }, [])

    //State para proyecto
    const [form, setForm] = useState({
        info: ''
    }
    );

    const { info } = form;

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
        if (info === '') {
            showError();
            return;
        }

        //Agregar al state 
        const isValid = addForm(form);
        if(isValid) props.history.push('/savings-percentage');
        else console.log('Could not redirect')

        //Reiniciar el form
        setForm({
            info: ''
        });

    }

    return (
        <div>
            <Navbar />
            <div className='flex justify-center bg-white pt-20'>

                <div className='bg-white max-w-2xl m-4 p-8 rounded-t-lg overflow-hidden border-l border-r border-gray-400 lg:pt-64 flex justify-center overflow-hidden shadow-xl'>

                    <form className="w-full items-center" onSubmit={onSubmit}>
                        <p className='text-center text-teal-500'>Paso 1 de 6</p>
                        { user ? <p className='text-2xl my-8'>Hola <span>{user.name}</span></p> : null } 
                        <p className='text-center text-gray-700 px-1'>A partir de aquí comenzaremos a evaluar tu información actual</p>

                        
                        <h2 className='text-center text-2xl py-4 mt-10 lg:min-w-8xl lg:my-20'>¿De cuánto es tu ahorro (ingresos - gastos) mensual? </h2>
                        <div className=" border-b border-b-2 border-teal-500 my-12 lg:my-40">
                            <input className="appearance-none bg-transparent border-none text-gray-700 mr-3 px-2 leading-tight focus:outline-none" type="number" placeholder="Eg. 10,000" name='info' id='info' value={info} onChange={onChange} />
                        </div>
                        <div className='text-center lg:my-48 py-10'>
                            <button className="shadow bg-black text-white font-bold py-4 px-12 rounded-full text-lg transition duration-500 ease-in-out hover:bg-teal-500 hover:text-white transform hover:-translate-y-1 hover:scale-110"  type='submit'>Siguiente</button>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default SavingsInfo;
