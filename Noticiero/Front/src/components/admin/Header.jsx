import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../Images/Logo.png';
import { googleLogout } from '@react-oauth/google';

function Header() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        let googleUserData = localStorage.getItem('profile');
        let facebookUserData = localStorage.getItem('facebook_profile');

        if (googleUserData) {
            setUser(JSON.parse(googleUserData));
        } else if (facebookUserData) {
            setUser(JSON.parse(facebookUserData));
        }
    }, []);

    const clearPreviousAuth = () => {
        // Limpia cualquier dato de autenticación previo almacenado en localStorage
        localStorage.removeItem('profile');
        localStorage.removeItem('facebook_profile');
    };

    const logOut = () => {
        console.log("Intentando cerrar sesión");
        console.log("Información del usuario:", user);

        if (window.FB) {
            console.log("El SDK de Facebook está cargado");
        } else {
            console.log("El SDK de Facebook NO está cargado");
        }

        if (user && user.source === 'google') {
            googleLogout();
            localStorage.removeItem('profile');
            console.log("Cerrando sesión de Google");
        } else if (user && user.source === 'facebook') {
            console.log("Intentando cerrar sesión en Facebook");
            clearPreviousAuth(); // Limpia la autenticación previa
            window.FB.logout((response) => {
                console.log('Sesión de Facebook cerrada', response);
            });
        } else {
            console.log("No se encontró fuente de autenticación válida");
        }
        setUser(null);
    }

    return (
        <div className="bg-white-800 p-4 flex justify-between items-center">
            <div className="flex-1"></div>
            <div className="flex items-center justify-center flex-grow">
                <img src={logo} alt="Logo de la página" className="max-w-xs" />
            </div>
            <div className="flex-1 flex justify-end">
                {user ? (
                    <div className="flex items-center">
                        {user.picture && (
                            <img src={user.picture} alt="Perfil del usuario" className="w-8 h-8 rounded-full mr-2" />
                        )}
                        <span className="mr-4">{user.name}</span>
                        <button onClick={logOut} className="bg-red-700 text-white py-2 px-4 rounded cursor-pointer">
                            Cerrar Sesión
                        </button>
                    </div>
                ) : (
                    <Link to="/Login">
                        <button className="bg-red-700 text-white py-2 px-4 rounded cursor-pointer">
                            Iniciar Sesión
                        </button>
                    </Link>
                )}
            </div>
        </div>
    );
}

export default Header;
