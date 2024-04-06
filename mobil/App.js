/*
* File: App.js
* Author: Balázs Réka
* Copyright: 2024, Balázs Réka
* Group: Szoft II/1
* Date: 2024-04-06
* Github: https://github.com/BalazsR2022/tanulok.git
* Licenc: GNU GPL
*/

import { StatusBar } from 'expo-status-bar';
import{useEffect, useState} from 'react';
import{FlatList, StyleSheet, Text, View} from 'react-native';
import {getStudents} from './services/studentsService';

export default function App() {
  const [students, setStudents] = useState([]);

  useEffect(()=>{
    getStudents().then((data) => {
      console.log(data)
      setStudents(data)
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text>Tanulok</Text>

      <FlatList 
        data={students}
        renderItem={ ({item}) => (
          <View style={styles.items}>       
            <Text>{item.id}</Text>
            <Text>{item.name}</Text>
            <Text>{item.city}</Text>
            <Text style={styles.yeartext}>Év: {item.birth}</Text>
            <Text>{item.groupId}</Text>
          </View>
        ) }
      />




      <StatusBar style="auto" />
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  items: {
    border: 'solid 3px navy',
    marginTop: 10,
    padding: 5,
    borderRadius: 8,
    backgroundColor: 'lightblue',
    boxShadow: '5px 5px 5px black',
  },
  yeartext: {
    fontSize: 10,
  },
});
