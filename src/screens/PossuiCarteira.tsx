import { Text, View, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome'

const texto = "font-bold p-5 text-base"
const button = "border-solid border-4 border-blue-800 w-5/6 my-1 items-center rounded-2xl"

export function PossuiCarteira({inicio, cadastro}){
    return (
        <View className="flex-1 items-center justify-center bg-yellow-600">
            <Icon name="arrow-left" size={30} color="white" onPress={inicio}/>
            <Text className="text-3xl font-bold m-5">
                Você já teve Carteirinha alguma vez na sua vida?
            </Text>
            <TouchableOpacity className={button + " bg-blue-800"} onPress={cadastro}>
                <Text className={texto}>Sim, já tive uma carteirinha</Text>
            </TouchableOpacity>
            <TouchableOpacity className={button} onPress={cadastro}>
                <Text className={texto}>Não, nunca tive uma carteirinha</Text>
            </TouchableOpacity>
        </View>
    )
}