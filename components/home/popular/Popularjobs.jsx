import React from "react";
import { View, Text, TouchableOpacity, ActivityIndicator, FlatList } from "react-native";

import styles from "./popularjobs.style";
import PopularJobCard from "../../common/cards/popular/PopularJobCard";
import { SIZES } from "../../../constants";
import useFetch from "../../../hook/useFetch";

const Popularjobs = () => {
  const { data } = useFetch("search", {
    query: "reactjs",
    page: "1",
    num_pages: "1",
  });

  console.log(data);
  const isLoading = false;
  const isError = false;
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular jobs</Text>
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

export default Popularjobs;
