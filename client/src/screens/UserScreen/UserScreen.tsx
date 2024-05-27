import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import axios from 'axios';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

const UserScreen = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/users');
      setUsers(response.data.filter((user) => user.email && user.name));
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text>
        Name:
        {item.name}
      </Text>
      <Text>
        Email:
        {item.email}
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={users}
        renderItem={renderItem}
        keyExtractor={(item) => item.email.toString()} // Assuming each user object has an id field
      />
    </View>
  );
};

export default UserScreen;
