import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

import Flex from "./Flex";
import Todo from "./Todo";
import Cart from "./Cart";

const Tab = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "blue",
        tabBarInactiveTintColor: "grey",
      }}
    >
      <Tab.Screen
        name="Home"
        component={Flex}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Entypo name="home" size={24} color="grey" />
          ),
        }}
      ></Tab.Screen>
      <Tab.Screen
        name="Todo"
        component={Todo}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="playlist-add" size={24} color="black" />
          ),
        }}
      ></Tab.Screen>
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="cart-variant"
              size={24}
              color="black"
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tab;

const styles = StyleSheet.create({});
