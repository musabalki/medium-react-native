import React from "react"
import { SafeAreaView, View, Text, FlatList, Image, StyleSheet } from "react-native"

const App = () => {
  const data = [
    {
      "id": 1,
      "author": "Lorem Ipsum",
      "author_img": "",
      "title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      "date": "Nov 17",
      "time": "5 min read",
    },
    {
      "id": 2,
      "author": "Lorem Ipsum",
      "author_img": "",
      "title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      "date": "Nov 17",
      "time": "5 min read",
    },
    {
      "id": 3,
      "author": "Lorem Ipsum",
      "author_img": "",
      "title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      "date": "Nov 17",
      "time": "5 min read",
    },
    {
      "id": 4,
      "author": "Lorem Ipsum",
      "author_img": "",
      "title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      "date": "Nov 17",
      "time": "5 min read",
    },
    {
      "id": 5,
      "author": "Lorem Ipsum",
      "author_img": "",
      "title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      "date": "Nov 17",
      "time": "5 min read",
    },
  ]
  const renderItem = ({ item }) => {
    return (
      <View style={{ paddingTop: 20, paddingBottom: 20, paddingLeft: 20, paddingRight: 20, borderBottomWidth: 1, borderColor: '#EAEAEA' }}>
        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
          <Image source={require("./img/author.jpg")} style={{ width: 32, height: 32 }} />
          <Text style={styles.author}>{item.author}</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <View style={{ flex: 3 }}>
            <Text style={styles.item_title}>
              {item.title}
            </Text>
            <View style={{flex:1,flexDirection:'row',alignItems:'center'}}>
              <Text style={styles.item_date}>
                {item.date} 
              </Text>
              <Text style={{marginLeft:3,marginRight:3,flexDirection:'row',alignItems:'center'}}>
                .
              </Text>
              <Text style={styles.item_date}>
                {item.time}  
              </Text>
            </View>
          </View>
          <Image source={require("./img/img2.png")} style={{ flex: 1, height: 60, borderRadius: 5 }} />
        </View>
        <View>
          <Text style={{ fontSize: 12, paddingTop: 6 }}>Selected for you</Text>
        </View>
      </View>
    )
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ paddingTop: 20, paddingBottom: 20, paddingLeft: 20, paddingRight: 20, borderBottomWidth: 1, borderColor: '#EAEAEA' }}>
        <Text style={styles.text}>
          Home
        </Text>
      </View>
      <FlatList data={data} renderItem={renderItem} keyExtractor={item => item.id} />
    </SafeAreaView>
  )
}

export default App;

const bold = 'Heebo-Bold';
const medium = 'Heebo-Medium';
const regular = 'Heebo-Regular';

const styles = StyleSheet.create({
  text: {
    fontFamily: bold,
    color: '#000',
    fontSize: 24
  },
  author: {
    paddingLeft: 8, color: '#000'
  },
  item_title: {
    color: '#000',
    fontSize: 18,
    fontFamily: bold
  },
  item_date: {
    paddingTop: 6,
    fontFamily: regular,
    justifyContent: 'center',
    alignItems: 'center',

  },
  bold: {
    fontFamily: 'Heebo-Bold',
  },
})