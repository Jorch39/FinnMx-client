import React, {useContext, useEffect, useState} from 'react';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';

import AuthContext from '../../context/auth/authContext';
import FormContext from '../../context/forms/formContext';


const InvestValue = props => {

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
        value:''
    } 
    );

    const { value } = form;

    //Contenido del input
    const onChange = e => {
        setForm({
            ...form,
            [e.target.name] : e.target.value
        })
    }

    //Submit 
    const onSubmit = e => {
        e.preventDefault();

        //Validar
        if (value === '') {
            showError();
            return;
        }

        const formId = localStorage.getItem('formId');
        const isValid = updateForm(formId, form);

        if(isValid) props.history.push('/risk-level')

        //Reiniciar el form
        setForm({
            value: ''
        });
    }
    
    return ( 
        <div>
            <Navbar />
            <div className='flex justify-center bg-white pt-20'>
                <div className='bg-white rounded-t-lg overflow-hidden border-l border-r border-gray-400 lg:pt-64 flex justify-center m-4 p-10 shadow-xl'>
                    <form className="w-full max-w-5xl items-center" onSubmit={onSubmit}>
                        <p className='text-center text-teal-500'>Paso 5 de 6</p>
                        <h2 className='text-center text-3xl py-4 mt-8 lg:min-w-8xl lg:my-20'>¿Cuál es su valor aproximado? </h2>
                        <div className=" border-b border-b-2 border-teal-500 my-20 lg:my-40">
                            <input className="appearance-none bg-transparent border-none text-gray-700 mr-3 px-2 leading-tight focus:outline-none" type="text" placeholder="Eg. 100,000" name='value' id='value' value={value} onChange={onChange} />
                        </div>
                        <div className='text-center lg:my-48  pt-8'>
                            <button className="shadow bg-black text-white font-bold py-4 px-12 rounded-full text-lg transition duration-500 ease-in-out hover:bg-teal-500 hover:text-white transform hover:-translate-y-1 hover:scale-110"  type='submit'>Siguiente</button>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
     );
}
 
export default InvestValue;
