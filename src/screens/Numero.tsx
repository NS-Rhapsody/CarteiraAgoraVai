import { Text, View, TextInput, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome'

const input = "bg-blue-800 w-11/12 p-5 m-2 rounded-2xl"

export function Numero({cadastro2}){
    return (
        <View className="flex-1 items-center justify-center bg-yellow-600">
            <Icon name="arrow-left" size={30} color="white" onPress={cadastro2}/>
            <Text className="text-3xl font-bold m-5">Numero</Text>
        </View>
    )
}