import {
  SafeAreaView,
  View,
  Text,
  Image,
  StyleSheet,
  Pressable,
} from "react-native";
import React from "react";
import { create } from "twrnc";
const tw = create(require(`../../tailwind.config.js`));

const Entry = ({ navigation }: any) => {
  return (
    <SafeAreaView style={tw.style("flex-1 bg-augustmoon")}>
      <View style={tw.style("flex-1 w-full items-center")}>
        <View style={tw.style("flex-0.5 pt-50 pb-20")}>
          <Image
            style={styles.logo}
            source={require("../../assets/nuocal-logo-1.png")}
          />
        </View>
        <View style={tw.style("flex-1 items-center")}>
          <View style={tw.style("bg-header h-16 w-80 rounded-2xl")}>
            <Pressable
              style={tw.style("flex-1 items-center justify-center")}
              onPress={() => navigation.navigate("CreateAccountScreen")}
            >
              <Text style={tw.style("text-white font-medium text-xl")}>
                create new account
              </Text>
            </Pressable>
          </View>
          <View style={tw.style(" h-16 w-80 rounded-2xl")}>
            <Pressable
              style={tw.style("flex-1 items-center justify-center")}
              onPress={() => navigation.navigate("LoginScreen")}
            >
              <Text style={tw.style("text-header font-medium text-xl")}>
                login
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  logo: {
    flex: 1,
    width: 300,
    resizeMode: "contain",
  },
});

export default Entry;
