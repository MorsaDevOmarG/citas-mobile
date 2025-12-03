import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Paciente = ({ item }) => {
  // console.log(item);

  const { paciente, propietario, email, telefono, fecha, sintomas } = item;

  const formatearFecha = (fecha) => {
    const nuevaFecha = new Date(fecha);
    const opciones = { weekday: 'long', year: 'numeric', month: 'long', day: '2-digit' };

    return nuevaFecha.toLocaleDateString('es-ES', opciones);
  };

  return (
    <View>
      <Text>{paciente}</Text>
      <Text>{formatearFecha(fecha)}</Text>
    </View>
  );
}

export default Paciente;
