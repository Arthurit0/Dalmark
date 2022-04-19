import React from "react";
import { Text } from "react-native";

export function TabLabel({
  focused,
  labelSize,
  focusedColor,
  unfocusedColor,
  title,
}) {
  return (
    <Text
      style={{
        fontSize: labelSize,
        color: focused ? focusedColor : unfocusedColor,
      }}
    >
      {title}
    </Text>
  );
}
