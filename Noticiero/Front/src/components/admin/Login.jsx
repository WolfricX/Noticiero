import React, { useState, useEffect } from 'react'
import { googleLogout, useGoogleLogin } from '@react-oauth/google'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'


export default function Login() {
    const navigate = useNavigate()

    const [showData, setShowData] = useState()

    const [user, setUser] = useState([])
    const [profile, setProfile] = useState([])

    const login = useGoogleLogin({
        onSuccess: (codeResponse) => setUser(codeResponse),
        onError: (error) => console.log('Login Failed:', error)
    })
    useEffect(() => {
        const profileData = localStorage.getItem('profile')
        if (profileData) {
            setProfile(JSON.parse(null))
        }
    }, [])

    useEffect(() => {
        if (user) {
            axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
                headers: {
                    Authorization: `Bearer ${user.access_token}`,
                    Accept: 'application/json'
                }
            })
                .then((res) => {
                    setProfile(res.data)
                    localStorage.setItem('profile', JSON.stringify(res.data))
                })
                .catch(((err) => console.log(err)))
        }
    }, [user])

    const logOut = () => {
        googleLogout()
        setProfile(null)
    }

    return (
        <>
            <div className="w-[100vh] h-[100vh] justify-center items-center flex fixed p-10 fondo">

                <div className='bg-[#d6d6d6] bg-opacity-70 p-4 w-full flex flex-col items-center rounded '>
                    <div className="flex flex-row justify-center gap-4 w-full">
                        <div className="flex flex-col items-center gap-2 m-2 p-2 w-full text-black">
                            <label className="text-[#054a5b] font-black text-3xl">Inicio de sesión</label>
                            <div className="flex flex-col gap-2">
                                <label className="font-semibold">Usuario:</label>
                                <input type="text" className="w-52 bg-[#e3e3e3] rounded-md px-2 border-black border-2 border-opacity-50" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className=" font-semibold">Contraseña:</label>
                                <input type="text" className="w-52 bg-[#e3e3e3] rounded-md px-2 border-black border-2 border-opacity-50" />
                            </div>
                            <div className="flex justify-center p-4">
                                <button className="w-fit bg-[#155e6e] text-white font-semibold h-fit hover:bg-[#15373f] rounded-xl px-2 py-2">Iniciar Sesión</button>
                            </div>
                            <div className="bg-black bg-opacity-60 rounded-md text-xs p-1 flex flex-row gap-2 w-fit">
                                <label className="text-white font-base">¿Aún no tienes cuenta?</label>
                                <Link to="/"><label className="text-yellow-400 cursor-pointer font-semibold underline">Registrate aquí</label></Link>
                            </div>
                        </div>
                        <div className='flex flex-col items-center gap-4 m-2 border-l border-black border-opacity-40  w-full pl-6'>
                            <label className="text-[#054a5b] font-extrabold text-xl">Más formas de inicio:</label>

                            <div className='bg-[#f7f7f7] rounded-lg bg-opacity-30'>
                                {profile ? (
                                    <div className='flex flex-col justify-center items-center'>
                                        <img src={profile.picture} alt="user image" className='w-28 rounded-full m-1' />
                                        <div className='flex flex-col justify-center items-center m-2'>
                                            <div className='flex flex-row gap-2'>
                                                <label className='text-base font-bold text-[#024959]'>Usuario:</label>
                                                <label className='text-base font-semibold text-black'>{profile.name}</label>
                                            </div>
                                            <div className='flex flex-row gap-2 justify-center items-center'>
                                                <label className='text-base font-bold text-[#024959]'>Correo:</label>
                                                <label className='text-base font-semibold text-black'>{profile.email}</label>
                                            </div>
                                        </div>
                                        <label onClick={() => navigate(`/dashboard-admin/${profile}`)} className='w-fit text-cyan-800 font-bold h-fit hover:text-yellow-600 rounded-xl cursor-pointer'>Ingresar</label>
                                        <label onClick={logOut} className='w-fit text-red-800 font-bold h-fit hover:text-yellow-600 rounded-xl cursor-pointer'>Cerrar sesión</label>
                                    </div>
                                ) : (
                                    <button onClick={() => login()} className='text-white bg-red-700 w-fit h-fit text-sm'>Sign in with Google 🚀 </button>
                                )}
                            </div>
                            <div >
                                <label className="text-black">API facebook</label>
                            </div>
                            <div >
                                <label className="text-black">API github</label>
                            </div>
                            <Link to="/" className="p-2">
                                <span className="text-[#024959] underline hover:text-[#ffbf00] font-bold p-2 rounded-lg">Regresar</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div>
            </div>
        </>
    )
}