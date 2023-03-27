import { SafeAreaView, StyleSheet, TouchableOpacity, View } from "react-native";
import { PageTopInfo } from "../components/PageTopInfo";
import { ChatPersonTab } from "../components/ChatPersonTab";
import Feather from '@expo/vector-icons/Feather'

export default function Page() {
  return (
    <SafeAreaView style={styles.container}>
        <PageTopInfo title="Chat" />

         <View style={styles.chatContainer}>

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

        <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => console.log('abrir chat')}
            style={styles.touchableOpacityStyle}>
            <Feather name="message-square" size={30} color="#fff" />
        </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: '#f1f2f2'
  },
  chatContainer: {
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
  chatContent: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f1f2f2',
    borderRadius: 8,
    padding: 10
  },
  chatIcon: {
    borderRadius: 50,
    padding: 10,
    height: 50,
  },
  touchableOpacityStyle: {
    position: 'absolute',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    right: 30,
    bottom: 30,
    backgroundColor: '#4d416d',
    borderRadius: 50
    },
});
