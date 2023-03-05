import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';

export default function Inicio({login, possuiCarteira}) {

  return (
    <View>
        <Text className="text-indigo-900">Sua carteirinha line com beneficios!</Text>
        <Text>Faça seu pedido rápido e seguro por aqui</Text>

        <TouchableOpacity onPress={possuiCarteira} style={styles.button}>
          <Text>Crie sua conta</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={login}>
          <Text>Login</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF4500',
    width: "100%",
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    color: "white",
    backgroundColor: "#00008B",
    justifyContent: "center",
    width: "40%",
    height: 40,
    alignItems: 'center',
  }
});
