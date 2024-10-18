import React from "react";

const TEST_EVENT = "TEST_EVENT";

const PruebaEventosJRN = () => {
  const CreateEvent = () => {
    const event = new Event(TEST_EVENT);
    window.dispatchEvent(event);
  };

  const AddEventListener = () => {
    window.addEventListener(TEST_EVENT, () => {
      console.log(TEST_EVENT);
    });
  };

  return (
    <>
      <h1>Prueba de asignación de eventos</h1>
      <button onClick={CreateEvent}>Crear</button>
      <button onClick={AddEventListener}>Añadir</button>
    </>
  );
};

export default PruebaEventosJRN;
