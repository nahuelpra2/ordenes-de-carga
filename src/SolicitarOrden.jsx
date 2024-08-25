import React, { useState } from 'react';

function SolicitarOrden() {
  // Estado para cada campo del formulario
  const [tipoCombustible, setTipoCombustible] = useState("");
  const [cantidad, setCantidad] = useState("");
  const [numeroOrden, setNumeroOrden] = useState("");
  const [chofer, setChofer] = useState("");
  const [matricula, setMatricula] = useState("");
  const [km, setKm] = useState("");

  // Manejo de envío del formulario
  const handleSubmit = (event) => {
    event.preventDefault();
    const datosOrden = {
      tipoCombustible,
      cantidad,
      numeroOrden,
      chofer,
      matricula,
      km
    };
    console.log("Orden solicitada:", datosOrden);
    // Aquí puedes enviar los datos a un servidor o manejarlos según sea necesario
  };

  return (
    <div>
      <h2>Solicitar Orden de Carga</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Tipo de Combustible:
            <select value={tipoCombustible} onChange={(e) => setTipoCombustible(e.target.value)}>
              <option value="">Seleccione</option>
              <option value="Diesel">Diesel</option>
              <option value="Gasolina">Gasolina</option>
              <option value="GNC">GNC</option>
            </select>
          </label>
        </div>
        <div>
          <label>
            Cantidad (litros):
            <input 
              type="number" 
              value={cantidad} 
              onChange={(e) => setCantidad(e.target.value)} 
            />
          </label>
        </div>
        <div>
          <label>
            Número de Orden:
            <input 
              type="text" 
              value={numeroOrden} 
              onChange={(e) => setNumeroOrden(e.target.value)} 
            />
          </label>
        </div>
        <div>
          <label>
            Chofer:
            <input 
              type="text" 
              value={chofer} 
              onChange={(e) => setChofer(e.target.value)} 
            />
          </label>
        </div>
        <div>
          <label>
            Matrícula del Vehículo:
            <input 
              type="text" 
              value={matricula} 
              onChange={(e) => setMatricula(e.target.value)} 
            />
          </label>
        </div>
        <div>
          <label>
            Kilometraje:
            <input 
              type="number" 
              value={km} 
              onChange={(e) => setKm(e.target.value)} 
            />
          </label>
        </div>
        <button type="submit">Solicitar Orden</button>
      </form>
    </div>
  );
}

export default SolicitarOrden;
