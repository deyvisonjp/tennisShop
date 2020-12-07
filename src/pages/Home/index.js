import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'

import Shoes from '../../component/Shoes'

export default function Home() {

  const navigarion = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../../assets/banner.png')}
          style={styles.image}
        />

        <View style={styles.textContainer}>
          <Text style={styles.text}>TÊNIS</Text>
          <Text style={[styles.text, { color: '#CECECF' }]}> . . . </Text>
          <Text style={[styles.text, { color: '#CECECF' }]}>MASCULINO</Text>
          <TouchableOpacity style={{ position: 'absolute', right: 0, alignSelf: 'center' }}>
            <MaterialIcons
              name="filter-list"
              size={24}
              color="#000"
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.line} />

    {/* ------------ VITRINE ------------ */}
      <ScrollView>
        <Text style={styles.text}>LANÇAMENTOS</Text>
        
        <View style={styles.shoes}>
          <Shoes
            onClick={() => navigarion.navigate('Detail') }
            img={require('../../assets/t1.png')}
            cost="R$155,50"
          >
            Nike Shox 10 - Para Pessoas exigente e devs contratados
          </Shoes>

          <Shoes
            onClick={() => alert("Você clicou!")}
            img={require('../../assets/t2.png')}
            cost="R$210,00"
          >
            Nike Penta EH 5 - Para Pessoas exigente e devs contratados
          </Shoes>
        </View>

        <View style={styles.shoes}>
          <Shoes
            img={require('../../assets/t3.png')}
            cost="R$185,50"
          >
            Tênis Nike Air VaporMax 2020 FK
          </Shoes>

          <Shoes
            img={require('../../assets/t4.png')}
            cost="R$240,00"
          >
            Tênis Nike Air Max Plus
          </Shoes>
        </View>

        <View style={styles.shoes}>
          <Shoes
            img={require('../../assets/t5.png')}
            cost="R$185,00"
          >
            Tênis Nike Shox NZ
          </Shoes>

          <Shoes
            img={require('../../assets/t6.png')}
            cost="R$210,00"
          >
            Tênis Nike Air Force 1 '07 Worldwide
          </Shoes>
        </View>


      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#FFF'
  },
  header: {
    marginBottom: 8,
  },
  image: {
    width: '100%'
  },
  textContainer: {
    flexDirection: 'row',
    marginVertical: '5%',
    marginHorizontal: '5%'
  },
  text: {
    fontFamily: 'JosefinSans_400Regular',
    fontSize: 22,
    marginHorizontal: '1%'
  },
  line: {
    borderBottomColor: '#D8d8d8',
    borderBottomWidth: 2,
  },
  shoes: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
})