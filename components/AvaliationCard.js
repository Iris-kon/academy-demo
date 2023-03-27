import { Pressable, StyleSheet, Text, View } from "react-native"
import Feather from '@expo/vector-icons/Feather'

export function AvaliationCard(props) {
    return (
        <Pressable style={styles.closestInfoContent}>
            <View>
                <Text style={styles.closestSubInfo}>{props.type}</Text>
                <Text style={{fontSize: 12}}>{props.date}</Text>

                <Text style={{fontSize: 12}}>{props.place} - {props.instructor}</Text>
            </View>

            <View style={styles.closestTeacher}>
                <Feather name="user" size={30} color="#4d416d" />
            </View>
                
        </Pressable>
    )
}

const styles = StyleSheet.create({
    closestInfoContent: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  closestTitle: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  closestSubInfo: {
    fontSize: 18,
  },
   closestTeacher: {
    borderRadius: 50,
    padding: 10,
    backgroundColor: '#f1f2f2'
  },
})