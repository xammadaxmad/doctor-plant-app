// ScrollableListScreen.js
import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, ScrollView, Image, Pressable } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { GetHistoryList, HistoryListItemRemoveDelete } from '../providers/apiProvider.mjs';

const History = () => {
  const [data, setData] = useState([]);

  useEffect(function () {
    GetHistoryList().then(response => {
      if (response != null) {
        setData(response)
      }
    })
  }, [])

  setTimeout(() => {
    console.log(data)
  }, 2000);

  const handleListItemDeleteClick = (id) => {
    HistoryListItemRemoveDelete(id).then(response => {
      GetHistoryList().then(response => {
        if (response != null) {
          setData(response)
        }
      })
    })
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../assets/images/logo.png')} // Replace with your logo path
          style={styles.logo}
          resizeMode="contain"
        />
      </View>
      <ScrollView style={styles.scrollView}>
        {data.map(item => (
          <View key={item._id} style={styles.listItem}>
            <Image source={{ uri: item.image_path }} style={styles.diseaseImage} resizeMode="contain" />
            <View style={styles.textContainer}>
              <Text style={styles.dateText}>Date: {item.created_at.replace('/', '-').replace('/', '-').split('T')[0]}</Text>
              <Text style={styles.diseaseText}>Disease: {item.disease}</Text>
              <Text style={styles.diseaseText}>Probability: {item.probability}</Text>
            </View>
            <Pressable onPress={() => handleListItemDeleteClick(item._id)}><Text style={styles.icon}>Delete</Text></Pressable>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
  },
  header: {
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 20,
  },
  logo: {
    width: 100,
    height: 50,
  },
  scrollView: {
    flex: 1,
    marginTop: 10,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 10,
    backgroundColor: '#F5F5F5',
  },
  diseaseImage: {
    width: 50,
    height: 50,
  },
  textContainer: {
    flex: 1,
    marginLeft: 15,
  },
  dateText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333',
  },
  diseaseText: {
    fontSize: 14,
    color: '#666666',
  },
  icon: {
    marginLeft: 10,
    color: 'red',
    fontSize: 16,
    fontWeight: 'bold'
  },
});

export default History;
