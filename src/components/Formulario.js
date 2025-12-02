import React from 'react';
import { Modal, Text, Button, SafeAreaView } from 'react-native';

const Formulario = ({ modalVisible, setModalVisible, nuevaCitaHandler }) => {
  return (
    <Modal
      animationType="slide"
      // visible={false}
      visible={modalVisible}
    >
      <SafeAreaView>
        <Text>Desde el modal</Text>

        <Button
          title="Presiona aquí"
          onPress={nuevaCitaHandler}
        ></Button>
      </SafeAreaView>
    </Modal>
  );
};

export default Formulario;
