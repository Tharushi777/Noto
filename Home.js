import React from 'react';
import { View, Text, Button } from 'react-native';

const Home = ({ navigation }) => {
  const logout = () => {
    // Add logout logic if needed.
    // For example, clear user authentication token, reset state, etc.

    // Navigate back to the "welcome" screen.
    navigation.navigate('newnote');
  };

  return (
    <View>
      <Text>Welcome to the Home Page</Text>
      <Button title="New Note" onPress={logout} />
      <Button title="saved Notes" onPress={logout} />
    </View>
  );
};

export default Home;


// import { SafeAreaView,Text,StyleSheet } from "react-native";

// export function HomeUi({naviation,route}){
//     const ui =(
//         <SafeAreaView style={styles.container}>
//             <Text style={styles.text1}>Home</Text>
            

           
//         </SafeAreaView>
//     );
//     return ui;
   
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
// });