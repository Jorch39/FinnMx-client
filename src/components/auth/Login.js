import React, {useState, useContext, useEffect } from 'react';
import { Link} from 'react-router-dom';
import AlertContext from '../../context/alerts/alertContext';
import AuthContext from '../../context/auth/authContext';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';


const Login = props => {

    //Extraer los valores 
    const alertContext = useContext(AlertContext);
    const {alert, showAlert} = alertContext;

    const authContext = useContext(AuthContext);
    const { msg, authenticated, login } = authContext;

    //En caso de que el password o usuario no exista
    useEffect(() => {
        if(authenticated) {
            props.history.push('/savings-info');
        }
        if(msg) {
            showAlert(msg.msg, msg.cat);
        }
        //eslint-disable-next-line
    }, [msg, authenticated, props.history])

    //State para iniciar sesión
    const [user, updateUser] = useState({
        email:'',
        password:''
    });

    //Extract user
    const { email, password } = user;

    const onChange = e => {
        updateUser({
            ...user, 
            [e.target.name] : e.target.value
        })
    }

    const onSubmit = e => {
        e.preventDefault();

        //Validar que no haya campos vacíos
        if(email.trim() === '' || password.trim() === '') {
            showAlert('Todos los campos son obligatorios', 'alerta-error');
            return;
        }
        //Pasarlo al action 
        login({ email, password });
    }

    return(
        <div>
            <Navbar />
            <div className='container mx-auto bg-white px-6 pt-20'> 
                <h1 className='text-4xl text-center py-10 text-black'><strong>¡Nos da gusto que regreses!</strong></h1>
                <p className='py-4 px-4 text-center text-gray-700'> Ingresa tu correo y contraseña para poder analizar tu información financiera</p>
                <div className='bg-white rounded-t-lg overflow-hidden p-4 flex justify-center '>
                    <form className="w-full max-w-xl lg:items-center text-center" onSubmit={onSubmit}>  
                        <div className="xl:flex lg:items-center my-6 ">
                            {/* <div className="md:w-1/3">
                                <label className="block text-black font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="email"></label>
                            </div> */}
                            <div className="">
                                <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-6 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-500" id='email' name='email' type='email' placeholder='Ingresa tu correo' value={email} onChange={onChange}/>
                            </div>
                        </div>
                        <div className="xl:flex lg:items-center my-6">
                            {/* <div className="md:w-1/3">
                                <label className="block text-black font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="password"></label>
                            </div> */}
                            <div className="xl:w-3/3">
                                <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-6 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-500" id="password" name='password' type="password" placeholder='Ingresa tu password' value={password} onChange={onChange}/>
                            </div>
                        </div>
                        <div className="xl:flex md:items-center py-8 ">
                            <div className="xl:w-1/3 text-center">
                                <button className="shadow bg-black text-white font-bold py-4 px-12 rounded-full text-lg transition duration-500 ease-in-out hover:bg-teal-500 hover:text-white transform hover:-translate-y-1 hover:scale-110"  type='submit'>Iniciar Sesión</button>
                            </div>
                            <div className="xl:w-1/3"/>
                        </div>
                        { alert ? (<div className={`alert ${alert.cat} text-red-500`}>{alert.msg}</div> ) : null }
                        <p className='py-6'>No tienes una cuenta? <Link to={'/sign-up'} className='text-teal-500 font-bold'> Regístrate</Link></p>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Login;

