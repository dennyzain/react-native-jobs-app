import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, FlatList } from "react-native";
import styles from "./welcome.style";
import { SIZES, icons } from "../../../constants";
import { useRouter } from "expo-router";

const jobsTypes = ["Full-Time", "Contract", "Part-time"];

const Welcome = () => {
  const router = useRouter();
  const [inputSearch, setInputSearch] = useState("");
  const [activeJobsType, setActiveJobsType] = useState("Full-Time");

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Bocah CBL</Text>
        <Text style={styles.welcomeMessage}>Find Your Job</Text>
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            onChange={(e) => setInputSearch(e.target.value)}
            placeholder="what are you looking for?"
          />
        </View>
        <TouchableOpacity style={styles.searchBtn} onPress={() => console.log("test button ")}>
          <Image style={styles.searchBtnImage} source={icons.search} resizeMode="contain" />
        </TouchableOpacity>
      </View>
      <View style={styles.tabsContainer}>
        <FlatList
          data={jobsTypes}
          contentContainerStyle={{ columnGap: SIZES.small }}
          keyExtractor={(key) => key}
          horizontal
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.tab(activeJobsType, item)}
              onPress={() => {
                setActiveJobsType(item);
                router.push(`/search/${item}`);
              }}
            >
              <Text style={styles.tabText(activeJobsType, item)}>{item}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

export default Welcome;
