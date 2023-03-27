import { Pressable, StyleSheet, Text, View } from "react-native"
import Feather from '@expo/vector-icons/Feather'
import { useRouter } from "expo-router"

export function PageTopInfo(props) {
    const router = useRouter()
    return (
        <View style={styles.pageTopInfoContainer}>   
            <Pressable style={{ width: '10%',}}  onPress={() => router.back() }>
                <Feather name="arrow-left" size={30} color="#fff" />
            </Pressable>

            <View style={styles.pageTopInfoTitleContainer}>
                <Text style={styles.pageTopInfoTitle}>{props.title}</Text>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
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
    }
})