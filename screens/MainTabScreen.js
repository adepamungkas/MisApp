import React from 'react';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/Ionicons';

import BannerScreen from './BannerScreen';
import DetailsScreen from './DetailsScreen';
import ExploreScreen from './ExploreScreen';
import HomeScreen from './HomeScreen';
import ListMaterialScreen from './ListMaterialScreen';
import InputMaterialScreen from './InputMaterialScreen';
import ProfileScreen from './ProfileScreen';
import SettingScreen from './SettingScreen';
import SupportScreen from './SupportScreen';


const AccountStack = createStackNavigator();
const ExploreStack = createStackNavigator();
const HomeStack = createStackNavigator();
const NotificationStack = createStackNavigator();
const SettingStack = createStackNavigator();
const SupportStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
  <Tab.Navigator
    initialRouteName="Home"
    activeColor="#fff"
  >
    <Tab.Screen
      name="Home"
      component={HomeStackScreen}
      options={{
        tabBarLabel: 'Home',
        tabBarColor: '#009387',
        tabBarIcon: ({ color }) => (
          <Icon name="ios-home" color={color} size={26} />
        ),
      }}
    />


    <Tab.Screen
      name="Explore"
      component={ExploreStackScreen}
      options={{
        tabBarLabel: 'Explore',
        tabBarColor: '#009387',
        tabBarIcon: ({ color }) => (
          <Icon name="ios-aperture" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Notifications"
      component={NotificationStackScreen}
      options={{
        tabBarLabel: 'Motification',
        tabBarColor: '#009387',
        tabBarIcon: ({ color }) => (
          <Icon name="ios-notifications" color={color} size={26} />
        ),
      }}
    />

    <Tab.Screen
      name="Profile"
      component={AccountStackScreen}
      options={{
        tabBarLabel: 'Account',
        tabBarColor: '#009387',
        tabBarIcon: ({ color }) => (
          <Icon name="ios-person" color={color} size={26} />
        ),
      }}
    />

    
  </Tab.Navigator>
);

export default MainTabScreen;

export const HomeStackScreen = ({ navigation }) => (
  <HomeStack.Navigator screenOptions={{
    headerStyle: {
      backgroundColor: '#009387',
    },
    headerTintColor: '#fff',
    initialRouteName: "Home",
    headerTitleStyle: {
      fontWeight: 'bold'
    }
  }}>
    <HomeStack.Screen name="Home" component={HomeScreen} options={{
      title: 'Home',
      headerLeft: () => (
        <Icon.Button name="ios-menu" size={25} backgroundColor="#009387" onPress={() => navigation.openDrawer()}></Icon.Button>
      )
    }} />

    <HomeStack.Screen name="Banner" component={BannerScreen} options={{
      title: 'Banner',
      headerLeft: () => (
        <Icon.Button name="ios-menu" size={25} backgroundColor="#009387" onPress={() => navigation.openDrawer()}></Icon.Button>
      )
    }} />
    <HomeStack.Screen name="ListMaterial" component={ListMaterialScreen} options={{
      title: 'List Material',
      headerLeft: () => (
        <Icon.Button name="ios-menu" size={25} backgroundColor="#009387" onPress={() => navigation.openDrawer()}></Icon.Button>
      )
    }} />

<HomeStack.Screen name="InputMaterial" component={InputMaterialScreen} options={{
      title: 'Input Material',
      headerLeft: () => (
        <Icon.Button name="ios-menu" size={25} backgroundColor="#009387" onPress={() => navigation.openDrawer()}></Icon.Button>
      )
    }} />
  </HomeStack.Navigator>
);

export const NotificationStackScreen = ({ navigation }) => (
  <NotificationStack.Navigator screenOptions={{
    initialRouteName: "Details",
    headerStyle: {
      backgroundColor: '#009387',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold'
    }
  }}>
    <NotificationStack.Screen name="Details" component={DetailsScreen} options={{
      headerLeft: () => (
        <Icon.Button name="ios-menu" size={25} backgroundColor="#009387" onPress={() => navigation.openDrawer()}></Icon.Button>
      )
    }} />
  </NotificationStack.Navigator>
);

export const AccountStackScreen = ({ navigation }) => (
  <AccountStack.Navigator screenOptions={{
    initialRouteName: "Profile",
    headerStyle: {
      backgroundColor: '#009387',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold'
    }
  }}>
    <AccountStack.Screen name="Profile" component={ProfileScreen} options={{
      headerLeft: () => (
        <Icon.Button name="ios-menu" size={25} backgroundColor="#009387" onPress={() => navigation.openDrawer()}></Icon.Button>
      )
    }} />

    <AccountStack.Screen name="Setting" component={SettingScreen} options={{
      headerLeft: () => (
        <Icon.Button name="ios-menu" size={25} backgroundColor="#009387" onPress={() => navigation.openDrawer()}></Icon.Button>
      )
    }} />

    <AccountStack.Screen name="Support" component={SupportScreen} options={{
      headerLeft: () => (
        <Icon.Button name="ios-menu" size={25} backgroundColor="#009387" onPress={() => navigation.openDrawer()}></Icon.Button>
      )
    }} />
  </AccountStack.Navigator>
);


export const SupportStackScreen = ({ navigation }) => (
  <SupportStack.Navigator screenOptions={{
    initialRouteName: "Support",
    headerStyle: {
      backgroundColor: '#009387',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold'
    }
  }}>

    <SupportStack.Screen name="Support" component={SupportScreen} options={{
      headerLeft: () => (
        <Icon.Button name="ios-menu" size={25} backgroundColor="#009387" onPress={() => navigation.openDrawer()}></Icon.Button>
      )
    }} />
  </SupportStack.Navigator>
);


export const ExploreStackScreen = ({ navigation }) => (
  <ExploreStack.Navigator screenOptions={{
    headerStyle: {
      backgroundColor: '#009387',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold'
    }
  }}>
    <ExploreStack.Screen name="Explore" component={ExploreScreen} options={{
      headerLeft: () => (
        <Icon.Button name="ios-menu" size={25} backgroundColor="#009387" onPress={() => navigation.openDrawer()}></Icon.Button>
      )
    }} />
  </ExploreStack.Navigator>
);





