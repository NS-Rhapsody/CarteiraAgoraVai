import { Text, View, TouchableOpacity } from "react-native";

export function Home({ login, possuiCarteira}){
    return (
        <View className="flex-1 items-center justify-center bg-yellow-600">
            <Text className="text-3xl font-bold w-11/12 ml-6 mt-80">
                Sua carteirinha online com benefícios!
            </Text>
            <Text className="text-xl w-10/12 mr-2 mt-4">
                Faça seu pedido rápido e seguro por aqui
            </Text>
            <TouchableOpacity className="bg-blue-800 w-8/12 h-14 items-center justify-center mt-32 rounded-2xl" onPress={possuiCarteira}>
            <Text className="text-xl font-bold">Crie sua conta</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={login}>
            <Text className="font-bold text-xl mt-4">Login</Text>
            </TouchableOpacity>
        </View>
    )
}