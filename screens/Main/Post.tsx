import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Pressable,
  TextInput,
  Switch,
  Alert,
} from "react-native";
import FilterButtons from "../../components/filterButtons";
import React from "react";
import { create } from "twrnc";
const tw = create(require(`../../tailwind.config.js`));
var emotions = [0, 1, 2, 3, 4];
export default function Post({ navigation }: any) {
  const [entryTitle, setEntryTitle] = React.useState("");
  const [entryContent, setEntryContent] = React.useState("");
  const [isPublic, setisPublic] = React.useState(false);
  const toggleSwitch = () => setisPublic((previousState) => !previousState);
  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: "write",
      headerShown: true,
      headerStyle: {
        backgroundColor: "#F3F0E7",
        shadowColor: "#4A6173",
      },
      headerTitleAlign: "center",
      headerTintColor: "#4A6173",
      headerTitleStyle: {
        fontWeight: "600",
        fontSize: 24,
      },
      presentation: "modal",
      headerLeft: () => {
        return null;
      },
    });
  });
  //cancel the post
  const cancelPost = () => {
    if (entryTitle != "" || entryContent != "") {
      return Alert.alert("Are you sure you want to cancel?", "", [
        {
          text: "Keep Editing",
        },
        {
          text: "Cancel",
          onPress: () => {
            navigation.goBack();
          },
        },
      ]);
    } else {
      navigation.goBack();
    }
  };

  //post the post
  const writePost = () => {};

  return (
    <SafeAreaView style={tw.style("bg-augustmoon flex-1")}>
      <ScrollView>
        <View style={tw.style("pl-5 pb-50 border-iconinactive border-b")}>
          <View style={tw.style("flex-row justify-between h-12 pr-5 mt-3")}>
            <Pressable onPress={() => cancelPost()}>
              <View style={tw.style("h-full justify-center items-center")}>
                <Text style={tw.style("text-iconinactive  text-lg")}>
                  cancel
                </Text>
              </View>
            </Pressable>
            <Pressable>
              <View
                style={tw.style(
                  "rounded-3xl bg-header w-20 h-full justify-center items-center"
                )}
              >
                <Text style={tw.style("text-white font-bold text-xl")}>
                  post
                </Text>
              </View>
            </Pressable>
          </View>
          <Text style={tw.style("text-header text-xl font-medium pb-4")}>
            how are you feeling?
          </Text>
          <ScrollView
            style={tw.style("")}
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            {emotions.map((post) => {
              return <FilterButtons key={post} emotion={post} />;
            })}
          </ScrollView>
          <View style={tw.style("flex-row h-15 mt-5")}>
            <View
              style={tw.style("rounded-full h-full w-15 border bg-sad")}
            ></View>
            <View style={tw.style("h-full justify-center ml-6")}>
              <TextInput
                onChangeText={setEntryTitle}
                textContentType={"none"}
                style={tw.style("font-medium text-header text-xl")}
                placeholderTextColor="#425D78"
                placeholder="title"
              />
            </View>
          </View>
          <View style={tw.style("mt-5")}>
            <TextInput
              onChangeText={setEntryContent}
              style={tw.style("text-header text-lg")}
              placeholderTextColor="#425D78"
              placeholder="write your text here..."
              multiline={true}
            />
          </View>
        </View>
        <View>
          <View style={tw.style("flex-row justify-between h-20 pl-5 pr-5")}>
            <View style={tw.style("h-full justify-center")}>
              <Text style={tw.style("text-header text-xl font-medium pb-4")}>
                make public?
              </Text>
            </View>
            <View style={tw.style("h-full  pt-2 ios:pt-5")}>
              <Switch
                style={tw.style("")}
                trackColor={{ false: "#425D78", true: "#677B9C" }}
                thumbColor={isPublic ? "#fff" : "#fff"}
                ios_backgroundColor="#425D78"
                onValueChange={toggleSwitch}
                value={isPublic}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
