import React from "react";
import { View, Text, TextInput } from "react-native";

import styles from "./welcome.style";

const Welcome = () => {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Bocah CBL</Text>
        <Text style={styles.welcomeMessage}>Find Your Job</Text>
      </View>
      <View style={styles.searchContainer}>
        <TextInput style={styles.searchInput} />
      </View>
    </View>
  );
};

export default Welcome;
