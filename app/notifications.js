import { Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { PageTopInfo } from "../components/PageTopInfo";
import Feather from '@expo/vector-icons/Feather'

export default function Page() {
  return (
    <SafeAreaView style={styles.container}>
        <PageTopInfo title="Notificações" />

         <View style={styles.notificationsContainer}>

            <Pressable style={styles.notificationsContent}>
                <View>
                    <Text style={styles.notificationtitle}>Treino de Cardio em 10 minutos</Text>
                </View>

                <View style={styles.notificationsIcon}>
                    <Feather name="clock" size={30} color="#4d416d" />
                </View>
                    
            </Pressable>

            <Pressable style={styles.notificationsContent}>
                <View>
                    <Text style={styles.notificationtitle}>Treino Agendado</Text>
                </View>

                <View style={styles.notificationsIcon}>
                    <Feather name="calendar" size={30} color="#4d416d" />
                </View>
                    
            </Pressable>

            <Pressable style={styles.notificationsContent}>
                <View>
                    <Text style={styles.notificationtitle}>Nova Mensagem</Text>
                </View>

                <View style={styles.notificationsIcon}>
                    <Feather name="message-square" size={30} color="#4d416d" />
                </View>
                    
            </Pressable>

            <Pressable style={styles.notificationsContent}>
                <View>
                    <Text style={styles.notificationtitle}>Treino de Cardio em 10 minutos</Text>
                </View>

                <View style={styles.notificationsIcon}>
                    <Feather name="clock" size={30} color="#4d416d" />
                </View>
                    
            </Pressable>

            <Pressable style={styles.notificationsContent}>
                <View>
                    <Text style={styles.notificationtitle}>Treino Agendado</Text>
                </View>

                <View style={styles.notificationsIcon}>
                    <Feather name="calendar" size={30} color="#4d416d" />
                </View>
                    
            </Pressable>

            <Pressable style={styles.notificationsContent}>
                <View>
                    <Text style={styles.notificationtitle}>Nova Mensagem</Text>
                </View>

                <View style={styles.notificationsIcon}>
                    <Feather name="message-square" size={30} color="#4d416d" />
                </View>
                    
            </Pressable>
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: '#f1f2f2'
  },
  notificationsContainer: {
    marginTop: 20,
    alignSelf: 'center',
    backgroundColor: '#fff',
    width: '90%',
    padding: 20,
    borderRadius: 20,
    gap: 10
  },
    notificationtitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  notificationsContent: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f1f2f2',
    borderRadius: 8,
    padding: 10
  },
  notificationsIcon: {
    borderRadius: 50,
    padding: 10,
    height: 50,
  },
});
