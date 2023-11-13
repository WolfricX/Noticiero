import React from "react";
import Header from '../components/admin/Header';
import Navbar from "../components/admin/Nabvar";

function Nosotros() {
  return (
    <div>
      <Header />
      <Navbar/>
      <br></br>
      <br></br>

      <br></br>

      <div className="flex items-center justify-center  ">
      <div className="max-w-2xl p-4 ">
        <h3 className="text-2xl text-center font-semibold mb-4">Somos Today Noticias:</h3>
        <div className="mb-4">
          <p className=" text-center mb-2">
            Today es una plataforma digital líder en el mundo de las noticias, comprometida con brindar a sus usuarios información precisa, oportuna y confiable sobre los eventos más relevantes a nivel local, nacional e internacional. Nuestra pasión por el periodismo de calidad nos impulsa a proporcionar una experiencia informativa en línea que se adapte a las necesidades y preferencias de una audiencia diversa y ávida de conocimiento.
          </p>
        </div>
        <div className="mb-4">
          <h2 className="text-xl text-center font-semibold mb-2">Misión</h2>
          <p className=" text-center mb-2">
            Nuestra misión es empoderar a las personas con información veraz y objetiva que les permita tomar decisiones informadas en su vida cotidiana y comprender mejor el mundo que les rodea. Buscamos ser un referente en el campo de las noticias en línea, destacando por nuestra integridad, imparcialidad y ética periodística.
          </p>
        </div>
        <div>
          <h2 className="text-xl text-center font-semibold mb-2">Visión</h2>
          <p className=" text-center mb-2">
            Aspiramos a ser la principal fuente de noticias en la web, reconocidos por nuestra innovación tecnológica, calidad editorial y capacidad para adaptarnos a las cambiantes necesidades de la audiencia digital. Queremos ser un catalizador del debate público y la reflexión crítica, promoviendo una sociedad informada y participativa.
          </p>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Nosotros;