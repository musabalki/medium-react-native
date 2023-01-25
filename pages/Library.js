import { SafeAreaView, View, Text, StyleSheet, TextInput, FlatList, Dimensions, ScrollView,TouchableOpacity } from "react-native"
import IconIonicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import React, { useState } from "react"
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconEntypo from 'react-native-vector-icons/Entypo';

const category = [
    { id: 1, name: 'Saved' },
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
        <SafeAreaView>
           <View style={{flexDirection:'row',alignItems:'center', justifyContent:'space-between', paddingTop: 20, paddingBottom: 20, paddingLeft: 20, paddingRight: 20, }}>
                <Text style={styles.text}>
                Your library
                </Text>
                <Text style={{backgroundColor:'green',color:'white',borderRadius:50,paddingLeft:15,paddingRight:15,paddingTop:6,paddingBottom:6}}>
                    New List
                </Text>
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
            <View style={{backgroundColor:'#e6e6e6',marginLeft:20,marginRight:20,marginTop:20,borderRadius:5,padding:30}}>
              <Text style={{fontWeight:'900',fontSize:20,color:'black'}}>Reading List</Text>
              <Text style={{fontWeight:'400',}}>Reading List</Text>
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