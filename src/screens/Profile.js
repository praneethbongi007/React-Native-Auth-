import React from "react";
import { View } from "react-native";
import { Layout, Text } from "react-native-rapi-ui";

export default function Profile() {
  return (
    <Layout style={{ marginLeft: 20, marginRight: 20 }}>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>
        <Text style={{ fontWeight: "bold", color: "#000" }}>Author:</Text>{"\n\n"}
          {"\n\n"}
          - Talented React Native developer named Praneth
          {"\n\n"}
          - Over 1 year of experience in mobile app development
          {"\n\n"}
          - Expert in React Native with a deep understanding of the framework
          {"\n\n"}
          - Experience in developing complex and scalable mobile apps
          {"\n\n"}
          - Well-versed in Redux, Javascript, HTML, CSS, and Git
          {"\n\n"}
          - Ability to quickly understand client's requirements and translate them into a working product
          {"\n\n"}
          - Attention to detail and commitment to delivering high-quality work
          {"\n\n"}
          - Great communicator and team player
          {"\n\n"}
          - Committed to helping colleagues grow and develop their skills
          {"\n\n"}
          - Dedicated to delivering exceptional mobile app development services
          {"\n\n"}
          If you're looking for a developer who can help bring your app idea to life, Praneth is definitely someone you should consider.
        </Text>
      </View>
    </Layout>
  );
}
