import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import ResultsDetail from "./ResultsDetail";

export default function ResultsList({ title, results }) {
  const navigation = useNavigation();

  if (!results.length) {
    return;
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={navigation.navigate("ResultsShowScreen", {
                id: item.id,
              })}
            >
              <ResultsDetail result={item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 15,
    marginBottom: 5,
  },
  container: {
    marginBottom: 10,
  },
});
