import { View, Text, StyleSheet, TextInput, Alert } from "react-native";
import { Feather } from "@expo/vector-icons";
import React from "react";

export default function SearchBar({ term, onTermChange, onTermSubmit }) {
  return (
    <View style={styles.backgroundStyle}>
      <Feather name="search" style={styles.icon} />
      <TextInput
        style={styles.textInput}
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Search"
        value={term}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundStyle: {
    marginTop: 10,
    backgroundColor: "#F0EEEE",
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: "row",
  },
  textInput: {
    flex: 1,
    fontSize: 18,
  },
  icon: {
    fontSize: 30,
    alignSelf: "center",
    marginHorizontal: 15,
  },
});
