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
import { useState, useRef, useLayoutEffect } from "react";
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";
import { Ionicons } from "@expo/vector-icons";
import { create } from "twrnc";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { useSignUp } from "@clerk/clerk-expo";
const tw = create(require(`../../tailwind.config.js`));

interface LoginInfo {
  name: string;
  username: string;
  email: string;
  password: string;
}

const CELL_COUNT = 6;
const CreateAccount = ({ navigation }: any) => {
  const { isLoaded, signUp, setActive } = useSignUp();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [pendingVerification, setPendingVerification] = useState(false);
  const [code, setCode] = useState("");
  const [value, setValue] = useState("");
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  const refEmailInput = useRef<any>(null);
  const refPasswordInput = useRef<any>(null);
  const refConfPasswordInput = useRef<any>(null);

  useLayoutEffect(() => {
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

  const createAccount = async () => {
    if (!isLoaded) {
      return;
    }
    try {
      await signUp.create({
        username,
        emailAddress: email,
        password,
      });

      // send the email.
      await signUp.prepareEmailAddressVerification({ strategy: "email_code" });

      // change the UI to our pending section.
      setPendingVerification(true);
    } catch (err: any) {
      console.error(JSON.stringify(err, null, 2));
    }
  };

  // This verifies the user using email code that is delivered.
  const verifyAccount = async () => {
    if (!isLoaded) {
      return;
    }

    try {
      const verificationCode: string = value;

      if (verificationCode.length != 6) {
        Alert.alert("Verification Code needs to be 6 digits long", undefined, [
          { text: "OK" },
        ]);
        throw new Error(`Invalid verification code`);
      }
      const completeSignUp = await signUp.attemptEmailAddressVerification({
        code: verificationCode,
      });
      await setActive({ session: completeSignUp.createdSessionId });
    } catch (err: any) {
      console.error(JSON.stringify(err, null, 2));
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
          {!pendingVerification ? (
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
                  onSubmitEditing={focusOnConfPassword}
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
          ) : (
            <View style={tw.style("flex-1 justify-center items-center")}>
              <Text style={tw.style("text-iconinactive text-3xl font-medium")}>
                verify your email
              </Text>
              <View style={tw.style("pt-10")}></View>
              <Text
                style={tw.style(
                  "text-iconinactive text-xl text-center pl-12 pr-12 mt-3 mb-10"
                )}
              >
                we've sent a 6 digit code to your email at {email}{" "}
                <Text style={tw.style("underline font-medium")}>change</Text>
              </Text>
              <View
                style={tw.style("flex-row justify-between w-full pl-3 pr-3")}
              >
                <View style={tw.style("w-full flex-col items-center")}>
                  <CodeField
                    ref={ref}
                    {...props}
                    value={value}
                    onChangeText={setValue}
                    rootStyle={tw.style("w-full")}
                    cellCount={CELL_COUNT}
                    keyboardType="number-pad"
                    textContentType="oneTimeCode"
                    renderCell={({ index, symbol, isFocused }) => (
                      <Text
                        key={index}
                        onLayout={getCellOnLayoutHandler(index)}
                        style={tw.style(
                          `bg-codeInputBg h-14 w-14 rounded-2xl border text-2xl font-bold text-header overflow-hidden text-center pt-2 ${
                            isFocused
                              ? "border-header"
                              : "border-codeInputBorder"
                          }`
                        )}
                      >
                        {symbol || (isFocused ? <Cursor /> : null)}
                      </Text>
                    )}
                  />
                </View>
              </View>
              <Text
                style={tw.style(
                  "text-iconinactive text-xl text-center pl-12 pr-12 mt-12 mb-10"
                )}
              >
                didn't receive the code?{" "}
                <Text style={tw.style("underline font-medium")}>resend</Text>
              </Text>
              <Pressable
                onPress={() => verifyAccount()}
                style={tw.style(
                  "w-80 h-16 bg-header rounded-2xl text-iconinactive mb-5 justify-center items-center"
                )}
              >
                <Text
                  style={tw.style("text-xl text-white font-medium text-center")}
                >
                  verify
                </Text>
              </Pressable>
            </View>
          )}
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
