import React from "react";

const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {

  const {nombre, propetario, email, fecha, sintomas} = paciente

  const handleEliminar = ()=>{
    const respuesta = confirm("Deseas eliminar este paciente")

    if(respuesta){
      eliminarPaciente(id)
    }
  }

  return (
    <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Nombre: {""}
        <span className="font-normal normal-case">{nombre}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Propetario: {""}
        <span className="font-normal normal-case">{propetario}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Email: {""}
        <span className="font-normal normal-case">{email}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Fecha ALta: {""}
        <span className="font-normal normal-case">{fecha}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Sintomas: {""}
        <span className="font-normal normal-case">{sintomas}</span>
      </p>

      <div className="flex justify-between mt-10">
        <button 
        type="button"
        className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-md"
        onClick={() => setPaciente(paciente)} //hacerla arrow function por que si no se llama automaticamente
        >Editar
        </button>

        <button 
        type="button"
        className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold rounded-md"
        onClick={handleEliminar} //No poner parentesis por que se manda a llamar sola
        >Eliminar
        </button>
      </div>
    </div>
  );
};

export default Paciente;
