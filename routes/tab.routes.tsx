import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";

import Home from "../src/screens/Home";
import New from "../src/screens/New";
import About from "../src/screens/About";

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
  return (
    <Tab.Navigator screenOptions={{ title: "" }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="home" color={color} size={size} />
          ),
          tabBarLabel: "Início",
        }}
      />
      <Tab.Screen
        name="New"
        component={New}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="plus" color={color} size={size} />
          ),
          tabBarLabel: "Encomenda",
        }}
      />
      {/* <Tab.Screen name="About" component={About} /> */}
    </Tab.Navigator>
  );
}
