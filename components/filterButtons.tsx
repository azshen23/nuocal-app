import { View, Text, SafeAreaView, ScrollView, Pressable } from "react-native";
import React from "react";
import { create } from "twrnc";
const tw = create(require(`../tailwind.config.js`));
interface filterButtons {
  emotion: number;
}

export default function FilterButtons({ emotion }: filterButtons) {
  var text: string | undefined = undefined;
  var color: string | undefined = undefined;
  switch (emotion) {
    case 0:
      text = "happy😊";
      color = "happy";
      break;
    case 1:
      text = "surprised 😮";
      color = "surprised";
      break;
    case 2:
      text = "neutral😐";
      color = "neutral";
      break;
    case 3:
      text = "sad😢";
      color = "sad";
      break;
    case 4:
      text = "mad😢";
      color = "mad";
      break;
  }

  return (
    <Pressable
      style={tw.style(
        "text-text text-base rounded-2xl border-2 border-filterBorder ml-1 mr-1 pl-3 pr-3 bg-" +
          color +
          " overflow-hidden"
      )}
    >
      <View>
        <Text style={tw.style("text-text text-base ")}>{text}</Text>
      </View>
    </Pressable>
  );
}
