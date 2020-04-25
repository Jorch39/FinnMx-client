import React, { useContext, useEffect, useState } from 'react';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';
import FormContext from '../../context/forms/formContext';
import HighRisk from './HighRisk';
import MediumRisk from './MediumRisk';
import LowRisk from './LowRisk';


const Recommender = (props) => {

    const formContext = useContext(FormContext);
    const { form, getForms } = formContext;

    const [formLocal, setformLocal] = useState(localStorage.getItem('form'))
    const [displayDropdown, setdisplayDropdown] = useState(false)

    const handleDropDown = () => {
        if (displayDropdown === true) {
            setdisplayDropdown(false)
        } else {
            setdisplayDropdown(true)
        }
        // setdisplayDropdown(!displayDropdown)
    }

    const isHighRisk = () => {
        if (form.risk) {
            return form.risk.includes('alto')
        } else if (formLocal.risk) {
            return formLocal.risk.includes('alto')
        }
        return false
    }

    const isMediumRisk = () => {
        if (form.risk) {
            return form.risk.includes('moderado')
        } else if (formLocal.risk) {
            return formLocal.risk.includes('moderado')
        }
        return false
    }

    const isLowRisk = () => {
        if (form.risk) {
            return form.risk.includes('bajo')
        } else if (formLocal.risk) {
            return formLocal.risk.includes('bajo')
        }
        return false
    }

    const getAnalysis = async () => {

        //Agregar al state 
        const formId = localStorage.getItem('formId');
        const isValid = getForms(formId);
    }

    useEffect(() => {
        setformLocal(JSON.parse(formLocal))
        getAnalysis();
        // eslint-disable-next-line
    }, []);

    return (
        <div>
            <Navbar />
            <section>
                <div className="bg-white rounded-t-lg overflow-hidden border-l border-r border-gray-400 pt-24 mx-2 flex justify-center">
                    <div className="max-w-lg overflow-hidden shadow-lg">
                        <div className="svg-wrapper m-4 text-center">
                            <svg className='text-center' height={100} width={300} xmlns="http://www.w3.org/2000/svg">
                                <rect className="shape" height={100} width={300} />
                            </svg>
                            <div className="text-rec text-3xl font-bold duration-500 ease-in-out pl-4 pt-1 transform hover:-translate-y-1 hover:scale-110">Tu resultado financiero</div>
                        </div>
                        <div className="px-6 pt-4">
                            <div className="font-bold text-3xl text-teal-600 text-center mb-2"></div>
                            <p className="text-gray-800 text-xl mt-16 mb-10 text-base">Dado tu perfil y tu sentimiento de inversión te sugerimos darle una hojeada a los siguientes instrumentos financieros: </p>
                        </div>
                        <div className="px-6 ">
                            { isHighRisk() ? <HighRisk />
                            : isMediumRisk() ? <MediumRisk />
                            : isLowRisk() ? <LowRisk/>
                            : null }
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>

    );
}

export default Recommender;

