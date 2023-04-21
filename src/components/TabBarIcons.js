import React from "react";
import { themeColor, useTheme } from "react-native-rapi-ui";
import { Ionicons } from "@expo/vector-icons";

export default function TabBarIcons(props) {
  const { isDarkmode } = useTheme();
  const primary = "#007AFF";

  return (
    <Ionicons
      name={props.icon}
      size={24}
      //   color={isDarkmode ? "#fff" : "#000"}
      color={
        props.focused
          ? isDarkmode
            ? themeColor.white100
            : primary
          : "rgb(143,155,179)"
      }
      style={{ marginBottom: -9 }}
    />
  );
}
