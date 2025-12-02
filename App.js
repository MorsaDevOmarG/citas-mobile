import React from 'react';
import { Text, SafeAreaView, View, StyleSheet, Button, Pressable} from 'react-native';

const App = () => {
  const nuevaCitaHandler = () => {
    console.log('Presionaste BTN');
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
        onPress={nuevaCitaHandler}
      >
        <Text>Nueva Cita</Text>
      </Pressable>
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
  }
});

export default App;
