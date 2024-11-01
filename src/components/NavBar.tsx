import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Main from '../app/main/page';
import Community from '../app/community/page';
import { Chat, Home, My } from '../assets';
import { color } from '../styles/color';
import MyPage from '../app/mypage/page';

const Tab = createBottomTabNavigator();

export const NavBar = () => {
  return (
    <Tab.Navigator
      initialRouteName="Main"
      screenOptions={{
        tabBarActiveTintColor: `${color.black}`,
        tabBarInactiveTintColor: `${color.gray400}`,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 64,
        },
      }}>
      <Tab.Screen
        name="Main"
        component={Main}
        options={{
          headerShown: false,

          tabBarIcon: ({ color }) => (
            <Home size={32} color={color} fill={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Community"
        component={Community}
        options={{
          headerShown: false,

          tabBarIcon: ({ color }) => (
            <Chat size={32} color={color} fill={color} />
          ),
        }}
      />
      <Tab.Screen
        name="My"
        component={MyPage}
        options={{
          headerShown: false,

          tabBarIcon: ({ color }) => <My size={32} color={color} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default NavBar;
