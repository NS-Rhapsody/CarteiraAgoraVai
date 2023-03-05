import { Text, View, TouchableOpacity, TextInput } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome'

const campo = "bg-b"

export function Login({ inicio }){
    return (
        <View className="flex-1 items-center justify-center bg-yellow-600">
        <Icon name="arrow-left" size={30} color="white" onPress={inicio}/>
            <Text>
                Login
            </Text>
            <TextInput 
        placeholder="E-mail"
        keyboardType="default"
        />
        <TextInput 
        placeholder="Senha"
        keyboardType="default"
        />
        <TouchableOpacity>
            <Text>Logar</Text>
        </TouchableOpacity>
        </View>
    )
}