import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Pressable,
  FlatList,
} from "react-native";
import React from "react";
import FilterButtons from "../../components/filterButtons";
import Post from "../../components/post";
import { create } from "twrnc";
const tw = create(require(`../../tailwind.config.js`));
var emotions = [0, 1, 2, 3, 4];
var postss = [
  {
    title: "today was a bad day",
    date: "1 day ago",
    emotion: "sad",
    content:
      "like the title says, today was a bad day. a terrible one, even. i bought tickets to the blackpink concert and they cancelled as i was waiting in line outside the venue. lisa herself came out of the venue and came up to me and just fuckin slapped me. i mean, i'm never going to wash my face ever again, but then it started raining, too. as if my day could get any worse. at least they refunded us. but then jfk ca",
  },
];
var posts = [
  {
    title: "nothing hap...",
    date: "2 day ago",
    emotion: "neutral",
    content:
      "nothing  today, so i put the emotion as neutral. today was just like every other day. i woke up feeling like p diddy, and brushed my teeth with a ",
  },
  {
    title: "i'm happy",
    date: "8/24/22",
    emotion: "happy",
    content:
      "today i am happy. also the timepstamp for this is over a week ago, so it has an actual date instead of a relative one. this is so genius and makes me ha",
  },
  {
    title: "went clubbing",
    date: "8/20/22",
    emotion: "happy",
    content:
      "went to the club today. i don't normally club but i said fuck it we ball. we waited in line for so long and became friends with everyone near us. finally",
  },
  {
    title: "whatever",
    date: "8/15/22",
    emotion: "neutral",
    content:
      "i'm so bored. but at least i'm not dying. did you know that boredom is a positive emotion, in fact? our ancestors were so busy tryna survive that",
  },
  {
    title: "woah!!",
    date: "8/10/22",
    emotion: "surprised",
    content:
      "woah guys. i am surprised. you know why? because i just won the lottery. haha sike. i wish. if i did win the lottery, i wouldn't tell you.",
  },
  {
    title: "i'm mad!!",
    date: "8/9/22",
    emotion: "mad",
    content:
      "i'm so mad wtf!! i was instalocking draven in league today as usual and my support stole 1 cs from me!! do you know ho",
  },
];

const Home = ({ navigation }: any) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: "my diary",
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
    <SafeAreaView style={tw.style("bg-augustmoon flex-1")}>
      <ScrollView contentContainerStyle={{ flexGrow: 1, paddingTop: 20 }}>
        <ScrollView
          style={tw.style("flex-1 ml-4")}
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          {emotions.map((post) => {
            return <FilterButtons key={post} emotion={post} />;
          })}
        </ScrollView>
        <View style={tw.style("flex-1 pl-5 pr-5 pt-5")}>
          <View
            style={tw.style(
              "rounded-lg pl-3 pr-3 pt-3 pb-7 elevation-5 shadow-opacity-20 mb-2 bg-" +
                postss[0].emotion +
                " "
            )}
          >
            <View style={tw.style("flex flex-row")}>
              <Text style={tw.style("text-xl text-text font-bold")}>
                {postss[0].title}
              </Text>

              <Text
                style={tw.style("justify-center pl-3 pt-0.5 text-base italic")}
              >
                {postss[0].date}
              </Text>
            </View>

            <Text style={tw.style("text-sm font-light")} numberOfLines={7}>
              {postss[0].content}
            </Text>
          </View>
          <View style={tw.style("flex flex-row flex-wrap justify-between")}>
            {posts.map((post) => {
              return <Post key={post.title} post={post} />;
            })}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
