import { View, Text, StyleSheet, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default function ResultsShowScreen({ route }) {
  const [result, setResult] = useState(null);
  const itemId = route.params.id;

  async function getResult(id) {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  }

  useEffect(() => {
    getResult(itemId);
  }, []);

  if (!result) return;
  return (
    <View>
      <Text>{result.name}</Text>
      <FlatList
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => (
          <Image style={styles.image} source={{ uri: item }} />
        )}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 300,
  },
});
