import { Link } from "expo-router";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function Page() {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Login</Text>

        <TextInput style={styles.input}  placeholder="Email"/>

        <TextInput style={styles.input}  placeholder="Password" secureTextEntry={true} />

        <Link href="/home" style={styles.loginButton}>Login</Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
    backgroundColor: '#5db4aa',
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    width: '100%',
    borderRadius: 12,
    marginHorizontal: "auto",
    alignItems: 'center',
    gap: 30,
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
    color: '#fff',
  },
  input: {
    backgroundColor: '#fff',
    height: 35,
    paddingLeft: 20,
    borderRadius: 50,
    width: '100%'
  },
  loginButton: {
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
