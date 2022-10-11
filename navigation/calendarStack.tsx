import { View, Text } from "react-native";
import Calendar from "../screens/Main/Calendar";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

export default function CalendarStack() {
  const Stack = createStackNavigator();
  const globalScreenOptions = {
    headerShown: true,
  };
  return (
    <Stack.Navigator screenOptions={globalScreenOptions}>
      <Stack.Screen name="Calendar" component={Calendar} />
    </Stack.Navigator>
  );
}
