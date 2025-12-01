import React from 'react';
import { Text, SafeAreaView, View, StyleSheet} from 'react-native';

const App = () => {

  return (
    <SafeAreaView>
      <Text style={styles.titulo}>
        Administrador de Citas {''}
          <Text>Veterinaria</Text>
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  titulo: {
    textAlign: 'center',
    fontSize: 30,
    color: '#374151',
    fontWeight: 'bold',
  }
});

export default App;
