import {
  View,
  Text,
  SafeAreaView,
  Pressable,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Platform,
  Keyboard,
  Image,
  TextInput,
  StyleSheet,
  Alert,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { create } from "twrnc";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import * as SecureStore from "expo-secure-store";
const tw = create(require(`../../tailwind.config.js`));

interface LoginInfo {
  email: string;
  password: string;
}

const Login = ({ navigation }: any) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const refEmailInput = React.useRef<any>(null);
  const refPasswordInput = React.useRef<any>(null);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: "#F3F0E7",
        shadowColor: "transparent",
      },

      headerLeft: () => (
        <View style={tw.style("pl-5")}>
          <Pressable onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={45} color="#425D78" />
          </Pressable>
        </View>
      ),
    });
  });

  const mutation = useMutation(async (loginInfo: LoginInfo): Promise<any> => {
    return axios
      .post("https://auth.nuocal.com/user/login", loginInfo)
      .then((response) => {
        if (response.data.result.data.status == "SUCCESS") {
          console.log(response.data.result.data);
        } else {
          Alert.alert(response.data.result.data.message, undefined, [
            { text: "OK" },
          ]);
        }
      })
      .catch((error) => {});
  });

  const login = async () => {
    mutation.mutate({
      email: email,
      password: password,
    });
  };

  const focusOnPassword = () => {
    if (refPasswordInput && refPasswordInput.current) {
      refPasswordInput.current.focus();
    }
  };

  return (
    <SafeAreaView style={tw.style("flex-1 bg-augustmoon")}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={tw.style("flex-1")}
      >
        <TouchableWithoutFeedback
          style={tw.style("flex-1")}
          onPress={Keyboard.dismiss}
        >
          <View style={tw.style("flex-1 justify-center items-center")}>
            <View style={tw.style("flex-0.5 -mb-10")}>
              <Image
                style={styles.logo}
                source={require("../../assets/nuocal-logo-1.png")}
              />
            </View>
            <View style={tw.style("w-82 items-center")}>
              <TextInput
                ref={refEmailInput}
                onChangeText={setEmail}
                textContentType={"username"}
                keyboardType={"email-address"}
                underlineColorAndroid={"transparent"}
                placeholderTextColor={"#677B9C"}
                selectionColor={"#677B9C"}
                placeholder="email"
                returnKeyType="next"
                onSubmitEditing={focusOnPassword}
                blurOnSubmit={false}
                autoCapitalize={"none"}
                autoCorrect={false}
                style={tw.style(
                  "w-full h-16 pl-5 text-xl bg-iconinactive rounded-2xl bg-opacity-20 text-iconinactive mb-5 font-medium"
                )}
              />
              <TextInput
                ref={refPasswordInput}
                onChangeText={setPassword}
                secureTextEntry={true}
                textContentType={"password"}
                placeholderTextColor={"#677B9C"}
                selectionColor={"#677B9C"}
                placeholder="password"
                autoComplete="password"
                autoCapitalize={"none"}
                onSubmitEditing={focusOnPassword}
                autoCorrect={false}
                style={tw.style(
                  "w-full h-16 pl-5 text-xl bg-iconinactive rounded-2xl bg-opacity-20 text-iconinactive mb-5 font-medium"
                )}
              />
              <View style={tw.style("w-full")}>
                <Pressable
                  onPress={() => login()}
                  style={tw.style(
                    "w-full h-16 pl-5 bg-header rounded-2xl text-iconinactive mb-5 justify-center items-center"
                  )}
                >
                  <Text style={tw.style("text-xl text-white font-medium")}>
                    login
                  </Text>
                </Pressable>
                <Pressable style={tw.style("items-center")}>
                  <Text style={tw.style("text-xl font-medium text-header")}>
                    forgot password?
                  </Text>
                </Pressable>
              </View>
            </View>

            <View style={{ height: 50 }} />
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  logo: {
    flex: 1,
    width: 300,
    resizeMode: "contain",
  },
});
