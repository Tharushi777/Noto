import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Validation and login logic can be added here.

    // For demonstration purposes, we'll navigate to the "home" screen.
    navigation.navigate('home');
  };

  return (
    <View>
      <Text>Login</Text>
      <TextInput
        placeholder="Email"
        onChangeText={text => setEmail(text)}
        value={email}
      />
      <TextInput
        placeholder="Password"
        onChangeText={text => setPassword(text)}
        value={password}
        secureTextEntry
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

export default Login;


// import { SafeAreaView,Text,StyleSheet,Button,TextInput} from "react-native";
// import React, {useState} from 'react';
// export function LoginUi({navigation,route}){

    
    

//     const [mobile, setmobile] = useState('');
//     const [password, setpassword] = useState('');
//     const ui =(
//         <SafeAreaView style={styles.container}>
//             <Text style={styles.text1}>LogIn</Text>
//             {/* <Text>{route.params.name}</Text>
//             <Text>{route.params.mobile}</Text> */}

//             <TextInput onChangeText={(text) => setmobile(text)}
//             value={mobile}
//             style={styles.fnameInput}
//             placeholder="Enter your Mobile Number"/>

//            <TextInput onChangeText={(text) => setpassword(text)}
//             value={password}
//             style={styles.fnameInput}
//             placeholder="Enter your Password"/>

//             <Button title='Login' onPress={goToHome}/>
//         </SafeAreaView>
//     );
//     return ui;
//     function goToHome(){
//        navigation.navigate("home");
//     }
// }
// const styles=StyleSheet.create({
//     container:{
//         flex:1,
//         backgroundColor:'#fff',
//         alignItems:'center',
//         justifyContent:'center',
//     },
//     text1:{
//         fontSize:24,
//         fontWeight:"bold",
//     },
//     fnameInput: {
//         width: 250,
//         height: 50,
//         borderWidth: 1,
//         borderRadius: 15,
//         borderColor: 'black',
//         padding: 2,
//     },
// });