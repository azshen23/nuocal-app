import { SafeAreaView, View, Text } from "react-native";
import React from "react";
import { create } from "twrnc";
import { Calendar } from "react-native-calendars";
const tw = create(require(`../../tailwind.config.js`));
import { LocaleConfig } from "react-native-calendars";

LocaleConfig.locales["en"] = {
  monthNames: [
    "JANUARY",
    "FEBUARY",
    "MARCH",
    "APRIL",
    "MAY",
    "JUNE",
    "JULY",
    "AUGUST",
    "SEPTEMBER",
    "OCTOBER",
    "NOVEMBER",
    "DECEMBER",
  ],
  monthNamesShort: [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ],
  dayNames: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ],
  dayNamesShort: ["S", "M", "T", "W", "T", "F", "S"],
  today: "Today",
};
LocaleConfig.defaultLocale = "en";

const CalendarPage = ({ navigation }: any) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: "calendar",
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

  const vacation = { key: "vacation", color: "red" };
  return (
    <SafeAreaView style={tw.style("flex-1 bg-augustmoon")}>
      <View
        style={tw.style(
          "w-full pb-5 mt-5 border-b border-header border-opacity-50 "
        )}
      >
        <Calendar
          theme={{
            backgroundColor: "#F3F0E7",
            calendarBackground: "#F3F0E7",
            textMonthFontSize: 24,
            textMonthFontWeight: "400",
            textDayFontWeight: "400",
            textDayFontSize: 24,
            textDayHeaderFontSize: 24,
            textSectionTitleColor: "#425D78",
            dayTextColor: "#425D78",
            monthTextColor: "#425D78",
            arrowColor: "#425D78",
            stylesheet: {
              calendar: {
                header: {
                  week: {
                    marginTop: 1000,
                    marginHorizontal: 12,
                    flexDirection: "row",
                    justifyContent: "space-between",
                  },
                },
              },
            },
          }}
          headerStyle={tw.style(
            "border-b border-header pb-3 border-opacity-50"
          )}
          markedDates={{
            "2022-10-25": {
              dots: [vacation],
              marked: true,
            },
            "2022-10-23": {
              marked: true,
              dotColor: "#C8EEB2",
            },
          }}
          hideExtraDays={true}
          enableSwipeMonths={true}
        />
      </View>
    </SafeAreaView>
  );
};

export default CalendarPage;
