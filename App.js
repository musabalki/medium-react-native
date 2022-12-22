import React, { useState } from "react"
import { SafeAreaView, View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from "react-native"
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconIonicons from 'react-native-vector-icons/Ionicons';

import { useSelector,useDispatch } from "react-redux";


const App = () => {
const count = useSelector((state)=>state.counter.value)
console.log(count)
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
  const [initialData,setInitialData] = useState(data);

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
            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
              <Text style={styles.item_date}>
                {item.date}
              </Text>
              <Text style={{ marginLeft: 3, marginRight: 3, flexDirection: 'row', alignItems: 'center' }}>
                .
              </Text>
              <Text style={styles.item_date}>
                {item.time}
              </Text>
            </View>
          </View>
          <Image source={require("./img/img2.png")} style={{ flex: 1, height: 60, borderRadius: 5 }} />
        </View>
        <View style={{paddingTop:5, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Text style={{ fontSize: 13, paddingTop: 6 }}>Selected for you</Text>
          <View style={{flexDirection:'row'}}>
            <IconIonicons style={{marginRight:15}} name="bookmark-outline" size={20} />
            <IconAntDesign style={{marginLeft:5,marginRight:15}} name="minuscircleo" size={20} />
            <IconEntypo style={{marginLeft:5}} name="dots-three-vertical" size={20} />
          </View>
        </View>
      </View>
    )
  }
  const category = [
    { id: 0, name: '+' },
    { id: 1, name: 'For You' },
    { id: 2, name: 'Following' },
    { id: 3, name: 'Design' },
    { id: 4, name: 'Technology' },
  ]
  const [activeItem, setActiveItem] = useState(1)
  const filterData = (id) =>{
    setActiveItem(id)
    if(id==2){

      setInitialData([
        {
          "id": 81,
          "author": "Lorem Ipsum 1",
          "author_img": "",
          "title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          "date": "Nov 17",
          "time": "5 min read",
        },
        {
          "id": 92,
          "author": "Lorem Ipsum 2",
          "author_img": "",
          "title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          "date": "Nov 17",
          "time": "5 min read",
        },
      ])
    }
    else{
      setInitialData(data)
    }
  }
  const categoryItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => filterData(item.id) } style={[{ marginLeft: 12, marginRight: 12, justifyContent: 'space-between' }]} >
        <View>
          <Text style={[item.id == activeItem && activeItem != 0 ? styles.activeItem : null, { paddingTop: 10, paddingBottom: 15, fontFamily: medium }]}>

            {item.id == 0 ? <IconAntDesign name="plus" size={20} color="black" /> : item.name}
          </Text>
        </View>
      </TouchableOpacity>

    )
  }
  return (
    <SafeAreaView style={{ flex: 1, position: 'relative' }}>
      <View style={{ paddingTop: 20, paddingBottom: 20, paddingLeft: 20, paddingRight: 20, }}>
        <Text style={styles.text}>
          Home 
        </Text>
        {/* <TouchableOpacity onPress={()=>dispatch(increment())}>
          <Text>
            test
          </Text>
        </TouchableOpacity> */}
      </View>
      <View style={{ borderBottomWidth: 1, borderColor: '#EAEAEA', paddingLeft: 10 }}>
        <FlatList
          // ItemSeparatorComponent={() => {
          //   return (
          //     <View
          //       style={{
          //         height: "100%",
          //         width: 2,
          //       }} />
          //   );
          // }} 
          data={category} horizontal renderItem={categoryItem} keyExtractor={item => item.id} />
      </View>
      <FlatList data={initialData} renderItem={renderItem} keyExtractor={item => item.id} />
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