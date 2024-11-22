import { StyleSheet, Text, View } from "react-native";
import React from "react";
import HomeScreen from "../screens/HomeScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  Entypo,
  MaterialCommunityIcons,
  MaterialIcons,
  AntDesign,
  Ionicons,
} from "@expo/vector-icons";

const AppNavigator = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        iconName="home"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, color }) =>
            focused ? (
              <Entypo name="home" size={35} color={color} />
            ) : (
              <AntDesign name="home" size={30} color={color} />
            ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;

const styles = StyleSheet.create({});
