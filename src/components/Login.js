import { StyleSheet, View, TouchableOpacity, Text, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useState } from 'react';

export default function Login({inicio}) {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

  return (
    <View style={styles.container}>
        <Icon name="arrow-left" size={30} color="white" onPress={inicio}/>
        <TextInput 
        style={styles.input}
        placeholder="E-mail"
        keyboardType="default"
        value={email}
        onChangeText={setEmail}
        />
        <TextInput 
        style={styles.input}
        placeholder="Senha"
        keyboardType="default"
        value={password}
        onChangeText={setPassword}
        />
        <TouchableOpacity onPress={() => {console.log({ email, password})}}>
            <Text>Logar</Text>
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
  input: {
    backgroundColor: '#00008B',
    borderBottomColor: 'black',
    borderBottomWidth: 2,
    borderBottomType: 'solid',
    marginBottom: 50,
    width: 350,
    height: 40,
    color: "white",
  },
  
});