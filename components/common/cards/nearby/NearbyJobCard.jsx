import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

import styles from "../../cards/nearby/nearbyjobcard.style";
import { checkImageURL } from "../../../../utils";

const NearbyJobCard = ({ item, handleNavigate }) => {
  return (
    <TouchableOpacity style={styles.container} handlePress={handleNavigate}>
      <TouchableOpacity style={styles.logoContainer}>
        <Image
          source={{
            uri: checkImageURL(item.employer_logo)
              ? item.employer_logo
              : "https://as2.ftcdn.net/v2/jpg/04/21/75/31/1000_F_421753179_Oe5ICve0IrP1rqBMQdyp5CiawsrOym2D.jpg",
          }}
          resizeMode="contain"
          style={styles.logoImage}
        />
      </TouchableOpacity>
      <View style={styles.textContainer}>
        <Text style={styles.jobName} numberOfLines={1}>
          {item.job_title}
        </Text>
        <Text style={styles.jobType}>{item.job_employment_type}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default NearbyJobCard;
