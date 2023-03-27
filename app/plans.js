import { StyleSheet, Text, View } from "react-native";
import { PageTopInfo } from "../components/PageTopInfo";
import { PlansInfo } from "../components/PlansInfo";

export default function Page() {
  return (
    <View style={styles.container}>
       <PageTopInfo title="Assinaturas" />

        <View style={styles.plansCardContainer}>
          <Text style={styles.plansCardTitle}>Assinatura Atual</Text>

          <PlansInfo 
            type="Mensal"
            status="Pago"
            created="10/03/2023"
            expires="10/04/2023"
          />
        </View>

        <View style={styles.plansCardContainer}>
          <Text style={styles.plansCardTitle}>Histórico</Text>

          <PlansInfo 
            type="Mensal"
            status="Pago"
            created="10/01/2023"
            expires="10/02/2023"
          />

          <PlansInfo 
            type="Mensal"
            status="Pago"
            created="10/11/2022"
            expires="10/12/2022"
          />

          <PlansInfo 
            type="Trimestral"
            status="Pago"
            created="10/08/2022"
            expires="10/11/2022"
          />

          <PlansInfo 
            type="Trimestral"
            status="Pago"
            created="10/05/2022"
            expires="10/08/2022"
          />
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
  plansCardContainer: {
    alignSelf: 'center',
    backgroundColor: '#fff',
    width: '90%',
    padding: 20,
    borderRadius: 20,
    gap: 10,
    marginTop: 20
  },
  plansCardTitle: {
    fontSize: 24,
    fontWeight: 'bold'
  },
});
