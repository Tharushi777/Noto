// import React, { useState } from 'react';
// import { View, Text, TextInput, Button, Picker, StyleSheet } from 'react-native';

// const NewNote = () => {
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');
//   const [category, setCategory] = useState('study'); // Default category is 'study'

//   const handleSaveNote = () => {
//     // Validation logic can be added here.
//     // For simplicity, we'll assume that title and description are required.

//     // Create a new note object with the provided data
//     const newNote = {
//       title,
//       description,
//       category,
//     };

//     // You can save the new note to your data store or dispatch an action here.

//     // For now, we'll just log it to the console.
//     console.log('New Note:', newNote);

//     // Clear the form fields
//     setTitle('');
//     setDescription('');
//     setCategory('study');
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.heading}>Create a New Note</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Title"
//         onChangeText={text => setTitle(text)}
//         value={title}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Description"
//         onChangeText={text => setDescription(text)}
//         value={description}
//         multiline
//       />
//       <Picker
//         selectedValue={category}
//         onValueChange={(itemValue, itemIndex) => setCategory(itemValue)}
//         style={styles.input}
//       >
//         <Picker.Item label="Study" value="study" />
//         <Picker.Item label="Work" value="work" />
//         <Picker.Item label="Travel" value="travel" />
//       </Picker>
//       <Button title="Save Note" onPress={handleSaveNote} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//   },
//   heading: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 16,
//   },
//   input: {
//     height: 40,
//     borderColor: 'gray',
//     borderWidth: 1,
//     marginBottom: 16,
//     paddingHorizontal: 8,
//   },
// });

// export default NewNote;
