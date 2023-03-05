import { StyleSheet, View, TouchableOpacity, TextInput, Text } from 'react-native';
import { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';


export default function Cadastro({login, possuiCarteira}) {

    const [name, setName] = useState("")
    const [socialName, setSocialName] = useState("")
    const [date, setDate] = useState("")
    const [cpf, setCpf] = useState("")

  return (
    <View style={styles.container}>
        <Icon name="arrow-left" size={30} color="white" onPress={possuiCarteira}/>
        <Text>Agora preencha seus dados</Text>
        <TextInput 
        style={styles.input}
        placeholder="Nome Completo"
        keyboardType="default"
        value={name}
        onChangeText={setName}
        />
        <TextInput 
        style={styles.input}
        placeholder="Nome Social"
        keyboardType="default"
        value={socialName}
        onChangeText={setSocialName}
        />
        <TextInput 
        style={styles.input}
        placeholder="Data de Nascimento"
        keyboardType="numeric"
        value={date}
        onChangeText={setDate}
        />
        <TextInput 
        style={styles.input}
        placeholder="CPF"
        keyboardType="numeric"
        value={cpf}
        onChangeText={setCpf}
        />
        <TouchableOpacity onPress={() => {console.log({name, socialName, date, cpf})}}>
            <Text>Enviar</Text>
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
    color: "white",
    borderBottomWidth: 2,
    borderBottomType: 'solid',
    marginBottom: 50,
    width: 350,
    height: 40,
  },
});