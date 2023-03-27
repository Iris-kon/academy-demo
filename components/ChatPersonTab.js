import { Pressable, StyleSheet, Text, View } from "react-native"
import Feather from '@expo/vector-icons/Feather'

export function ChatPersonTab(props) {
    return (
        <Pressable style={styles.closestInfoContent}>
            <View>
                <Text style={styles.closestSubInfo}>{props.name}</Text>
                <Text style={{fontSize: 12, maxWidth: '85%', textAlign: 'justify'}}>{props.message}</Text>
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
  closestSubInfo: {
    fontSize: 18,
  },
   closestTeacher: {
    borderRadius: 50,
    padding: 10,
    height: 50,
    backgroundColor: '#f1f2f2'
  },
})