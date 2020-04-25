import React, { useState } from 'react';


const MediumRisk = () => {

    const [displayDropdown, setdisplayDropdown] = useState(false)
    const [displayDropdown2, setdisplayDropdown2] = useState(false)


    const handleDropDown = () => {
        if (displayDropdown === true) {
            setdisplayDropdown(false)
        } else {
            setdisplayDropdown(true)
        }
    }

    const handleDropDown2 = () => {
        if (displayDropdown2 === true) {
            setdisplayDropdown2(false)
        } else {
            setdisplayDropdown2(true)
        }
    }

    return (
        <div>                  
            <div className="pb-20"> 
                <div className="inline-block flex justify-between bg-gray-200 rounded-m px-3 my-2 py-2 text-2xl font-semibold transition duration-500 ease-in-out hover:bg-black hover:text-white transform hover:-translate-y-1 hover:scale-110">
                    <p>Fondos de inversión</p>
                    <p onClick={handleDropDown} className="cursor-pointer">+</p>                 
                </div>
                    
                {displayDropdown ? <ul className="block w-full bg-gray-200 rounded-m px-3 my-2 py-2 text-2xl font-semibold mr-2 ">
                    <p className='text-sm py-2 px-1 text-justify'>Los fondos de inversión son un conjunto de valores (títulos como bonos o acciones) que se construye para ser un vehículo de inversión.</p>
                    <p className='text-sm py-2 px-1 text-justify'>El inversionista que compra el “fondo”, deja en manos del administrador los títulos que decide comprar y cómo o cuándo venderlos, y según los lineamientos de su institución, podrá ofrecer un rendimiento determinado. </p>
                    <p className='text-sm py-2'>Estos son algunos fondos de inversión en las que puedes invertir en México y su rendimiento de 2019:</p>
                    <ul className="inline-block flex-row justify-between w-full list-disc px-10" >
                        <li className='text-sm text-left p-2 '>SURBONO	BDF ( + 13.46 % ) </li>
                        <li className='text-sm text-left p-2 '>SCOTILP E ( + 12.82 %</li>
                        <li className='text-sm text-left p-2 '>ST&ER-7	B1( + 11.78 %</li>
                        <li className='text-sm text-left p-2 '>CRECE+ B-M1 ( + 10.57 % )</li>
                        <li className='text-sm text-left p-2 '>SURGOB BF ( + 6.19 % )</li>
                        <li className='text-sm text-left p-2 '>GBMF2 BF ( + 5.39% ) </li>
                            
                    </ul >
                    <div className='text-center lg:my-48 py-10'>
                            <button className="shadow bg-black text-white font-bold py-4 px-12 rounded-full text-lg transition duration-500 ease-in-out hover:bg-teal-500 hover:text-white transform hover:-translate-y-1 hover:scale-110"  type='button'>Invertir</button>
                    </div>

                </ul> : null } 

                <div className="inline-block flex justify-between bg-gray-200 rounded-m px-3 my-2 py-2 text-2xl font-semibold transition duration-500 ease-in-out hover:bg-black hover:text-white transform hover:-translate-y-1 hover:scale-110">
                    <p>Fibras</p>
                    <p onClick={handleDropDown2} className="cursor-pointer">+</p>                 
                </div>
                    
                {displayDropdown2 ? <div className="block w-full bg-gray-200 rounded-m px-3 my-2 py-2 text-2xl font-semibold mr-2 "> 
                    <p className='text-sm py-2 px-1 text-justify'>Las FIBRAS (Fideicomisos de Infraestructura y Bienes Raíces) permiten el financiamiento para la compra o construcción de bienes inmuebles en México.</p>
                    <p className='text-sm py-2 px-1 text-justify'>Son considerados instrumentos híbridos ya que pueden otorgar rendimientos producto del arrendamiento (deuda) y rendimientos variables producto de la plusvalía de los inmuebles (capitales)</p>
                    <p className='text-sm py-2'>Estos son algunas fibras en las que puedes invertir en México y su rendimiento de 2019:</p>
                    <ul className="inline-block flex-row justify-between w-full list-disc px-10" >
                        <li className='text-sm text-left p-2 '>Fibra Macquarie  ( +39.06 % )</li>
                        <li className='text-sm text-left p-2 '>Fibra PI( +38.22 % )</li>
                        <li className='text-sm text-left p-2 '>Fibra Uno ( +34.11 % )</li>
                        <li className='text-sm text-left p-2 '>Terra ( +32.79 % )</li>
                        <li className='text-sm text-left p-2 '>Danhos ( +23.46 % )</li>
                        <li className='text-sm text-left p-2 '>Fibra Shop ( +15.95 % )</li>

                    </ul >
                    <div className='text-center lg:my-48 py-10'>
                            <button className="shadow bg-black text-white font-bold py-4 px-12 rounded-full text-lg transition duration-500 ease-in-out hover:bg-teal-500 hover:text-white transform hover:-translate-y-1 hover:scale-110"  type='button'>Invertir</button>
                    </div>

                </div> : null } 
            </div>
        </div>
    );
}

export default MediumRisk;

