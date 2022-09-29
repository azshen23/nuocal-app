import { View, Text, SafeAreaView, Pressable } from "react-native";
import React from "react";
import { create } from "twrnc";
const tw = create(require(`../../tailwind.config.js`));

const Profile = ({ navigation }: any) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: "sereba",
      headerStyle: {
        backgroundColor: "#F3F0E7",
        shadowColor: "transparent",
      },
      headerTitleAlign: "center",
      headerTintColor: "#4A6173",
      headerTitleStyle: {
        fontWeight: "600",
        fontSize: 24,
      },
    });
  });
  return (
    <SafeAreaView style={tw.style("flex-1 bg-augustmoon")}>
      <View style={tw.style("items-center ml-26 mr-26")}>
        <View
          style={tw.style(
            " mt-15 rounded-full h-30 w-30 border border-notblack bg-white"
          )}
        ></View>
        <View style={tw.style("flex-row justify-between w-full mt-10")}>
          <View style={tw.style("items-center")}>
            <Text style={tw.style("text-xl font-bold text-notblack")}>0</Text>
            <Text style={tw.style("text-lg text-notblack")}>streak</Text>
          </View>
          <View style={tw.style("items-center")}>
            <Text style={tw.style("text-xl font-bold text-notblack")}>0</Text>
            <Text style={tw.style("text-lg text-notblack")}>entries</Text>
          </View>
        </View>
        <View>
          <Text style={tw.style("text-xl w-full text-notblack mt-10")}>
            hi my name is serena :)
          </Text>
        </View>
        <Pressable style={tw.style("mt-10")}>
          <View
            style={tw.style(
              "rounded-2xl border border-notblack w-36 h-12 items-center justify-center bg-white"
            )}
          >
            <Text style={tw.style("text-xl font-bold text-notblack")}>
              edit profile
            </Text>
          </View>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default Profile;
