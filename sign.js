import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet, } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
const SignUp = ({ navigation }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [mobile, setMobile] = useState('');
    const [password, setPassword] = useState('');


    const [open, setOpen] = useState(false);
    const [value, setValue] = useState();
    const [UserType, setItems] = useState([
        { label: 'Employee', value: 'employee' },
        { label: 'Student', value: 'student' }]);

    const [inputs, setInputs] = React.useState({
        fname: '',
        lname: '',
        mobile: '',
        password: ''
    });

    const validateMobileNumber = () => {
        // Regular expression for Sri Lankan mobile numbers
        const mobileRegex = /^(?:\+94|0)[7-9]\d{8}$/;

        if (!mobile.match(mobileRegex)) {
            Alert.alert('Invalid Mobile Number', 'Please enter a valid  mobile number.');
        }
    };

    const handleSignUp = () => {
        // Validation logic for other fields (first name, last name, password) can be added here.
        if (!inputs.fname) {
            Alert.alert('Validation Error', 'Please input First Name');
        }
        else if (!inputs.lname) {
            Alert.alert('Validation Error', 'Please input Last Name');
        }
     
        // Validate mobile number
        validateMobileNumber();
        ;
        // Continue with user registration logic.
        navigation.navigate('home')
    };

    return (
        <View>
            <Text>Registration</Text>
            <TextInput
                placeholder="First Name"
                onChangeText={text => setFirstName(text)}
                value={firstName}
            />
            <TextInput
                placeholder="Last Name"
                onChangeText={text => setLastName(text)}
                value={lastName}
            />
            <TextInput
                placeholder="Mobile Number"
                onChangeText={text => setMobile(text)}
                value={mobile}
                keyboardType="numeric"
            />
            <TextInput
                placeholder="Password"
                onChangeText={text => setPassword(text)}
                value={password}
                secureTextEntry
            />
            <DropDownPicker style={styles.drpdwnpick}
                open={open}
                value={value}
                items={UserType}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems} />
            <Button title="Sign Up" onPress={handleSignUp} />
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    fnameInput: {
        width: 250,
        height: 50,
        borderWidth: 1,
        borderRadius: 15,
        borderColor: 'black',
        padding: 2,
    },
    text1: {
        fontSize: 24,
        fontWeight: "bold",
    },
    drpdwnpick: {
        // width: 250,
        // height: 50,
        // borderWidth: 1,
        // borderRadius: 15,
        // borderColor: 'black',
        // padding: 2,
        // marginLeft: 55,
    }
});

export default SignUp;
