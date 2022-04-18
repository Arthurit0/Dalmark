import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo } from "@expo/vector-icons";

import { Tab01 } from "./pages/Tab01";
import { Tab02 } from "./pages/Tab02";

import Icon from "react-native-ico";

const Tab = createBottomTabNavigator();

export function Routes() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "#fff",
          borderTopWidth: 0,
          paddingTop: 5,
          paddingBottom: 5,
        },
      }}
    >
      <Tab.Screen
        name="Consultar Produto"
        component={Tab01}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => {
            return (
              <Icon
                name="magnifying-glass"
                color={color}
                group="universalicons"
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Assistência Técnica"
        component={Tab02}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => {
            return (
              <Icon
                name="open-wrench-tool-silhouette"
                group="font-awesome"
                color={color}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}
