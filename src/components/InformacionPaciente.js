import React from 'react';
import { Modal, SafeAreaView, Text } from 'react-native';

const InformacionPaciente = ({ paciente }) => {
  return (
    <SafeAreaView>
      <Text>Información Paciente</Text>

      <Text>{paciente.paciente}</Text>
    </SafeAreaView>
  );
};

export default InformacionPaciente;
