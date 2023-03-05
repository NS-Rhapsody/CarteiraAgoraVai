import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


export default function PossuiCarteira({cadastro, inicio}) {

  return (
    <View style={styles.container}>
        <Icon name="arrow-left" size={30} color="white" onPress={inicio}/>
        <Text>Você já teve carteirinha alguma vez na sua vida?</Text>
        <TouchableOpacity onPress={cadastro} style={styles.button}>
            <Text>Sim, já tive uma carteirinha</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={cadastro}>
            <Text>Não, nunca tive uma carteirinha</Text>
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
    marginTop: 15
  }
});