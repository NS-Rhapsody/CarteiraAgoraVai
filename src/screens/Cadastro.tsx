import { Text, View, TextInput, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome'

const input = "bg-blue-800 w-11/12 p-5 m-2 rounded-2xl"

export function Cadastro({inicio, cadastro2}){
    return (
        <View className="flex-1 items-center justify-center bg-yellow-600">
            <Icon name="arrow-left" size={30} color="white" onPress={inicio}/>
            <Text className="text-3xl font-bold m-5">Agora preencha seus dados pessoais</Text>
            <Text className="text-2xl font-bold">Certifique que está tudo certo!</Text>
            <TextInput 
            placeholder="Nome completo"
            keyboardType="default"
            className={input}
            />
            <TextInput 
            placeholder="Nome social"
            keyboardType="default"
            className={input}
            />
            <TextInput 
            placeholder="Data de nascimento"
            keyboardType="numeric"
            className={input}
            />
            <TextInput 
            placeholder="CPF"
            keyboardType="numeric"
            className={input}
            />
            <TouchableOpacity className={input + " m-5 items-center"} onPress={cadastro2}>
                <Text className="font-bold text-xl">Salvar</Text>
            </TouchableOpacity>
        </View>
    )
}