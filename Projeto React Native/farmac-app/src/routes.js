import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Tab01 } from "./pages/Tab01";
import { Tab02 } from "./pages/Tab02";

import Icon from "react-native-ico";

import { TabLabel } from "./components/TabLabel";

const Tab = createBottomTabNavigator();

export function Routes() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "#FFFFFF",
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
          tabBarLabel: ({ focused }) => (
            <TabLabel
              focused={focused}
              labelSize={10}
              focusedColor="#00965a"
              unfocusedColor="#757575"
              title="Consultar Produto"
            />
          ),
          tabBarIcon: ({ focused }) => {
            return (
              <Icon
                name="magnifying-glass"
                group="universalicons"
                color={focused ? "#00965a" : "#757575"}
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
          tabBarLabel: ({ focused }) => (
            <TabLabel
              focused={focused}
              labelSize={10}
              focusedColor="#00965a"
              unfocusedColor="#757575"
              title="Assistência Técnica"
            />
          ),
          tabBarIcon: ({ focused }) => {
            return (
              <Icon
                name="helm"
                group="miscellaneous"
                color={focused ? "#00965a" : "#757575"}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}
