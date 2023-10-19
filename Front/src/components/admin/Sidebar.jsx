import React from "react";
function Sidebar() {
    return (
            <div className="bg-gray-800 text-white w-1/5 h-screen p-1">
                <div className="bg-gray-800 text-white w-1/9 h-screen p-1">
                    <ul className="mt-4">
                    <h1 className="italic text-white text-2xl font-semibold">DASHBOARD</h1>
                        <a className="hover:text-blue-400" href="/">Usuarios</a>
                        <br/>
                        <a className="hover:text-blue-400" href="/Register">Add User</a>
                        <br/>
                        <a className="hover:text-blue-400" href="/Login">Cerrar sesion</a>
                    </ul>
                </div>
            </div>
    );
}
export default Sidebar;