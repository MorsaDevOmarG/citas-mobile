import React from 'react';
import { Text, SafeAreaView, View, StyleSheet, Button} from 'react-native';

const App = () => {

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>
        Administrador de Citas {''}
          <Text style={styles.tituloBold}>Veterinaria</Text>
      </Text>

      <Button
        title='Nueva Cita'
        onPress={() => { console.log('Presionaste BTN')}}
      >

      </Button>
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
