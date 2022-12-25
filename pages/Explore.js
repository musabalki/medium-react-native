import { SafeAreaView, View, Text,StyleSheet, TextInput, FlatList } from "react-native"
import IconIonicons from 'react-native-vector-icons/Ionicons';

const Explore = () => {
    return (
        <SafeAreaView style={{ flex: 1, position: 'relative', backgroundColor: "#fff" }}>
            <View style={{ paddingTop: 20, paddingBottom: 20, paddingLeft: 20, paddingRight: 20, }}>
                <Text style={styles.text}>
                    Explore
                </Text>
                <View style={{marginTop:15,backgroundColor:"#0000000f",borderRadius:5,padding:0,flexDirection:"row",alignItems:"center",}}>
                    <IconIonicons name="search" size={22} style={{paddingLeft:10}}/>
                    <TextInput placeholder="Search Medium" style={{paddingLeft:10,margin:0,height:40}}/>
                </View>
                <FlatList showsHorizontalScrollIndicator={false} style={{marginBottom:20,marginTop:30}} horizontal data={[{id:1,name:"Data Science"},{id:2,name:"Self Improvement"},{id:3,name:"Writing"}]} renderItem={({item})=><View style={{backgroundColor:"#0000000f",paddingLeft:15,paddingRight:15,paddingTop:5,paddingBottom:5,borderRadius:15,marginRight:10}}><Text>{item.name}</Text></View>} />
            </View>
        </SafeAreaView>
    )
}
export default Explore;

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