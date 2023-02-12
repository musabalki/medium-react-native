import { SafeAreaView, View, Text, StyleSheet, TextInput, FlatList, Dimensions, ScrollView,TouchableOpacity } from "react-native"
import IconIonicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import React, { useState } from "react"
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconEntypo from 'react-native-vector-icons/Entypo';

const category = [
    { id: 1, name: 'Stories' },
    { id: 2, name: 'Lists' },
    { id: 3, name: 'About' },
  ]


const Library = () => {
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
      const [activeItem, setActiveItem] = useState(1)
    return (
        <SafeAreaView  style={{ flex: 1, position: 'relative',backgroundColor:"#fff" }}>
           <View style={{flexDirection:'row',alignContent:'center',margin:15}}>
                <View style={{width:50,height:50,borderRadius:100,justifyContent:'center',backgroundColor:'green'}}>
                    <Text style={{color:'white',textAlign:'center',fontSize:30}}>M</Text>
                </View>
                <View style={{alignItems:'center', justifyContent:'center',paddingLeft:16}}>
                    <Text style={styles.text}>
                        MB
                    </Text>
                </View>
           </View>
           <View style={{flexDirection:'row',padding:10}}>
              <TouchableOpacity style={{margin:2,flex:1,backgroundColor:'black',borderRadius:50,paddingTop:5,border:0,paddingBottom:5}}>
                <Text style={{color:'white',textAlign:'center'}}>View stats</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{margin:2,flex:1,backgroundColor:'white',borderRadius:50,paddingTop:5,borderWidth:1,paddingBottom:5}}>
                <Text style={{color:'black',textAlign:'center'}}>Edit your profile</Text>
              </TouchableOpacity>
           </View>
           <View style={{ borderBottomWidth: 1, borderColor: '#EAEAEA',  }}>
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
            <View style={{padding:20}}>
              <Text style={{fontSize:20,textAlign:'center'}}>
                You don't have any public posts.
              </Text>
            </View>
        </SafeAreaView>
    )
}
export default Library;


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