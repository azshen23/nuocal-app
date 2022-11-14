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
const tw = create(require(`../../tailwind.config.js`));

interface LoginInfo {
  name: string;
  username: string;
  email: string;
  password: string;
}

const CreateAccount = ({ navigation }: any) => {
  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confPassword, setConfPassword] = React.useState("");

  const refEmailInput = React.useRef<any>(null);
  const refPasswordInput = React.useRef<any>(null);
  const refConfPasswordInput = React.useRef<any>(null);

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
      .post("https://auth.nuocal.com/user/createAccount", loginInfo)
      .then((response) => {
        if (response.data.result.data.status == "FAILED") {
          Alert.alert(response.data.result.data.message, undefined, [
            { text: "OK" },
          ]);
        } else if (response.data.result.data.status == "PENDING") {
          navigation.navigate("EmailVerification", {
            userEmail: email,
          });
        }
      })
      .catch((error) => {});
  });

  const createAccount = async () => {
    if (password == confPassword) {
      mutation.mutate({
        name: "azshen",
        username: username,
        email: email,
        password: password,
      });
    } else {
      Alert.alert("Passwords do not match", undefined, [{ text: "OK" }]);
    }
  };

  const focusOnEmail = () => {
    if (refEmailInput && refEmailInput.current) {
      refEmailInput.current.focus();
    }
  };

  const focusOnPassword = () => {
    if (refPasswordInput && refPasswordInput.current) {
      refPasswordInput.current.focus();
    }
  };

  const focusOnConfPassword = () => {
    if (refConfPasswordInput && refConfPasswordInput.current) {
      refConfPasswordInput.current.focus();
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
            <View style={tw.style("flex-0.5 pb-10")}>
              <Image
                style={styles.logo}
                source={require("../../assets/nuocal-logo-1.png")}
              />
            </View>
            <View style={tw.style("w-82 items-center")}>
              <TextInput
                onChangeText={setUsername}
                textContentType={"name"}
                underlineColorAndroid={"transparent"}
                selectionColor={"#677B9C"}
                placeholderTextColor={"#677B9C"}
                placeholder="username"
                returnKeyType="next"
                onSubmitEditing={focusOnEmail}
                blurOnSubmit={false}
                autoCapitalize={"none"}
                autoCorrect={false}
                style={tw.style(
                  "w-full h-16 pl-5 text-xl bg-iconinactive rounded-2xl bg-opacity-20 text-iconinactive mb-5 font-medium"
                )}
              />
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
              <TextInput
                ref={refConfPasswordInput}
                placeholderTextColor={"#677B9C"}
                onChangeText={setConfPassword}
                secureTextEntry={true}
                textContentType={"password"}
                selectionColor={"#677B9C"}
                placeholder="confirm password"
                autoComplete="password"
                autoCapitalize={"none"}
                autoCorrect={false}
                style={tw.style(
                  "w-full h-16 pl-5 text-xl bg-iconinactive rounded-2xl bg-opacity-20 text-iconinactive mb-5 font-medium"
                )}
              />
              <View style={tw.style("w-full")}>
                <Pressable
                  onPress={() => createAccount()}
                  style={tw.style(
                    "w-full h-16 pl-5 bg-header rounded-2xl text-iconinactive mb-5 justify-center items-center"
                  )}
                >
                  <Text style={tw.style("text-xl text-white font-medium")}>
                    register
                  </Text>
                </Pressable>
                <Pressable
                  onPress={() => navigation.navigate("LoginScreen")}
                  style={tw.style("items-center")}
                >
                  <Text style={tw.style("text-xl font-medium text-header")}>
                    have an account? login
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

export default CreateAccount;

const styles = StyleSheet.create({
  logo: {
    flex: 1,
    width: 300,
    resizeMode: "contain",
  },
});
