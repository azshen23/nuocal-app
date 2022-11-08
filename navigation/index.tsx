import React from "react";
import Tabs from "./tabs";
import Post from "../screens/Main/Post";
import { View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Entry from "../screens/Auth/Entry";
import CreateAccount from "../screens/Auth/CreateAccount";
import Login from "../screens/Auth/Login";
import EmailVerification from "../screens/Auth/EmailVerification";

const RootStack = createStackNavigator();
const AuthStack = createStackNavigator();
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

const AuthNavigator = () => {
  const globalScreenOption = {
    title: "",
    headerTransparent: true,
  };
  const startScreenOption = {
    headerShown: false,
  };
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        options={startScreenOption}
        name="EntryScreen"
        component={Entry}
      />
      <AuthStack.Screen
        options={globalScreenOption}
        name="LoginScreen"
        component={Login}
      />
      <AuthStack.Screen
        options={globalScreenOption}
        name="CreateAccountScreen"
        component={CreateAccount}
      />
      <AuthStack.Screen
        options={globalScreenOption}
        name="EmailVerification"
        component={EmailVerification}
      />
    </AuthStack.Navigator>
  );
};

export default function RootNavigation() {
  const isAuth = false;

  return isAuth ? (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  ) : (
    <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>
  );
}
