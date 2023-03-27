import { Modal, View, Text, Pressable, StyleSheet, KeyboardAvoidingView } from 'react-native';
import Feather from '@expo/vector-icons/Feather';

export default function ModalWorkoutInfo(props) {
  return (
    <Modal animationType="slide" transparent={true} visible={props.isVisible}>
      <View style={styles.modalContent}>
        <KeyboardAvoidingView behavior="padding">
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Revisão do treino</Text>
          <Pressable onPress={props.onClose}>
            <Feather name="x" color="#000" size={22} />
          </Pressable>
        </View>
        <View style={styles.contentContainer}>
          <Text>Treino: Treino Cardio</Text>
          <Text>Instrutpr: Fulano</Text>
          <Text>Data: 18 de mar, 15:30</Text>
          <Text>Local: Sala B</Text>

          <Text style={styles.title}>Seus Dados</Text>
          <Text>Km percorridos: 3</Text>
          <Text>Velociade: 7 km/h</Text>
          <Text>Calorias perdidas: 500</Text>

          <Text style={styles.title}>Seu FeedBack</Text>
          <Text>Dificuldade: Normal</Text>
          <Text>Descrição: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
        </View>
        <View style={styles.buttonContainer} onPress={props.onClose}>
          <Pressable style={styles.confirmButton}  onPress={props.onClose}>
            <Text style={{color: '#fff',}}>fechar</Text>
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
    height: '60%',
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
  contentContainer: {
    width: '90%',
    alignSelf: 'center',
    paddingBottom: 20,
    gap: 10
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