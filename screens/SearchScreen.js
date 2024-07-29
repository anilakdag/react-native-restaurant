import { View, Text } from "react-native";
import React, { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";

export default function SearchScreen() {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);
  const [errMsg, setErrMsg] = useState("");

  async function searchApi(searchTerm) {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "san jose",
        },
      });
      setResults(response.data.businesses);
    } catch (error) {
      setErrMsg("Something went wrong!");
    }
  }

  useEffect(() => {
    searchApi("pasta");
  }, []);

  useEffect;
  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={(newTerm) => setTerm(newTerm)}
        onTermSubmit={() => searchApi(term)}
      />
      {errMsg && <Text>{errMsg}</Text>}
      <Text>We have found {results.length} results</Text>
    </View>
  );
}
