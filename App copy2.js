import React, { useState,useRef } from "react"
import {Animated,Dimensions, SafeAreaView, View, Text, FlatList, Image, StyleSheet, TouchableOpacity, StatusBar, ScrollView } from "react-native"
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconIonicons from 'react-native-vector-icons/Ionicons';

import { useSelector, useDispatch } from "react-redux";
const defaultWidth=Dimensions.get("window").width;

const Conversas = ({item})=>{
  return (
    <View style={{backgroundColor:"red",width:defaultWidth, flex: 1, flexDirection: 'row', alignItems: 'center' }}>
      <Image source={require("./img/author.jpg")} style={{ width: 32, height: 32 }} />
        <Text style={styles.author}>{item.author}</Text>
    </View>
  )
}

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
  const category = [
    { id: 0, name: '+' },
    { id: 1, name: 'For You' },
    { id: 2, name: 'Following' },
    { id: 3, name: 'Design' },
    { id: 4, name: 'Technology' },
    { id: 5, name: 'Technology' },
    { id: 6, name: 'Technology' },
  ]

  const categoryItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => filterData(item.id) } style={[{ marginLeft: 12, marginRight: 12, justifyContent: 'space-between' }]} >
        <View>
          <Text>

      {item.name}
          </Text>
        </View>
      </TouchableOpacity>

    )
  }

  const [initialData, setInitialData] = useState(data);
  const x = useRef(new Animated.Value(0)).current;
  return (
    <SafeAreaView style={{ flex: 1, position: 'relative',backgroundColor:"gray" }}>
      <StatusBar barStyle="light-content" />
      {/* <View style={{flexDirection:"row",backgroundColor:"black"}}>
        <Text style={{flex:1,color:"white",textAlign:"center",padding:10}}>CONVERSAS</Text>
        <Text style={{flex:1,color:"white",textAlign:"center",padding:10}}>STATUS</Text>
        <Text style={{flex:1,color:"white",textAlign:"center",padding:10}}>CHAMADAS</Text>
      </View> */}
      <Animated.ScrollView  horizontal style={{flexDirection:"row"}} >
      <FlatList data={category} horizontal renderItem={categoryItem} keyExtractor={item => item.id} />
      </Animated.ScrollView>
      <Animated.View 
        style={{backgroundColor:"#fff",height:4,width:defaultWidth/3,borderRadius:2,marginTop:-4,transform:[
          {
            translateX:x.interpolate({
              inputRange:[0,defaultWidth],
              outputRange:[0,defaultWidth/3]
            })
          },
        ]}}
      />
      <Animated.ScrollView scrollEventThrottle={16} onScroll={Animated.event([{nativeEvent:{contentOffset:{x}}}],{useNativeDriver:true})} horizontal showsHorizontalScrollIndicator={false} pagingEnabled={true}>
        <FlatList data={initialData} renderItem={Conversas} keyExtractor={item => item.id} />
        <FlatList data={initialData} renderItem={Conversas} keyExtractor={item => item.id} />
        <FlatList data={initialData} renderItem={Conversas} keyExtractor={item => item.id} />
      </Animated.ScrollView>
    </SafeAreaView>
  )
}

export default App;

const bold = 'Heebo-Bold';
const medium = 'Heebo-Medium';
const regular = 'Heebo-Regular';

const styles = StyleSheet.create({
  activeItem: {
    borderColor: 'black',
    borderBottomWidth: 2,
    color: 'black'
  },
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