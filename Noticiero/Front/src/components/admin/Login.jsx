import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
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
            navigate('/'); // Redirige a la página de perfil
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
                navigate('/'); // Redirige a la página de perfil
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
        <div className="flex justify-center items-center h-screen">
            <div className="p-4 rounded shadow-md w-80 bg-white">
                <h2 className="text-center text-2xl font-semibold mb-4">Inicio de Sesión</h2>
                <input
                    type="text"
                    placeholder="Usuario"
                    className="w-full px-3 py-2 mb-2 border rounded"
                />
                <input
                    type="password"
                    placeholder="Contraseña"
                    className="w-full px-3 py-2 mb-2 border rounded"
                />
                <button
                    className="w-full py-2 bg-green-500 text-white rounded hover:bg-green-600 cursor-pointer"
                >
                    Iniciar Sesión
                </button>
                {error && <p className="text-red-500">{error}</p>}
                <div className="text-center mt-2">
                    <Link to="/register" className="text-blue-500">
                        Regístrate aquí
                    </Link>
                    <br />
                    <Link to="/" className="text-blue-500">
                        Regresar
                    </Link>
                </div>
                <button
                    onClick={loginGoogle}
                    className="w-full py-2 mt-2 bg-red-500 text-white rounded hover:bg-red-600 cursor-pointer"
                >
                    Iniciar sesión con Google
                </button>
            </div>
        </div>
    );
}
