import React, { useEffect, useContext } from 'react';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';
import FormContext from '../../context/forms/formContext';

const LoadingAnalysis = (props) => {

    //Extraer la información del form
    const formContext = useContext(FormContext);
    const { getForms } = formContext;

    const getAnalysis = async () => {

        //Agregar al state 
        const formId = localStorage.getItem('formId');
        const isValid = getForms(formId);

        setTimeout(() => {
            // if(result.data.forms) 
            if (isValid) props.history.push('/recommender-results');
            else console.log('Could not redirect')
        }, 5000)

    }

    useEffect(() => {

        getAnalysis();
        // eslint-disable-next-line
    }, []);

    return (

        <div>
            <Navbar />
            <div className='p-20'></div>
            <div className="max-w-sm rounded overflow-hidden shadow-lg px-24 pt-20 pb-48">
                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 81 45" enableBackground="new 0 0 81 45" xmlSpace="preserve">
                    <circle className="circle1" fill="#1ac3b3" cx="13.5" cy="22.5" r="4.5" />
                    <circle className="circle2" fill="#1ac3b3" cx="31.5" cy="22.5" r="4.5" />
                    <circle className="circle3" fill="#1ac3b3" cx="49.5" cy="22.5" r="4.5" />
                    <circle className="circle4" fill="#1ac3b3" cx="67.5" cy="22.5" r="4.5" />
                </svg>
                <p className='pt-16 pb-16'>Cargando tu análisis financiero...</p>
                <p> </p>

            </div>

            <Footer />
        </div>

    )
}

export default LoadingAnalysis;
