import React, { useState } from 'react';
import {
  Modal,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
  ScrollView,
} from 'react-native';
import DatePicker from 'react-native-date-picker';

const Formulario = ({ modalVisible }) => {
  const [paciente, setPaciente] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [fecha, setFecha] = useState(new Date());
  const [sintomas, setSintomas] = useState('');

  return (
    <Modal
      animationType="slide"
      // visible={false}
      visible={modalVisible}
    >
      <SafeAreaView style={styles.contenido}>
        <ScrollView>
          <Text style={styles.titulo}>
            Nueva {''}
            <Text style={styles.tituloBold}>Cita</Text>
          </Text>

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
    height: 100
  },

  fechaContenedor: {
    backgroundColor: '#FFF',
    borderRadius: 10,
  },
});

export default Formulario;
