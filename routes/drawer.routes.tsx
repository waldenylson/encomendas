import { createDrawerNavigator } from "@react-navigation/drawer";
import { Feather } from "@expo/vector-icons";

import TabRoutes from "./tab.routes";
import StackRoutes from "./stack.routes";

const Drawer = createDrawerNavigator();

export default function DrawerRoutes() {
  return (
    <Drawer.Navigator screenOptions={{ title: "" }}>
      <Drawer.Screen
        name="home"
        component={TabRoutes}
        options={{
          drawerIcon: ({ color, size }) => (
            <Feather name="home" color={color} size={size} />
          ),
          drawerLabel: "Início",
        }}
      />
      <Drawer.Screen
        name="Sobre"
        component={StackRoutes}
        options={{
          drawerIcon: ({ color, size }) => (
            <Feather name="info" color={color} size={size} />
          ),
          drawerLabel: "Sobre o App",
        }}
      />
    </Drawer.Navigator>
  );
}
