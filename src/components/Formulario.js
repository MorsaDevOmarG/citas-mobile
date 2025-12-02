import React from 'react';
import { Modal, Text } from 'react-native';

const Formulario = ({
  modalVisible,
  setModalVisible
}) => {
  return (
    <Modal
      animationType="slide"
      // visible={false}
      visible={modalVisible}
    >
      <Text>Desde el modal</Text>
    </Modal>
  );
}

export default Formulario;
