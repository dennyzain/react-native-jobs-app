import React from "react";
import { View, Text } from "react-native";

import styles from "./popularjobcard.style";

const PopularJobCard = (item) => {
  console.log(item, "IMTEM");
  const { job_employment_type, job_title } = item;
  return (
    <View>
      <Text>{job_title}</Text>
      <Text>{job_employment_type}</Text>
    </View>
  );
};

export default PopularJobCard;
