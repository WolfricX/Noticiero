import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import FacebookLogin from 'react-facebook-login';
import { googleLogout, useGoogleLogin } from '@react-oauth/google';

export default function Login() {
    const navigate = useNavigate();
    const [error, setError] = useState(null);

    const clearPreviousAuth = () => {
        // Limpia cualquier dato de autenticación previo almacenado en localStorage
        localStorage.removeItem('profile');
        localStorage.removeItem('facebook_profile');
    };

    const responseFacebook = (response) => {
        clearPreviousAuth(); // Limpia la autenticación previa
        console.log(response);
        if (response.status !== 'unknown') {
            // Si el estado no es 'unknown', significa que el usuario inició sesión correctamente
            localStorage.setItem('facebook_profile', JSON.stringify(response));
            navigate('/Home'); // Redirige a la página de perfil
        } else {
            // Si el estado es 'unknown', el usuario canceló el inicio de sesión o hubo un problema
            setError('Error en el inicio de sesión de Facebook');
        }
    };

    // Google Login
    const googleLogin = useGoogleLogin({
        onSuccess: async (codeResponse) => {
            clearPreviousAuth(); // Limpia la autenticación previa
            try {
                const res = await axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${codeResponse.access_token}`, {
                    headers: {
                        Authorization: `Bearer ${codeResponse.access_token}`,
                        Accept: 'application/json',
                    },
                });
                localStorage.setItem('profile', JSON.stringify(res.data));
                navigate('/Home'); // Redirige a la página de perfil
            } catch (err) {
                console.log(err);
                setError('Error al obtener datos del perfil');
            }
        },
        onError: (error) => {
            console.log('Login Failed:', error);
            setError('Error en el inicio de sesión de Google');
        },
    });

    const loginGoogle = async () => {
        googleLogin();
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <div style={{ padding: '20px', borderRadius: '10px', backgroundColor: 'white', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', width: '300px' }}>
                <h2 style={{ textAlign: 'center' }}>Inicio de Sesión</h2>
                <input type="text" placeholder="Usuario" style={{ width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '5px', border: '1px solid #ccc' }} />
                <input type="password" placeholder="Contraseña" style={{ width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '5px', border: '1px solid #ccc' }} />
                <button style={{ width: '100%', padding: '10px', border: 'none', borderRadius: '5px', backgroundColor: '#4CAF50', color: 'white', cursor: 'pointer' }}>Iniciar Sesión</button>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <div style={{ textAlign: 'center', marginTop: '10px' }}>
    <Link to="/register" className="text-blue-500">Regístrate aquí</Link>
    <br />
    <Link to="/Home" className="text-blue-500">Regresar</Link> {/* Cambia el color a azul claro */}
</div>

                <button onClick={loginGoogle} style={{ width: '100%', padding: '10px', border: 'none', borderRadius: '5px', backgroundColor: '#db4437', color: 'white', cursor: 'pointer', marginTop: '10px' }}>
                    Iniciar sesión con Google
                </button>
                <FacebookLogin
                appId="7740383232655272"
                autoLoad={false}
                callback={responseFacebook}
                cssClass="bg-blue-500 text-white py-2 px-12 rounded cursor-pointer"
                icon="fa-facebook"
                size="metro" // Agrega esta línea para especificar el tamaño
                />
            </div>
        </div>
    );
}
