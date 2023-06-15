import React from "react";
import { View, Text, ActivityIndicator } from "react-native";

import styles from "./nearbyjobs.style";
import useFetch from "../../../hook/useFetch";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { COLORS, SIZES, icons, images } from "../../../constants";
import PopularJobCard from "../../common/cards/popular/PopularJobCard";

const Nearbyjobs = () => {
  const { data, isError, isLoading } = useFetch("search", {
    query: "software engineer",
    page: "1",
    num_pages: "1",
  });

  console.log(isError);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Nearby jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size={SIZES.xLarge} />
        ) : isError ? (
          <Text>Something went wrong</Text>
        ) : (
          <FlatList
            styles={styles.cardsContainer}
            data={data.data}
            keyExtractor={(key) => key?.job_id}
            contentContainerStyle={{ columnGap: SIZES.large }}
            renderItem={({ item, index }) => <PopularJobCard item={item} key={index} />}
            horizontal
          />
        )}
      </View>
    </View>
  );
};

export default Nearbyjobs;
