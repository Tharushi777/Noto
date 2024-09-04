

import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SignUpeUi from './sign'; // Corrected import statement
import WelcomeUi from './Welcome'; // Corrected import statement
import LoginUi from './Login'; // Corrected import statement
import HomeUi from './Home'; // Corrected import statement
import NewNoteUi from './newNote';




const Stack = createNativeStackNavigator();

const app=()=>{
  return(
    <NavigationContainer>
    <Stack.Navigator>
     <Stack.Screen name="welcome" component={WelcomeUi}/>
     <Stack.Screen name="signup" component={SignUpeUi}/>
     <Stack.Screen name="login" component={LoginUi}/>
     <Stack.Screen name="home" component={HomeUi}/>
     <Stack.Screen name="newnote" component={NewNoteUi}/>
    </Stack.Navigator>
    </NavigationContainer>
  );
};
export default app;

// }
// function app (){
//   const ui=(
//     <NavigationContainer>
    
//     </NavigationContainer>
//   );
//   return ui;
// }
// export default app;