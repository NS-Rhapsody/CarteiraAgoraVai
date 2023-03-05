import { Text, View, TextInput, TouchableOpacity, FlatList } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome'

const input = "bg-blue-800 w-11/12 p-5 m-2 rounded-2xl"

export function Cadastro2({ cadastro, numero }){
    return (
        <View className="flex-1 items-center justify-center bg-yellow-600 text-white">
            <Icon name="arrow-left" size={30} color="white" onPress={cadastro}/>
            <Text>Está quase acabando, falta só alguns passos</Text>
            <TextInput 
            placeholder="E-mail"
            keyboardType="default"
            className={input}
            />
            <TextInput 
            placeholder="Senha"
            keyboardType="default"
            className={input}
            />
            <Text>A senha necessita:</Text>
            <Text>Uma letra maiúscula;</Text>
            <Text>No mínimo 8 caracteres;</Text>
            <Text>Um caractere especial (/, &, $);</Text>
            <TextInput 
            placeholder="Confirme a senha"
            keyboardType="default"
            className={input}
            />
            <TouchableOpacity className={input + " m-5 items-center"} onPress={numero}>
                <Text className="font-bold text-xl text-white">Salvar</Text>
            </TouchableOpacity>
        </View>
    )
}