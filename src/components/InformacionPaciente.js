import React from 'react';
import { Modal, Pressable, SafeAreaView, Text, View, StyleSheet } from 'react-native';
import { formatearFecha } from '../helpers';

const InformacionPaciente = ({ paciente, setPaciente, setModalPaciente }) => {
  return (
    <SafeAreaView style={styles.contenedor}>
      <Text style={styles.titulo}>
        Información {''}
        <Text style={styles.tituloBold}>Paciente</Text>
      </Text>

      <View>
        <Pressable
          style={styles.btnCerrar}
          onLongPress={() => {
            setModalPaciente(false);
            setPaciente({});
          }}
        >
          <Text style={styles.btnTextoCerrar}>X Cerrar</Text>
        </Pressable>
      </View>

      <View style={styles.contenido}>
        <View style={styles.campo}>
          <Text style={styles.label}>Nombre:</Text>
          <Text style={styles.valor}>{paciente.paciente}</Text>
        </View>

        <View style={styles.campo}>
          <Text style={styles.label}>Propietario:</Text>
          <Text style={styles.valor}>{paciente.propietario}</Text>
        </View>

        <View style={styles.campo}>
          <Text style={styles.label}>Teléfono:</Text>
          <Text style={styles.valor}>{paciente.telefono}</Text>
        </View>

        <View style={styles.campo}>
          <Text style={styles.label}>Email:</Text>
          <Text style={styles.valor}>{paciente.email}</Text>
        </View>

        <View style={styles.campo}>
          <Text style={styles.label}>Fecha Alta:</Text>
          <Text style={styles.valor}>{formatearFecha(paciente.fecha)}</Text>
        </View>

        <View style={styles.campo}>
          <Text style={styles.label}>Síntomas:</Text>
          <Text style={styles.valor}>{paciente.sintomas}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: '#F59E0B',
    flex: 1,
  },

  titulo: {
    fontSize: 30,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 30,
    marginBottom: 20,
    color: '#FFF',
  },

  tituloBold: {
    fontWeight: '900',
  },

  btnCerrar: {
    marginTop: 20,
    backgroundColor: '#E06900',
    marginHorizontal: 30, // margen a los lados
    marginVertical: 30, // margen arriba y abajo
    padding: 15,
    borderRadius: 10,
  },

  btnTextoCerrar: {
    color: '#FFF',
    fontWeight: '900',
    textAlign: 'center',
    fontSize: 16,
    textTransform: 'uppercase',
  },

  contenido: {
    backgroundColor: '#FFF',
    marginHorizontal: 30,
    borderRadius: 10,
    padding: 20,
    // height: 300,
    // Sombras: https://ethercreative.github.io/react-native-shadow-generator/
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },

  campo: {
    marginBottom: 10
  },

  label: {
    textTransform: 'uppercase',
    color: '#374151',
    fontWeight: '600',
    fontSize: 12
  },

  valor: {
    fontWeight: '700',
    fontSize: 20,
    color: '#334155'
  }
});

export default InformacionPaciente;
