import React, {useState, useContext, useEffect } from 'react';
import { Link} from 'react-router-dom';
import AlertContext from '../../context/alerts/alertContext';
import AuthContext from '../../context/auth/authContext';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';


const SignUp = props => {

    //Extraer los valores 
    const alertContext = useContext(AlertContext);
    const {alert, showAlert} = alertContext;

    const authContext = useContext(AuthContext);
    const { msg, authenticated, registerUser } = authContext;

    //En caso de error de autenticación
    useEffect(() => {
        if(authenticated) {
            props.history.push('/savings-info');
        }

        if(msg) {
            showAlert(msg.msg, msg.cat);
        }
        //eslint-disable-next-line
    }, [msg, authenticated, props.history])


    const [user, updateUser] = useState({
        name:'',
        email:'',
        password:'', 
        confirm:''
    });

    //Extract user
    const { email, password, name, confirm} = user;

    const onChange = e => {
        updateUser({
            ...user, 
            [e.target.name] : e.target.value
        })
    }

    const onSubmit = e => {
        e.preventDefault();

        //Campos vacíos
        if(name.trim() === '' || email.trim() === '' || password.trim() === '' || confirm.trim() === '' ) {
            showAlert('Todos los campos son obligatorios', 'alerta-error');
            return;
        }
        // Pass de 6 caracteres
        if(password.length<6 ) {
            showAlert('El password debe ser mínimo de 6 caracteres', 'alerta-error');
            return;
        }

        //Si 2 passwords son iguales 
        if(password !== confirm) {
            showAlert('Los passwords no son iguales', 'alerta-error');
            return;
        }

        // Pasarlo al action
        registerUser({ email, password, name });
    }

    return(
        <div>
            <Navbar />
            <div className='container mx-auto bg-white px-6 pt-20'> 
                <h1 className='text-4xl text-center py-10 text-black'><strong>¡Bienvenido!</strong></h1>
                <p className=' text-center text-gray-700'> Ingresa tus datos de contacto </p>
                <div className='bg-white rounded-t-lg overflow-hidden p-4 flex justify-center '>
                    <form className="w-full max-w-sm" onSubmit={onSubmit}>  
                        <div className="xl:flex md:items-center my-6 xl:flex xl:items-center">
                            <div className="md:w-3/3">
                                <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-6 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-500" type='text' id='name' name='name'  placeholder='Ingresa tu nombre' value={name} onChange={onChange}/>
                            </div>
                        </div>        
                        <div className="xl:flex md:items-center my-6 xl:flex xl:items-center">
                            <div className="md:w-3/3">
                                <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-6 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-500" type='email' id='email' name='email'  placeholder='Ingresa tu correo' value={email} onChange={onChange}/>
                            </div>
                        </div>
                        <div className="xl:flex md:items-center my-6">
                            <div className="md:w-3/3">
                                <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-6 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-500" type="password" id="password" name='password' placeholder='Ingresa tu password' value={password} onChange={onChange}/>
                            </div>
                        </div>
                        <div className="xl:flex md:items-center my-6">
                            <div className="md:w-3/3">
                                <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-6 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-500" type="password" id="confirm" name='confirm' placeholder='Repite tu password' value={confirm} onChange={onChange}/>
                            </div>
                        </div>
                        <div className="xl:flex md:items-center py-8 ">
                            <div className="xl:w-1/3 text-center">
                                <button className="shadow bg-black text-white font-bold py-4 px-12 rounded-full text-lg transition duration-500 ease-in-out hover:bg-teal-500 hover:text-white transform hover:-translate-y-1 hover:scale-110"  type='submit'>Enviar</button>
                            </div>
                            <div className="xl:w-1/3"/>
                        </div>
                        { alert ? (<div className={`alert ${alert.cat} text-red-500`}>{alert.msg}</div> ) : null }
                        <p className='py-6'> Ya tienes una cuenta? 
                            <Link to={'/login'} className='text-teal-500 font-bold'> Inicia sesión</Link>
                        </p>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default SignUp;


