import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const employees = [{ name: 'Danny Benshi', age: 29, occupation: 'Software engineer', gender: 'Male', },
  { name: 'Emmy Gaga', age: 22, occupation: 'Driver', gender: 'Male', },
  { name: 'Claudia Umulisa', age: 19, occupation: 'Sudent', gender: 'Femaile', },
  { name: 'Agnes Uwimana', age: 50, occupation: 'Retirement', gender: 'Female', },
  { name: 'Eric Rukundo', age: 27, occupation: 'University assistant lecturer', gender: 'Male', }]

  const [employeeName, setEmployeeName] = useState('');


  const FilterData = ({ item }) => {
    if (employeeName == "") {
      return (<View><Text>{item.name}</Text></View>)
    }

    if (item.name.toLowerCase().includes(employeeName.toLocaleLowerCase())) {
      return (<View><Text>{item.name}</Text></View>)
    }
  }
  const [emp, setEmp] = useState(employees)
  return (
    <View style={styles.container}>
      <SafeAreaView />
      <TextInput placeholder='Type name of employee' onChangeText={(txt) => setEmployeeName(txt)} />
      <View style={styles.listContainer}>
        <FlatList data={emp} renderItem={({ item }) => {
          return <FilterData item={item} />
        }} keyExtractor={(item, index) => item.name + index} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flex: 1

  },
  listContainer: {
    //backgroundColor:'red',
    flex: 1
  },
  itemStyle: {
    backgroundColor: 'red'
  }
});
