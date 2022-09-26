import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Main/Home";

export default function HomeStack() {
  const Stack = createStackNavigator();
  const globalScreenOptions = {
    headerShown: true,
  };
  return (
    <Stack.Navigator screenOptions={globalScreenOptions}>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}
