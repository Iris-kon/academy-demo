import { Pressable, StyleSheet, Text, View } from "react-native"
import Feather from '@expo/vector-icons/Feather'

export function PlansInfo(props) {
    return (
        <Pressable style={styles.plansInfoContent}>
            <View>
                <Text style={styles.plansSubInfo}>{props.type}</Text>
                <Text style={{fontSize: 12}}>{props.status}</Text>

                <Text style={{fontSize: 12}}>{props.created} - {props.expires}</Text>
            </View>

            <View style={styles.plansIcon}>
                <Feather name="clipboard" size={30} color="#4d416d" />
            </View>
                
        </Pressable>
    )
}

const styles = StyleSheet.create({
    plansInfoContent: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  plansSubInfo: {
    fontSize: 18,
  },
   plansIcon: {
    borderRadius: 50,
    padding: 10,
    height: 50,
    backgroundColor: '#f1f2f2'
  },
})