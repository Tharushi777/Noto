import React from 'react';
import { View, Text, Button } from 'react-native';

const Welcome = ({ navigation }) => {
  const navigateToSignUp = () => {
    navigation.navigate('signup');
  };

  const navigateToLogin = () => {
    navigation.navigate('login');
  };

  return (
    <View>
      <Text>Welcome to the App</Text>
      <Button title="Sign Up" onPress={navigateToSignUp} />
      <Button title="Login" onPress={navigateToLogin} />
    </View>
  );
};

export default Welcome;




// import { Button } from "react-native";
// import { SafeAreaView,Text,StyleSheet,View,Image,TouchableOpacity} from "react-native";

// export function WelcomeUi({navigation}){

//     const ui=(
//         // <SafeAreaView style={StyleSheet.container}>
//         //     <Text style={styles.text1}>Home</Text>
//         //     <Button title='Go To Profile' onPress={goToProfile}/>
//         // </SafeAreaView>

// <SafeAreaView style={StyleSheet.container} >
// <View >
//     <Text style={styles.text1}>
//         Let's Get Started!
//     </Text>
//     <View >
//     <Image source={require('./assets/images/welcome.png')}
//     style={StyleSheet.img1} />
//         {/* <Image source={require("../assets/images/welcome.png")}
//             style={{width: 350, height: 350}} /> */}
//     </View>
//     <View >
//     <Button title='SignUp' onPress={goToSignIn}/>
//         <View >
//             <Text>Already have an account?</Text>
//             <Button title='LogIn' onPress={goToLogin}/>
//         </View>
//     </View>
// </View>
// </SafeAreaView>
//     );
//     return ui;

//     function goToSignIn(){
//         const obj={"name":"sahan","mobile":"0776734432"};
//         navigation.navigate("signup",obj);
//     }
//     function goToLogin(){
//         const obj={"name":"Amal","mobile":"076996138"};
//         navigation.navigate("login",obj);
//     }
// }
// const styles=StyleSheet.create({
//     container:{
//         flex:1,
//         backgroundImage:'#fff',
//         alignItems:'center',
//         justifyContent:'center',
//     },
//     text1:{
//         text:"white",
//          font:"bold" ,
//          text:"4xl",
//          text:"center",
//     },
//     img1:{
//         width: 50,
//         height: 50,

//     }
// });