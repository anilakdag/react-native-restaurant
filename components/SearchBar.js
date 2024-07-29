import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function SearchBar() {
  return (
    <View style={styles.background}>
      <Text>SearchBar</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#F0EEEE",
  },
});
