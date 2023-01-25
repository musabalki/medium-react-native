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
           <View style={{flexDirection:'row',alignContent:'center',margin:15}}>
                <View style={{width:50,height:50,borderRadius:100,justifyContent:'center',backgroundColor:'green'}}>
                    <Text style={{color:'white',textAlign:'center',fontSize:30}}>M</Text>
                </View>
                <View style={{alignItems:'center', justifyContent:'center',paddingLeft:16}}>
                    <Text style={styles.text}>
                        Musa Balkı
                    </Text>
                </View>
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