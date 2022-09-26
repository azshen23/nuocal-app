import { View, Text } from "react-native";
import React from "react";
import { create } from "twrnc";
const tw = create(require(`../tailwind.config.js`));

export default function Post({ post }: any) {
  return (
    <View
      key={post.title}
      style={tw.style(
        "rounded-lg pl-3 pr-3 pt-3 pb-7 mt-2 mb-2  elevation-5 shadow-opacity-20 w-4.7/10 bg-" +
          post.emotion +
          " "
      )}
    >
      <Text style={tw.style("text-xl text-text font-bold")} numberOfLines={1}>
        {post.title}
      </Text>

      <Text style={tw.style("justify-center text-base italic")}>
        {post.date}
      </Text>

      <Text style={tw.style("text-sm font-light")} numberOfLines={4}>
        {post.content}
      </Text>
    </View>
  );
}
