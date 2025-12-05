import React from 'react';
import { Modal, Pressable, SafeAreaView, Text, View, StyleSheet } from 'react-native';

const InformacionPaciente = ({ paciente, setModalPaciente }) => {
  return (
    <SafeAreaView style={styles.contenedor}>
      <Text style={styles.titulo}>
        Información {''}
        <Text style={styles.tituloBold}>Paciente</Text>
      </Text>

      <View>
        <Pressable
          style={styles.btnCerrar}
          onLongPress={() => setModalPaciente(false)}
        >
          <Text style={styles.btnTextoCerrar}>X Cerrar</Text>
        </Pressable>
      </View>

      <Text>{paciente.paciente}</Text>
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
});

export default InformacionPaciente;
