import React from "react";
import { View, Text, Image } from "react-native";

import styles from "./company.style";
import { checkImageURL } from "../../../utils";
import { icons } from "../../../constants";

const Company = ({ jobTitle, jobCountry, companyLogo, companyName }) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoBox}>
        <Image
          source={{
            uri: checkImageURL(companyLogo)
              ? companyLogo
              : "https://as2.ftcdn.net/v2/jpg/04/21/75/31/1000_F_421753179_Oe5ICve0IrP1rqBMQdyp5CiawsrOym2D.jpg",
          }}
          style={styles.logoImage}
        />
      </View>
      <View>
        <Text style={styles.jobTitle}>{jobTitle}</Text>
      </View>
      <View style={styles.companyInfoBox}>
        <Text style={styles.companyName}>{companyName} / </Text>
        <View style={styles.locationBox}>
          <Image source={icons.location} style={styles.locationImage} />
          <Text style={styles.locationName}>{jobCountry}</Text>
        </View>
      </View>
    </View>
  );
};

export default Company;
