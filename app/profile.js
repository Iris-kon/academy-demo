import { StyleSheet, Text, TextInput, View } from "react-native";
import { PageTopInfo } from "../components/PageTopInfo";
import Feather from '@expo/vector-icons/Feather'
import { Link } from "expo-router";

export default function Page() {
  return (
    <View style={styles.container}>
       <PageTopInfo title="Meu Perfil" />
        <View style={styles.profileInfoContainer}>
            <View style={styles.profilePhoto}>
              <Feather  name="user" size={80} color="#4d416d" />
            </View>

             <View>
                <Text style={styles.inputLabel}>Nome</Text>
                <TextInput
                  value="Fulano de tal"
                  placeholder="nome"
                  editable={false}
                  selectTextOnFocus={false}
                  style={styles.input}
                />

                <Text style={styles.inputLabel}>Data de Nascimento</Text>
                <TextInput
                  value="10/01/2000"
                  placeholder="Data de Nascimento"
                  editable={false}
                  selectTextOnFocus={false}
                  style={styles.input}
                />

                <Text style={styles.inputLabel}>Whatsapp</Text>
                <TextInput
                  value="(42) 98888-8888"
                  placeholder="Whatsapp"
                  editable={false}
                  selectTextOnFocus={false}
                  style={styles.input}
                />

                <Text style={styles.inputLabel}>E-mail</Text>
                  <TextInput
                   value="fulano@mail.com"
                    placeholder="Email"
                    editable={false}
                    selectTextOnFocus={false}
                    style={styles.input}
                  />

                <Text style={styles.inputLabel}>Endereço</Text>
                  <TextInput
                   value="Rua Fantasia, N: 180, Centro, Curitiba - PR. "
                    placeholder="Endereço"
                    multiline={true}
                    editable={false}
                    selectTextOnFocus={false}
                    style={styles.input}
                  />
             </View>
        
             <View style={styles.buttonContainer}>
              <Link href="/" style={styles.linkButton}>Sair</Link>
            </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    width: '100%',
    backgroundColor: '#f1f2f2'
  },
  profileInfoContainer: {
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    width: '90%',
    padding: 20,
    borderRadius: 20,
    gap: 10,
    marginTop: 20
  },
  profilePhoto: {
    width: 100,
    height: 100,
    borderRadius: 50,
    padding: 10,
    backgroundColor: '#f1f2f2',
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputLabel: {
    textAlign: 'left',
    paddingHorizontal: 10,
    paddingBottom: 3
  },
   input: {
    width: 250,
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
    backgroundColor: '#e8e8e8'
  },
  buttonContainer: {
    marginTop: 20,
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
