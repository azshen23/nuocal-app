import {
  View,
  Text,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
  TextInput,
} from "react-native";
import React from "react";
import { create } from "twrnc";
const tw = create(require(`../../tailwind.config.js`));

const EmailVerification = () => {
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
            <Text>verify your email</Text>
            <Text>
              we've sent a 5 digit code to your email at abc@gmail.com change
            </Text>
            <View style={tw.style("flex-row")}>
              <TextInput style={tw.style("border-augustmoon")}></TextInput>
              <TextInput></TextInput>
              <TextInput></TextInput>
              <TextInput></TextInput>
              <TextInput></TextInput>
            </View>
            <Text>didn't receive the code? resend</Text>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default EmailVerification;
