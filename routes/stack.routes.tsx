import { createNativeStackNavigator } from "@react-navigation/native-stack";

import About from "../src/screens/About";

const Stack = createNativeStackNavigator();

export default function StackRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="home" component={About} />
    </Stack.Navigator>
  );
}
