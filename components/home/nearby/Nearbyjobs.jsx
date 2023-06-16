import React from "react";
import { View, Text, ActivityIndicator } from "react-native";

import styles from "./nearbyjobs.style";
import useFetch from "../../../hook/useFetch";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { COLORS, SIZES, icons, images } from "../../../constants";
import PopularJobCard from "../../common/cards/popular/PopularJobCard";
import NearbyJobCard from "../../common/cards/nearby/NearbyJobCard";
import { useRouter } from "expo-router";

const Nearbyjobs = () => {
  const router = useRouter();
  const { data, isError, isLoading } = useFetch("search", {
    query: "software",
    page: "1",
    num_pages: "1",
  });

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
          data.data?.map((job) => (
            <NearbyJobCard
              job={job}
              key={`job-${job.job_id}`}
              handleNavigate={() => router.push(`/job-details/${job.job_id}`)}
            />
          ))
        )}
      </View>
    </View>
  );
};

export default Nearbyjobs;
