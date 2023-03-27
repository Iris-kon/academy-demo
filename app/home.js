import { Link, useRouter } from "expo-router";
import { Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";
import Feather from '@expo/vector-icons/Feather'
import { WorkoutInfo } from "../components/WorkoutInfo";
import { ChatPersonTab } from "../components/ChatPersonTab";
import { useState } from "react";
import ModalEvaluationWorkout from "../components/ModalEvaluationWorkout";

export default function Page() {
  const router = useRouter()
  const [isModalVisible, setIsModalVisible] = useState(false)


  const onEValuationClick = () => {
    setIsModalVisible(true);
  };

  const onModalClose = () => {
    setIsModalVisible(false);
  };

  return (
    <SafeAreaView  style={styles.container}>
        <View style={styles.welcomeContainer}>
            <View style={styles.welcomeTopContent}>
                <Text style={styles.title}>Bem vindo(a),{"\n"}Nome</Text>

                <Pressable onPress={() => router.push('/notifications')}>
                    <Feather name="bell" size={30} color="#fff" />
                </Pressable>
            </View>

             <View style={styles.welcomeContent}>
                <Pressable onPress={() => router.push('/profile')} style={styles.welcomeContentCard}>
                  <Feather name="user" size={20} color="#fff" />
                
                  <Text style={styles.welcomeContentText}>Perfil</Text>
                </Pressable>

                <Pressable style={styles.welcomeContentCard} onPress={() => router.push('/workouts')}>
                    <Feather name="activity" size={20} color="#fff" />
                    
                    <Text style={styles.welcomeContentText}>Treinos</Text>
                </Pressable>

                <Pressable style={styles.welcomeContentCard} onPress={() => router.push('/chat')}>
                    <Feather name="message-square" size={20} color="#fff" />
                 
                    <Text style={styles.welcomeContentText}>Chat</Text>
                </Pressable>

                <Pressable style={styles.welcomeContentCard} onPress={() => router.push('/plans')}>
                    <Feather name="book" size={20} color="#fff" />
                    
                    <Text style={styles.welcomeContentText}>Assinaturas</Text>
                </Pressable>
            </View>
        </View>
        
        <View style={styles.closestActivity}>
            <Text style={styles.closestTitle}>Próximo Treino</Text>

            <WorkoutInfo 
              date="23 de mar 13:30"
              place="Sala B "
              instructor="Fulano"
              type="Treino Cardio"
            />
        </View>

        <View style={styles.closestActivity}>
            <Text style={styles.closestTitle}>Avalie seu último treino</Text>

            <WorkoutInfo 
              onPress={onEValuationClick}
              date="22 de mar 15:30"
              place="Sala B"
              instructor="Fulano"
              type="Treino Cardio"
            />
        </View>

        <View style={styles.closestActivity}>
            <Text style={styles.closestTitle}>Chats</Text>

            <ChatPersonTab 
              name="Fulano A"
              message="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur"
            />

            <ChatPersonTab 
              name="Fulano B"
              message="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            />

           <ChatPersonTab 
              name="Fulano C"
              message="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
            />
        </View>

        <ModalEvaluationWorkout isVisible={isModalVisible} onClose={onModalClose} />

        <View style={styles.buttonContainer}>
          <Link href="/" style={styles.linkButton}>Sair</Link>
        </View>
  
    </SafeAreaView >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    gap: 20,
    backgroundColor: '#f1f2f2',
  },
  welcomeContainer: {
    backgroundColor: '#4d416d',
    width: '100%',
    padding: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  welcomeTopContent: {
    paddingTop: 10,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },  
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: '#fff',
  },
   welcomeContent: {
    width: '100%',
    paddingTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },  
  welcomeContentCard: {
    padding: 10,
    width: 89,
    alignItems: 'center',
    gap: 5,
    borderRadius: 1,
    backgroundColor: 'rgba(136,160,195, 0.2)',
  },
  welcomeContentText: {
    color: '#fff'
  },
  closestActivity: {
    alignSelf: 'center',
    backgroundColor: '#fff',
    width: '90%',
    padding: 20,
    borderRadius: 20,
    gap: 10
  },
    closestTitle: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  buttonContainer: {
    paddingHorizontal: 20,
    width: '100%',
    alignItems: 'center',
    justifyContent: "center"
  },
  linkButton: {
    backgroundColor: '#4d416d',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    borderRadius: 50,
    color: '#fff',
    width: '100%'
  }
});
