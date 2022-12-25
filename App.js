import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconIonicons from 'react-native-vector-icons/Ionicons';

import Home from "./pages/Home"
import Explore from "./pages/Explore"
import Library from "./pages/Library"
import User from "./pages/User"

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{headerShown:false,tabBarShowLabel: false}}>
        <Tab.Screen name="Home" component={Home}  options={{
          tabBarIcon: ({ color,focused}) => (
            <IconIonicons name={focused?"home":"home-outline"} color={color} size={20} />
          ),
          
        }} />
        <Tab.Screen name="Explore" component={Explore} options={{
          tabBarIcon: ({ color,focused}) => (
            <IconIonicons name={focused?"search":"search-outline"} color={color} size={20} />
          ),

        }} />
        <Tab.Screen name="Library" component={Library}  options={{
          tabBarIcon: ({ color,focused}) => (
            <IconIonicons name={focused?"bookmarks-sharp":"bookmarks-outline"} color={color} size={20} />
          ),
        }} />
        <Tab.Screen name="User" component={User}  options={{
          tabBarIcon: ({ color,focused}) => (
            <View style={{borderRadius:50,justifyContent:"center",alignItems:"center",backgroundColor:"green",width:25,height:25}}>
              <Text style={{color:"white"}}>M</Text>
            </View>
          ),
        }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;