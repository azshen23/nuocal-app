import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import Post from "../screens/Main/Post";

export default function PostStack() {
  const Stack = createStackNavigator();
  const globalScreenOptions = {
    headerShown: true,
  };
  return (
    <Stack.Navigator screenOptions={globalScreenOptions}>
      <Stack.Screen name="Post" component={Post} />
    </Stack.Navigator>
  );
}
