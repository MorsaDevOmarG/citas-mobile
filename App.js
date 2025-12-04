import React, { useState } from 'react';

import {
  Text,
  SafeAreaView,
  View,
  StyleSheet,
  Button,
  Pressable,
  Modal,
  FlatList,
  Alert
} from 'react-native';

import Formulario from './src/components/Formulario';

import Paciente from './src/components/Paciente';

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});

  const pacienteEditar = (id) => {
    // console.log('Editando...', id);

    const pacienteEditar = pacientes.filter(paciente => paciente.id === id);

    // console.log(pacienteEditar);

    setPaciente(pacienteEditar[0]);
  };

  const pacienteEliminar = id => {
    // console.log('Eliminando...', id);

    Alert.alert(
      '¿Deseas eliminar este paciente?',
      'Un paciente eliminado no se puede recuperar',
      [
        {
          text: 'Cancelar',
          style: 'cancel'
        },
        {
          text: 'Si, Eliminar',
          style: 'destructive',
          onPress: () => {
            // console.log('Eliminando...');

            const pacientesActualizados = pacientes.filter(
              pacientesState => pacientesState.id !== id
            );

            // console.log(pacientesActualizados);

            setPacientes(pacientesActualizados);
          }
        }
      ]
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>
        Administrador de Citas {''}
        <Text style={styles.tituloBold}>Veterinaria</Text>
      </Text>

      {/* <Button
        title='Nueva Cita'
        onPress={() => { console.log('Presionaste BTN')}}
      >
      </Button> */}

      <Pressable
        // onPress={() => { console.log('Presionaste BTN') }}
        // onPressIn={() => { console.log('Presionaste BTN In') }}
        // onPressOut={() => { console.log('Presionaste BTN Out') }}
        // onLongPress={() => { console.log('Presionaste BTN Long Press') }}
        style={styles.btnNuevaCita}
        // onPress={nuevaCitaHandler}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.btnTextoNuevaCita}>Nueva Cita</Text>
      </Pressable>

      {/* <Modal
        animationType='slide'
        // visible={false}
        visible={modalVisible}
      >
        <Text>Desde el modal</Text>
      </Modal> */}

      <Formulario
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        pacientes={pacientes}
        setPacientes={setPacientes}
        paciente={paciente}
        setPaciente={setPaciente}
      />

      {
        pacientes.length == 0
          ? <Text style={styles.noPacientes}>No hay pacientes</Text>
        // : <Text>Hay pacientes</Text>
          : <FlatList
            style={styles.listado}
              data={pacientes}
              keyExtractor={(item) => item.id} // Usar id como key
              renderItem={ ({ item }) => {
                return (
                  <Paciente
                    item={item}
                    setModalVisible={setModalVisible}
                    pacienteEditar={pacienteEditar}
                    pacienteEliminar={pacienteEliminar}
                  />
                );
              } }
            />
      }
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F3F4F6',
    flex: 1, // Ocupa toda la pantalla
  },

  titulo: {
    textAlign: 'center',
    fontSize: 30,
    color: '#374151',
    fontWeight: '600',
  },

  tituloBold: {
    fontWeight: '900',
    color: '#6D28D9',
  },

  btnNuevaCita: {
    backgroundColor: '#6D28D9',
    padding: 15,
    marginTop: 30,
    marginHorizontal: 20,
    borderRadius: 10,
  },

  btnTextoNuevaCita: {
    color: '#FFF',
    fontWeight: '900',
    textAlign: 'center',
    fontSize: 18,
    textTransform: 'uppercase',
  },

  noPacientes: {
    marginTop: 30,
    textAlign: 'center',
    fontSize: 24,
    color: '#374151',
    fontWeight: '600',
  },

  listado: {
    marginTop: 50,
    marginHorizontal: 30,
  },
});

export default App;
