"use client"
import React, { useState } from 'react';
import MemberSummary from './MemberSummary'; // Ajusta la importación según la ubicación correcta de tu componente
import CreateMemberPage from '@/app/admin/new/page';


export default function ViewMemberButton() {
  const [showForm, setShowForm] = useState(false);

  const handleToggleForm = () => {
    console.log("hadle")
    setShowForm(!showForm); // Alternar entre true y false al hacer clic en el botón
  };
  console.log("boton")

  return (
    <div>
      <button className="bg-blue-500 text-white p-2 rounded" type="button" onClick={handleToggleForm}>
        Ver Formulario
      </button>
      {showForm ? <CreateMemberPage/> : <MemberSummary/>}
    </div>
  );
}