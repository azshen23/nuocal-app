import { View, Text } from "react-native";
import React from "react";
import Profile from "../screens/Main/Profile";
import { createStackNavigator } from "@react-navigation/stack";

export default function ProfileStack() {
  const Stack = createStackNavigator();
  const globalScreenOptions = {
    headerShown: true,
  };
  return (
    <Stack.Navigator screenOptions={globalScreenOptions}>
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
}
