import { SafeAreaView, View, Text, StyleSheet, TextInput, FlatList, Dimensions, ScrollView } from "react-native"
import IconIonicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Explore = () => {
  return (
    <SafeAreaView style={{ flex: 1, position: 'relative', backgroundColor: "#fff" }}>
      <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{ paddingTop: 20, paddingBottom: 20, paddingLeft: 20, paddingRight: 20, }}>
        <Text style={styles.text}>
          Explore
        </Text>
        <View style={{ marginTop: 15, backgroundColor: "#0000000f", borderRadius: 5, padding: 0, flexDirection: "row", alignItems: "center", }}>
          <IconIonicons name="search" size={22} style={{ paddingLeft: 10 }} />
          <TextInput placeholder="Search Medium" style={{ paddingLeft: 10, margin: 0, height: 40 }} />
        </View>
        <FlatList showsHorizontalScrollIndicator={false} style={{ marginBottom: 20, marginTop: 30 }} horizontal data={[{ id: 1, name: "Data Science" }, { id: 2, name: "Self Improvement" }, { id: 3, name: "Writing" }]} renderItem={({ item }) => <View style={{ backgroundColor: "#0000000f", paddingLeft: 15, paddingRight: 15, paddingTop: 5, paddingBottom: 5, borderRadius: 15, marginRight: 10 }}><Text>{item.name}</Text></View>} />
      </View>
      <View style={{ paddingBottom: 20, paddingLeft: 20, paddingRight: 20, }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <MaterialCommunityIcons name="file-document-multiple-outline" size={22} style={{ paddingLeft: 10 }} />
          <Text style={{ paddingLeft: 10 }}>TRENDING ON MEDIUM</Text>
        </View>
      </View>
      <View style={{ height: 1, width: Dimensions.get('window').width, backgroundColor: '#0000000f' }}></View>
      <View style={{ flexDirection: 'row', paddingBottom: 20, paddingLeft: 20, paddingRight: 20, marginTop: 28 }}>
        <View><Text style={{ fontSize: 34, fontWeight: '900', color: '#0000000f' }}>01</Text></View>
        <View style={{ paddingLeft: 20 }}>
          <Text>Lorem Ipsum</Text>
          <Text style={{ fontSize: 20, fontWeight: '900', color: 'black', marginTop: 3 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 3 }}>
            <Text >
              20 hours ago
            </Text>
            <Text style={{ marginLeft: 3, marginRight: 3, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>.</Text>
            <Text >
              4 min read
            </Text>
          </View>
        </View>
      </View>
      <View style={{ flexDirection: 'row', paddingBottom: 20, paddingLeft: 20, paddingRight: 20, }}>
        <View><Text style={{ fontSize: 34, fontWeight: '900', color: '#0000000f' }}>02</Text></View>
        <View style={{ paddingLeft: 20 }}>
          <Text>Lorem Ipsum</Text>
          <Text style={{ fontSize: 20, fontWeight: '900', color: 'black', marginTop: 3 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 3 }}>
            <Text >
              20 hours ago
            </Text>
            <Text style={{ marginLeft: 3, marginRight: 3, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>.</Text>
            <Text >
              4 min read
            </Text>
          </View>
        </View>
      </View>
      <View style={{ flexDirection: 'row', paddingBottom: 20, paddingLeft: 20, paddingRight: 20, }}>
        <View><Text style={{ fontSize: 34, fontWeight: '900', color: '#0000000f' }}>03</Text></View>
        <View style={{ paddingLeft: 20 }}>
          <Text>Lorem Ipsum</Text>
          <Text style={{ fontSize: 20, fontWeight: '900', color: 'black', marginTop: 3 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 3 }}>
            <Text >
              20 hours ago
            </Text>
            <Text style={{ marginLeft: 3, marginRight: 3, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>.</Text>
            <Text >
              4 min read
            </Text>
          </View>
        </View>
      </View>
      <View style={{ flexDirection: 'row', paddingBottom: 20, paddingLeft: 20, paddingRight: 20, }}>
        <View><Text style={{ fontSize: 34, fontWeight: '900', color: '#0000000f' }}>04</Text></View>
        <View style={{ paddingLeft: 20 }}>
          <Text>Lorem Ipsum</Text>
          <Text style={{ fontSize: 20, fontWeight: '900', color: 'black', marginTop: 3 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 3 }}>
            <Text >
              20 hours ago
            </Text>
            <Text style={{ marginLeft: 3, marginRight: 3, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>.</Text>
            <Text >
              4 min read
            </Text>
          </View>
        </View>
      </View>
      </ScrollView>
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