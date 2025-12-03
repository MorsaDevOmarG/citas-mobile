import React from 'react';
import { Text } from 'react-native';

const Paciente = ({ item }) => {
  // console.log(item);

  const { paciente, propietario, email, telefono, fecha, sintomas } = item;

  return (
    <Text>{paciente}</Text>
  );
}

export default Paciente;
