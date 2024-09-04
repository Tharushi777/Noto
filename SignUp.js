// import React, { Component } from 'react';
// // import { SafeAreaView, Text, StyleSheet,TextInput,Button } from "react-native";
// import {
//   View,
//   Text,
//   SafeAreaView,
//   Keyboard,
//   ScrollView,
//   Alert,
//   Input,Button,Loader,StyleSheet,

  
// } from 'react-native'

// // import Button from './components/Button';
// // import Input from './components/Input';
// // import Loader from './components/Loder';
// // import DropDownPicker from 'react-native-dropdown-picker';




// const SignUpeUi = ({navigation}) => {
//   const [inputs, setInputs] = React.useState({
//     fname: '',
//     lname: '',
//     mobile: '',
//     password: ''
//   });
//   const [errors, setErrors] = React.useState({});
//   const [loading, setLoading] = React.useState(false);


//   const register = () => {
//     setLoading(true);
//     setTimeout(() => {
//       try {
//         setLoading(false);
//         AsyncStorage.setItem('userData', JSON.stringify(inputs));
//         navigation.navigate('LoginUi');
//       } catch (error) {
//         Alert.alert('Error', 'Something went wrong');
//       }
//     }, 3000);
//   };

//   const handleOnchange = (text, input) => {
//     setInputs(prevState => ({ ...prevState, [input]: text }));
//   };
//   const handleError = (error, input) => {
//     setErrors(prevState => ({ ...prevState, [input]: error }));
//   };

//   // const [fname, setfname] = useState('');
//   // const [lname, setlname] = useState('');
//   // const [mobile, setmobile] = useState('');
//   // const [password, setpassword] = useState('');

//   // const [open, setOpen] = useState(false);
//   // const [value, setValue] = useState();
//   // const [UserType, setItems] = useState([
//   //   {label: 'Employee', value: 'employee'},
//   //   {label: 'Student', value: 'student'}]);


//   // constructor(props) {
//   //     super(props);
//   //     this.state = 
//   //     {

//   //    };
//   //   }
//   // }

   Register = () => {
    var fname = this.state.fname;
    var lname = this.state.lname;
    var mobile = this.state.mobile;
    var password = this.state.password;


    if (fname.length === 0 || lname.length ===0 || mobile.length === 0 || password.length === 0) {
      alert("Required Field is Missing");
    } else {
      var InsertAPIURL = "http://10.0.2.2/php_react_1/insert.php";

      var headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      };

      var Data = {
        fname: fname,
        lname: lname,
        mobile: mobile,
        password:password
      };

      fetch(InsertAPIURL, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(Data)
      })
      .then((response) =>response.json())
      .then((response)=>{
        alert(response[0].Message);
       navigation.navigate("SignInScreen");
      })
      .catch((error) => {
        alert("Error"+error);
      })
    }
  }






//   return (

//     <SafeAreaView style={{ backgroundColor:"white", flex: 1 }}>
//       <Loader visible={loading} />
//       <ScrollView
//         contentContainerStyle={{ paddingTop: 50, paddingHorizontal: 20 }}>
//         <Text style={{ color: "black", fontSize: 40, fontWeight: 'bold' }}>
//           Register
//         </Text>
//         <Text style={{ color: "grey", fontSize: 18, marginVertical: 10 }}>
//           Enter Your Details to Register
//         </Text>
//         <View style={{ marginVertical: 20 }}>
//           <Input
//             onChangeText={text => handleOnchange(text, 'fname')}
//             onFocus={() => handleError(null, 'fname')}
//             //iconName="email-outline"
//             label="Email"
//             placeholder="Enter your First Name"
//             error={errors.fname}
//           />

//           <Input
//             onChangeText={text => handleOnchange(text, 'lname')}
//             onFocus={() => handleError(null, 'lname')}
//            // iconName="account-outline"
//             label="Full Name"
//             placeholder="Enter your Lasat name"
//             error={errors.lname}
//           />

//           <Input
//             keyboardType="numeric"
//             onChangeText={text => handleOnchange(text, 'mobile')}
//             onFocus={() => handleError(null, 'mobile')}
//             //iconName="phone-outline"
//             label="Phone Number"
//             placeholder="Enter your phone no"
//             error={errors.mobile}
//           />
//           <Input
//             onChangeText={text => handleOnchange(text, 'password')}
//             onFocus={() => handleError(null, 'password')}
//             //iconName="lock-outline"
//             label="Password"
//             placeholder="Enter your password"
//             error={errors.password}
//             password
//           />
//           <Button title="Register" onPress={validate} />
//           <Text
//             onPress={() => navigation.navigate('LoginUi')}
//             style={{
//               color: "black",
//               fontWeight: 'bold',
//               textAlign: 'center',
//               fontSize: 16,
//             }}>
//             Already have account ?Login
//           </Text>
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// //   <SafeAreaView style={styles.container}>
// //     <Text style={styles.text1}>Signup</Text>
// //     {/* <Text>{route.params.name}</Text>
// //         <Text>{route.params.mobile}</Text> */}

// //     <TextInput onChangeText={fname => this.setState({ fname })}
// //       // value={fname}
// //       style={styles.fnameInput}
// //       placeholder="Enter your First Name" />

// //     <TextInput onChangeText={lname => this.setState({ lname })}
// //       // value={lname}
// //       style={styles.fnameInput}
// //       placeholder="Enter your Last Name" />

// //     <TextInput onChangeText={mobile => this.setState({ mobile })}
// //       // value={mobile}
// //       style={styles.fnameInput}
// //       placeholder="Enter your Mobile Number" />

// //     <TextInput onChangeText={password => this.setState({ password })}
// //       // value={password}
// //       style={styles.fnameInput}
// //       placeholder="Enter your Password" />

// //     {/* <DropDownPicker style={styles.drpdwnpick}
// //        open={open}
// //        value={value}
// //        items={UserType}
// //        setOpen={setOpen}
// //        setValue={setValue}
// //         setItems={setItems}/> */}

// //     <View >
// //       <Button title='SignUp' onPress={goToLogin} />
// //       <View >
// //         <Text>Already have an account?</Text>
// //         <Button title='LogIn' onPress={validate} />
// //       </View>
// //     </View>
// //   </SafeAreaView>
// // );


// export default SignUpeUi;

// //  function goToLogin(){
// //     const obj={"name":"Amal","mobile":"076996138"};
// //     navigation.navigate("login",obj);
// // }


// // 


