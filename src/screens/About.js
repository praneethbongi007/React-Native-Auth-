import React from "react";
import { View,StyleSheet } from "react-native";
import { Layout, Text } from "react-native-rapi-ui";
export default function About() {
  return (
    <Layout >
      <View  style={styles.table}>
        <View style={styles.row}>
          <Text style={styles.cellHeader}>Name:</Text>
          <Text style={styles.cell}>Praneth</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.cellHeader}>Occupation:</Text>
          <Text style={styles.cell}>React Native Developer</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.cellHeader}>Experience:</Text>
          <Text style={styles.cell}>1+ years</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.cellHeader}>Skills:</Text>
          <Text style={styles.cell}>
            React Native, React, Redux, Javascript, HTML, CSS, Git
          </Text>
        </View>
      </View>
    </Layout>
  );
}



const styles = StyleSheet.create({
  table: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    overflow: "hidden",
  },
  row: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  cellHeader: {
    padding: 10,
    fontWeight: "bold",
    flex: 1,
    backgroundColor: "#f7f7f7",
  },
  cell: {
    padding: 10,
    flex: 2,
  },
});