import React, { useEffect, useState } from 'react';
import {
  Modal,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
  ScrollView,
  Pressable,
  Alert,
} from 'react-native';
import DatePicker from 'react-native-date-picker';

// paciente: paciebteobj = Se renombra porque ya tenemos una variable llamada igual
const Formulario = ({
  modalVisible,
  // setModalVisible,
  pacientes,
  setPacientes,
  paciente: pacienteObj,
  setPaciente: setPacienteApp,
  cerrarModal,
  guardarCitasStorage,
}) => {
  const [id, setId] = useState('');
  const [paciente, setPaciente] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [fecha, setFecha] = useState(new Date());
  const [sintomas, setSintomas] = useState('');

  useEffect(() => {
    // console.log('Formulario listo...');

    if (Object.keys(pacienteObj).length > 0) {
      console.log('Hay algo...');

      setId(pacienteObj.id);
      setPaciente(pacienteObj.paciente);
      setPropietario(pacienteObj.propietario);
      setEmail(pacienteObj.email);
      setTelefono(pacienteObj.telefono);
      setFecha(pacienteObj.fecha);
      setSintomas(pacienteObj.sintomas);
    }
  }, [pacienteObj]);

  const handleCita = () => {
    // console.log('Agregando nueva cita...');

    if ([paciente, propietario, email, telefono, sintomas].includes('')) {
      // console.log('Todos los campos son obligatorios');

      Alert.alert(
        'Error',
        'Todos los campos son obligatorios',
        // [{ text: 'Recordarme después', style: 'cancel' }, {text: 'Cancelar', style: 'destructive'}, { text: 'Ok', style: 'default' }]
        [{ text: 'OK' }],
      );

      return;
    }

    // Revisar si es un registro nuevo o edición
    const nuevoPaciente = {
      // id: Date.now(),
      paciente,
      propietario,
      email,
      telefono,
      fecha,
      sintomas,
    };
    // console.log(nuevoPaciente);

    if (id) {
      // Editando
      nuevoPaciente.id = id;

      const pacientesActualizados = pacientes.map(pacienteState =>
        pacienteState.id === nuevoPaciente.id ? nuevoPaciente : pacienteState,
      );

      setPacientes(pacientesActualizados);

      setPacienteApp({});
    } else {
      // Nuevo Registro
      nuevoPaciente.id = Date.now();

      setPacientes([...pacientes, nuevoPaciente]); // Realiza una copia del arreglo y agrega uno nuevo
    }

    guardarCitasStorage(JSON.stringify([...pacientes, nuevoPaciente]));

    // setPacientes(nuevoPaciente);

    // setModalVisible(false);

    cerrarModal();

    setId('');
    setPaciente('');
    setPropietario('');
    setEmail('');
    setTelefono('');
    setFecha(new Date());
    setSintomas('');
  };

  return (
    <Modal
      animationType="slide"
      // visible={false}
      visible={modalVisible}
    >
      <SafeAreaView style={styles.contenido}>
        <ScrollView>
          <Text style={styles.titulo}>
            {/* Nueva {''} */}
            {pacienteObj.id ? 'Editar' : 'Nueva'} {''}
            <Text style={styles.tituloBold}>Cita</Text>
          </Text>

          <Pressable
            style={styles.btnCancelar}
            onLongPress={() => {
              // setModalVisible(false);
              cerrarModal();
              setPacienteApp({});
              setId('');
              setPaciente('');
              setPropietario('');
              setEmail('');
              setTelefono('');
              setFecha(new Date());
              setSintomas('');
            }}
          >
            <Text style={styles.btnTextoCancelar}>X Cancelar</Text>
          </Pressable>

          <View style={styles.campo}>
            <Text style={styles.label}>Nombre Paciente</Text>
            <TextInput
              style={styles.input}
              // keyboardType='phone-pad'
              placeholder="Nombre Paciente"
              placeholderTextColor={'#666'}
              value={paciente}
              onChangeText={setPaciente}
            />
          </View>

          <View style={styles.campo}>
            <Text style={styles.label}>Nombre Propietario</Text>
            <TextInput
              style={styles.input}
              placeholder="Nombre Propietario"
              placeholderTextColor={'#666'}
              value={propietario}
              onChangeText={setPropietario}
            />
          </View>

          <View style={styles.campo}>
            <Text style={styles.label}>Email Propietario</Text>
            <TextInput
              style={styles.input}
              keyboardType="email-address"
              placeholder="Email Propietario"
              placeholderTextColor={'#666'}
              value={email}
              onChangeText={setEmail}
            />
          </View>

          <View style={styles.campo}>
            <Text style={styles.label}>Teléfono Propietario</Text>
            <TextInput
              style={styles.input}
              keyboardType="number-pad"
              placeholder="Teléfono Propietario"
              placeholderTextColor={'#666'}
              value={telefono}
              onChangeText={setTelefono}
              maxLength={10} // Limitar a 10 caracteres
            />
          </View>

          <View style={styles.campo}>
            <Text style={styles.label}>FEcha Alta</Text>

            <View style={styles.fechaContenedor}>
              <DatePicker
                date={fecha}
                locale="es"
                // mode='date'
                onDateChange={date => setFecha(date)}
              />
            </View>
          </View>

          <View style={styles.campo}>
            <Text style={styles.label}>Síntomas</Text>
            <TextInput
              style={[styles.input, styles.sintomas]}
              placeholder="Síntomas"
              placeholderTextColor={'#666'}
              value={sintomas}
              onChangeText={setSintomas}
              multiline={true} // Permitir múltiples líneas
              numberOfLines={4} // Altura inicial para Android
            />
          </View>

          <Pressable style={styles.btnNuevaCita} onPress={handleCita}>
            {/* <Text style={styles.btnTextoNuevaCita}>Agregar Paciente</Text> */}
            <Text style={styles.btnTextoNuevaCita}>
              {pacienteObj.id ? 'Editar' : 'Agregar'} Paciente
            </Text>
          </Pressable>
        </ScrollView>
      </SafeAreaView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  contenido: {
    backgroundColor: '#6D28D9',
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

  btnCancelar: {
    marginTop: 20,
    backgroundColor: '#5827A4',
    marginHorizontal: 30, // margen a los lados
    marginVertical: 30, // margen arriba y abajo
    padding: 15,
    borderRadius: 10,
  },

  btnTextoCancelar: {
    color: '#FFF',
    fontWeight: '900',
    textAlign: 'center',
    fontSize: 16,
    textTransform: 'uppercase',
  },

  campo: {
    marginTop: 10,
    marginHorizontal: 30,
  },

  label: {
    color: '#FFF',
    fontWeight: '600',
    marginBottom: 10,
    marginTop: 15,
    fontSize: 20,
  },

  input: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
  },

  sintomas: {
    height: 100,
  },

  fechaContenedor: {
    backgroundColor: '#FFF',
    borderRadius: 10,
  },

  btnNuevaCita: {
    marginVertical: 50, // margen arriba y abajo
    backgroundColor: '#F59E0B',
    paddingVertical: 15, // padding arriba y abajo
    marginHorizontal: 30,
    borderRadius: 10,
  },

  btnTextoNuevaCita: {
    color: '#5827A4',
    textAlign: 'center',
    fontWeight: '900',
    fontSize: 16,
    textTransform: 'uppercase',
  },
});

export default Formulario;
