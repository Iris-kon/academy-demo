import { Modal, View, Text, Pressable, StyleSheet, KeyboardAvoidingView } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import { useState } from 'react';

export default function ModalConfirmWorkout(props) {
  return (
    <Modal animationType="slide" transparent={true} visible={props.isVisible}>
      <View style={styles.modalContent}>
        <KeyboardAvoidingView behavior="padding">
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Confirmar participação</Text>
          <Pressable onPress={props.onClose}>
            <Feather name="x" color="#000" size={22} />
          </Pressable>
        </View>
        <View style={styles.contentContainer}>
          <Text>Você quer confirmar a sua participação no Treino Cardio, 24 de mar 14:30, na sala B ?</Text>     
        </View>
        <View style={styles.buttonContainer} >
          <Pressable style={styles.cancelButton} onPress={props.onClose}>
            <Text>Cancelar</Text>
          </Pressable>

          <Pressable style={styles.confirmButton}  onPress={props.onClose}>
            <Text style={{color: '#fff',}}>Confirmar</Text>
          </Pressable>
        </View>
        </KeyboardAvoidingView>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContent: {
    width: '100%',
    backgroundColor: '#fff',
    borderTopRightRadius: 18,
    borderTopLeftRadius: 18,
    position: 'absolute',
    padding: 20,
    bottom: 0,
  },
  titleContainer: {
    backgroundColor: '#fff',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 24,
  },
  contentContainer: {
    width: '90%',
    alignSelf: 'center',
    paddingVertical: 20
  },

  buttonContainer: {
    paddingHorizontal: 20,
    gap: 10,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "center"
  },
  confirmButton: {
    backgroundColor: '#4d416d',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    borderRadius: 50,
    color: '#fff',
    width: '50%'
  },
  cancelButton: {
    borderColor: '#4d416d',
    borderWidth: 1,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    borderRadius: 50,
    width: '50%'
  }
})