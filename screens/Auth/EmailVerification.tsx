import {
  View,
  Text,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
  TextInput,
  Pressable,
  StyleSheet,
  Alert,
} from "react-native";
import React from "react";
import { create } from "twrnc";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
const tw = create(require(`../../tailwind.config.js`));

interface VerificationInfo {
  userEmail: string;
  verificationCode: number;
}

const EmailVerification = ({ route, navigation }: any) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: null,
    });
  });

  const { userEmail } = route.params;
  const [focus1, setFocus1] = React.useState(false);
  const [focus2, setFocus2] = React.useState(false);
  const [focus3, setFocus3] = React.useState(false);
  const [focus4, setFocus4] = React.useState(false);
  const [focus5, setFocus5] = React.useState(false);

  const [input1, setInput1] = React.useState<number>();
  const [input2, setInput2] = React.useState<number>();
  const [input3, setInput3] = React.useState<number>();
  const [input4, setInput4] = React.useState<number>();
  const [input5, setInput5] = React.useState<number>();

  const refInput1 = React.useRef<any>(null);
  const refInput2 = React.useRef<any>(null);
  const refInput3 = React.useRef<any>(null);
  const refInput4 = React.useRef<any>(null);
  const refInput5 = React.useRef<any>(null);

  const mutation = useMutation(
    async (verificationInfo: VerificationInfo): Promise<any> => {
      return axios
        .post("https://auth.nuocal.com/user/verifyEmail", verificationInfo)
        .then((response) => {
          if (response.data.result.data.status == "SUCCESS") {
            console.log("success");
          } else {
            Alert.alert(response.data.result.data.message, undefined, [
              { text: "OK" },
            ]);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  );

  const verifyAccount = async () => {
    const verificationCode: number = parseInt(
      "" + input1 + input2 + input3 + input4 + input5
    );
    console.log(verificationCode);
    if (verificationCode.toString().length == 5) {
      mutation.mutate({
        userEmail: "azshen@umich.edu",
        verificationCode: verificationCode,
      });
    } else {
      Alert.alert("Verification Code needs to be 5 digits long", undefined, [
        { text: "OK" },
      ]);
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
            <Text style={tw.style("text-iconinactive text-3xl font-medium")}>
              verify your email
            </Text>
            <Text
              style={tw.style(
                "text-iconinactive text-xl text-center pl-12 pr-12 mt-3 mb-10"
              )}
            >
              we've sent a 5 digit code to your email at {userEmail}{" "}
              <Text style={tw.style("underline font-medium")}>change</Text>
            </Text>
            <View
              style={tw.style("flex-row justify-between w-full pl-10 pr-10")}
            >
              <TextInput
                keyboardType="numeric"
                selectionColor={"#425D78"}
                ref={refInput1}
                maxLength={1}
                onFocus={() => setFocus1(true)}
                onBlur={() => setFocus1(false)}
                style={
                  focus1
                    ? tw.style(
                        "bg-codeInputBg border-header h-15 w-14 rounded-2xl border text-2xl pl-5 pb-1 font-bold text-header"
                      )
                    : tw.style(
                        "bg-codeInputBg border-codeInputBorder h-15 w-14 rounded-2xl border text-2xl pl-5 pb-1 font-bold text-header"
                      )
                }
                onChangeText={(value) => {
                  setInput1(parseInt(value));
                  if (value.length == 1) {
                    refInput2.current?.focus();
                  }
                }}
              ></TextInput>
              <TextInput
                selectionColor={"#425D78"}
                maxLength={1}
                onFocus={() => setFocus2(true)}
                onBlur={() => setFocus2(false)}
                ref={refInput2}
                style={
                  focus2
                    ? tw.style(
                        "bg-codeInputBg border-header h-15 w-14 rounded-2xl border text-2xl pl-5 pb-1 font-bold text-header"
                      )
                    : tw.style(
                        "bg-codeInputBg border-codeInputBorder h-15 w-14 rounded-2xl border text-2xl pl-5 pb-1 font-bold text-header"
                      )
                }
                onChangeText={(value) => {
                  setInput2(parseInt(value));
                  if (value.length == 1) {
                    refInput3.current?.focus();
                  }
                  if (value.length == 0) {
                    refInput1.current?.focus();
                  }
                }}
              ></TextInput>
              <TextInput
                selectionColor={"#425D78"}
                maxLength={1}
                onFocus={() => setFocus3(true)}
                onBlur={() => setFocus3(false)}
                ref={refInput3}
                style={
                  focus3
                    ? tw.style(
                        "bg-codeInputBg border-header h-15 w-14 rounded-2xl border text-2xl pl-5 pb-1 font-bold text-header"
                      )
                    : tw.style(
                        "bg-codeInputBg border-codeInputBorder h-15 w-14 rounded-2xl border text-2xl pl-5 pb-1 font-bold text-header"
                      )
                }
                onChangeText={(value) => {
                  setInput3(parseInt(value));
                  if (value.length == 1) {
                    refInput4.current?.focus();
                  }
                  if (value.length == 0) {
                    refInput2.current?.focus();
                  }
                }}
              ></TextInput>
              <TextInput
                selectionColor={"#425D78"}
                maxLength={1}
                ref={refInput4}
                onFocus={() => setFocus4(true)}
                onBlur={() => setFocus4(false)}
                style={
                  focus4
                    ? tw.style(
                        "bg-codeInputBg border-header h-15 w-14 rounded-2xl border text-2xl pl-5 pb-1 font-bold text-header"
                      )
                    : tw.style(
                        "bg-codeInputBg border-codeInputBorder h-15 w-14 rounded-2xl border text-2xl pl-5 pb-1 font-bold text-header"
                      )
                }
                onChangeText={(value) => {
                  setInput4(parseInt(value));
                  if (value.length == 1) {
                    refInput5.current?.focus();
                  }
                  if (value.length == 0) {
                    refInput3.current?.focus();
                  }
                }}
              ></TextInput>
              <TextInput
                ref={refInput5}
                selectionColor={"#425D78"}
                onFocus={() => setFocus5(true)}
                onBlur={() => setFocus5(false)}
                maxLength={1}
                style={
                  focus5
                    ? tw.style(
                        "bg-codeInputBg border-header h-15 w-14 rounded-2xl border text-2xl pl-5 pb-1 font-bold text-header"
                      )
                    : tw.style(
                        "bg-codeInputBg border-codeInputBorder h-15 w-14 rounded-2xl border text-2xl pl-5 pb-1 font-bold text-header"
                      )
                }
                onChangeText={(value) => {
                  setInput5(parseInt(value));
                  if (value.length == 1) {
                  }
                  if (value.length == 0) {
                    refInput4.current?.focus();
                  }
                }}
              ></TextInput>
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
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default EmailVerification;
