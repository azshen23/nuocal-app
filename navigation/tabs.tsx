import { StyleSheet, Text, View, Platform } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import homeStack from "./homeStack";
import profileStack from "./profileStack";
import exploreStack from "./exploreStack";
import CalendarStack from "./calendarStack";
import Post from "../screens/Main/Post";
import { NavigationContainer } from "@react-navigation/native";
import {
  MaterialIcons,
  Entypo,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { create } from "twrnc";
const tw = create(require(`../tailwind.config.js`));

const Tab = createBottomTabNavigator();

const tabBarOptions = {
  tabBarShowLabel: false,
  headerShown: false,
  tabBarStyle: {
    height: Platform.OS == "ios" ? 80 : 70,
    backgroundColor: "#F3F0E7",
  },
};

const tabIconSize = 36;
const tabIconColorActive = "#354B61";
const tabIconColorInactive = "#677B9C";
const Placeholder = () => <View />;

const Tabs = ({ navigation }: any) => {
  return (
    <Tab.Navigator screenOptions={tabBarOptions}>
      <Tab.Screen
        name="homeStack"
        component={homeStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={tw.style("items-center justify-center top-1 ios:top-3")}
            >
              <MaterialIcons
                style={tw.style("")}
                name="home"
                size={38}
                color={focused ? tabIconColorActive : "#677B9C"}
              />
              <Entypo
                style={tw.style("-mt-2")}
                name="dot-single"
                size={24}
                color={focused ? tabIconColorActive : "transparent"}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="exploreStack"
        component={exploreStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={tw.style("items-center justify-center top-1 ios:top-3")}
            >
              <MaterialIcons
                style={tw.style("")}
                name="language"
                size={38}
                color={focused ? tabIconColorActive : "#677B9C"}
              />
              <Entypo
                style={tw.style("-mt-2")}
                name="dot-single"
                size={24}
                color={focused ? tabIconColorActive : "transparent"}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="postStack"
        component={Placeholder}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={tw.style(
                "items-center bg-augustmoon justify-center -top-5 ios:-top-2 border border-iconinactive rounded-lg w-16 h-16"
              )}
            >
              <MaterialCommunityIcons
                style={tw.style("")}
                name="lead-pencil"
                size={38}
                color={focused ? tabIconColorActive : "#677B9C"}
              />
            </View>
          ),
        }}
        listeners={() => ({
          tabPress: (e) => {
            e.preventDefault();
            navigation.navigate("WritePost");
          },
        })}
      />
      <Tab.Screen
        name="CalendarStack"
        component={CalendarStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={tw.style("items-center justify-center top-1 ios:top-3")}
            >
              <MaterialIcons
                style={tw.style("")}
                name="calendar-today"
                size={33}
                color={focused ? tabIconColorActive : "#677B9C"}
              />
              <Entypo
                style={tw.style("-mt-1.5")}
                name="dot-single"
                size={24}
                color={focused ? tabIconColorActive : "transparent"}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="ProfileStack"
        component={profileStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={tw.style("items-center justify-center top-1 ios:top-3")}
            >
              <MaterialIcons
                style={tw.style("")}
                name="account-circle"
                size={37}
                color={focused ? tabIconColorActive : "#677B9C"}
              />
              <Entypo
                style={tw.style("-mt-2")}
                name="dot-single"
                size={24}
                color={focused ? tabIconColorActive : "transparent"}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;

const styles = StyleSheet.create({
  tabContainer: {},
  tab: {},
});
