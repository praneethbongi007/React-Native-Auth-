import React from "react";
import { useTheme, themeColor, Text } from "react-native-rapi-ui";
import { Ionicons } from "@expo/vector-icons";

export default function TabBarText(props) {
  const { isDarkmode } = useTheme();

  return (
    <Text
      style={{
        marginBottom: 5,
      }}
    >
      {props.title}
    </Text>
  );
}
