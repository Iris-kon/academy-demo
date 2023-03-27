import { Modal, View, Text, Pressable, StyleSheet, TextInput, KeyboardAvoidingView } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
 import RNPickerSelect from "react-native-picker-select";
import { useState } from 'react';

export default function ModalEvaluationWorkout(props) {
  const [desc, setDesc] = useState('')
  return (
    <Modal animationType="slide" transparent={true} visible={props.isVisible}>
      <View style={styles.modalContent}>
        <KeyboardAvoidingView behavior="padding">
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Avalie seu treino</Text>
          <Pressable onPress={props.onClose}>
            <Feather name="x" color="#000" size={22} />
          </Pressable>
        </View>
        <View style={styles.inputsContainer}>

            <Text style={styles.inputLabel}>Quão pessado foi o treino?</Text>
            <RNPickerSelect
                style={styles.input}
                placeholder={{ label: "Selecione uma opção", value: null }}
                onValueChange={(value) => console.log(value)}
                items={[
                     { label: "Muito Fácil", value: "mf" },
                     { label: "Fácil", value: "f" },
                     { label: "Normal", value: "n" },
                     { label: "Difícil", value: "d" },
                     { label: "Muito Difícil", value: "md" },
                ]}
             />

            <Text style={styles.inputLabel}>Por que?</Text>
            <TextInput
                placeholder="Descreva o que achou do treino"
                multiline={true}
                style={styles.input}
            />
        </View>
        <View style={styles.buttonContainer} >
          <Pressable style={styles.cancelButton} onPress={props.onClose}>
            <Text>Cancelar</Text>
          </Pressable>

          <Pressable style={styles.confirmButton}  onPress={props.onClose}>
            <Text style={{color: '#fff',}}>Salvar</Text>
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
    height: '16%',
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
  pickerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 50,
    paddingVertical: 20,
  },
  inputsContainer: {
    width: '90%',
    alignSelf: 'center'
  },
  inputLabel: {
    textAlign: 'left',
    paddingHorizontal: 10,
    paddingBottom: 3
  },
   input: {
    width: '100%',
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
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