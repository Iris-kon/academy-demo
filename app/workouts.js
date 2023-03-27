import { Link, useRouter } from "expo-router";
import { Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";
import Feather from '@expo/vector-icons/Feather'
import { WorkoutInfo } from "../components/WorkoutInfo";
import { useState } from "react";
import ModalEvaluationWorkout from "../components/ModalEvaluationWorkout";
import ModalConfirmWorkout from "../components/ModalConfirmWorkout";

export default function Page() {
  const router = useRouter()
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [isConfimationModalVisible, setIsConfimationModalVisible] = useState(false)


  const onConfimationClick = () => {
    setIsConfimationModalVisible(true);
  };

  const onConfimartionModalClose = () => {
    setIsConfimationModalVisible(false);
  };

  const onEValuationClick = () => {
    setIsModalVisible(true);
  };

  const onModalClose = () => {
    setIsModalVisible(false);
  };

  return (
    <SafeAreaView  style={styles.container}>
        <View style={styles.welcomeContainer}>
            <View style={styles.pageTopInfoContainer}>
                <Pressable style={{ width: '10%',}}  onPress={() => router.back() }>
                    <Feather name="arrow-left" size={30} color="#fff" />
                </Pressable>

                <View style={styles.pageTopInfoTitleContainer}>
                    <Text style={styles.pageTopInfoTitle}>Treinos</Text>
                </View>
            </View>

             <View style={styles.welcomeContent}>
                <Pressable onPress={() => router.push('/workouts')} style={styles.welcomeContentCard}>
                  <Feather name="activity" size={20} color="#fff" />
                
                  <Text style={styles.welcomeContentText}>Treinos</Text>
                </Pressable>

                <Pressable style={styles.welcomeContentCard} onPress={() => router.push('/myworkouts')}>
                    <Feather name="user" size={20} color="#fff" />
                    
                    <Text style={styles.welcomeContentText}>Meus Treinos</Text>
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
              date="22 de mar 14:30"
              place="Sala B"
              instructor="Fulano"
              type="Treino Cardio"
            />
        </View>

         <View style={styles.closestActivity}>
            <Text style={styles.closestTitle}>Próximos treinos</Text>

            <WorkoutInfo 
              onPress={onConfimationClick}
              date="24 de mar 14:30"
              place="Sala B"
              instructor="Fulano"
              type="Treino Cardio"
            />

             <WorkoutInfo 
              onPress={onConfimationClick}
              date="24 de mar 15:30"
              place="Sala B"
              instructor="Fulano"
              type="Treino Cardio"
            />


             <WorkoutInfo 
              onPress={onConfimationClick}
              date="24 de mar 11:30"
              place="Sala A"
              instructor="Fulano"
              type="Treino Cardio"
            />

             <WorkoutInfo 
              onPress={onConfimationClick}
              date="24 de mar 10:00"
              place="Sala c"
              instructor="Fulano"
              type="Treino Cardio"
            />
        </View>

        <ModalEvaluationWorkout isVisible={isModalVisible} onClose={onModalClose} />

        <ModalConfirmWorkout isVisible={isConfimationModalVisible} onClose={onConfimartionModalClose} />
  
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
  pageTopInfoContainer: {
    backgroundColor: '#4d416d',
    width: '100%',
    alignItems: 'center',
    padding: 25,
    flexDirection: 'row',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  pageTopInfoTitleContainer: {
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  pageTopInfoTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginRight: 20
  },
  welcomeContentText: {
    color: '#fff'
  },
  welcomeContent: {
    width: '100%',
    paddingTop: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 30
  }, 
  welcomeContentCard: {
    padding: 10,
    width: 100,
    height: 80,
    alignItems: 'center',
    textAlign: 'center',
    gap: 10,
    borderRadius: 1,
    backgroundColor: 'rgba(136,160,195, 0.2)',
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

});
