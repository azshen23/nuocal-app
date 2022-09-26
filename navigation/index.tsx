import React from "react";
import Tabs from "./tabs";
import Post from "../screens/Main/Post";
import { View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
const RootStack = createStackNavigator();
const RootNavigator = () => {
  return (
    <RootStack.Navigator
      screenOptions={{
        headerShown: false,
        presentation: "modal",
        animationEnabled: false,
      }}
    >
      <RootStack.Screen name="BottomTabNavigatorScreen" component={Tabs} />
      <RootStack.Screen
        name="WritePost"
        component={Post}
        options={{ animationEnabled: true }}
      />
    </RootStack.Navigator>
  );
};

export default function RootNavigation() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}
