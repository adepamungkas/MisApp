/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

 import React from 'react';
 import { NavigationContainer } from '@react-navigation/native';
 import { createDrawerNavigator } from '@react-navigation/drawer';
 
 import { DrawerContent } from './screens/DrawerContent';
 
 import MainTabScreen from './screens/MainTabScreen';
 import SupportScreen from './screens/SupportScreen';
 import SettingScreen from './screens/SettingScreen';
 import BookmarkScreen from './screens/BookmarkScreen';

 import LoginScreen from './screens/LoginScreen';

 import {AccountStackScreen,SupportStackScreen} from './screens/MainTabScreen';
 const Drawer = createDrawerNavigator();
 
 
 const App = () => {
   return (
     <NavigationContainer>
       <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
         <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
         <Drawer.Screen name="Support" component={SupportStackScreen} />
         <Drawer.Screen name="Account" component={AccountStackScreen} />
         <Drawer.Screen name="BookmarkScreen" component={BookmarkScreen} />
         <Drawer.Screen name="LoginScreen" component={LoginScreen} />
       </Drawer.Navigator>
     </NavigationContainer>
   );
 }
 
 export default App;
 