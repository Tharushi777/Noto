import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const NoteList = ({ notes }) => {
  const renderNoteItem = ({ item }) => (
    <View style={styles.noteItem}>
      <View style={styles.iconContainer}>
        {item.category === 'study' && (
          <Text style={styles.icon}>📚</Text>
        )}
        {item.category === 'work' && (
          <Text style={styles.icon}>💼</Text>
        )}
        {item.category === 'travel' && (
          <Text style={styles.icon}>✈️</Text>
        )}
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <Text style={styles.dateTime}>{item.dateTime}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={notes}
        renderItem={renderNoteItem}
        keyExtractor={(item) => item.id.toString()} // Use a unique identifier for each note
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  noteItem: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 12,
  },
  iconContainer: {
    marginRight: 16,
  },
  icon: {
    fontSize: 24,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  description: {
    fontSize: 16,
    marginBottom: 4,
  },
  dateTime: {
    fontSize: 14,
    color: '#888',
  },
});

export default NoteList;
