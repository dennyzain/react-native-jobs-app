import React, { useState } from "react";
import {
  ActivityIndicator,
  Alert,
  RefreshControl,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from "react-native";
import { COLORS, SIZES, icons, images } from "../../constants";
import { Company, ScreenHeaderBtn, Specifics } from "../../components";
import { Stack, useRouter, useSearchParams } from "expo-router";
import useFetch from "../../hook/useFetch";
import Tabs from "../../components/jobdetails/tabs/Tabs";
import Footer from "../../components/jobdetails/footer/Footer";

const tabs = ["About", "Qualifications", "Responsibilities", "Benefits"];

export default function JobDetail() {
  const router = useRouter();
  const { id } = useSearchParams();
  const [refreshing, setRefreshing] = useState(false);
  const [activeTab, setActiveTab] = useState("About");
  const { data, isError, refetch, isLoading } = useFetch("job-details", {
    job_id: id,
  });
  const onRefresh = () => {};

  const displayContent = () => {
    switch (activeTab) {
      case "Qualifications":
        return (
          <Specifics
            title="Qualifications"
            points={data.data[0].job_highlights?.Qualifications ?? ["N/A"]}
          />
        );
      case "Responsibilities":
        return (
          <Specifics
            title="Responsibilities"
            points={data.data[0].job_highlights?.Responsibilities ?? ["N/A"]}
          />
        );
      case "Benefits":
        return (
          <Specifics title="Benefits" points={data.data[0].job_highlights?.Benefits ?? ["N/A"]} />
        );
      case "About":
        return <Specifics title="About" points={data.data[0].job_description ?? ["N/A"]} />;
      default:
        return <Text>N/A</Text>;
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerTitle: () => false,
          headerLeft: () => (
            <ScreenHeaderBtn
              iconUrl={icons.left}
              dimension="60%"
              handlePress={() => router.back()}
            />
          ),
          headerRight: () => <ScreenHeaderBtn iconUrl={icons.share} dimension="60%" />,
        }}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      >
        {isLoading ? (
          <ActivityIndicator size="large" color={COLORS.primary} />
        ) : isError ? (
          <Text>Something went wrong</Text>
        ) : data.length === 0 ? (
          <Text>No data</Text>
        ) : (
          <View style={{ padding: SIZES.large, paddingBottom: 100 }}>
            <Company
              jobTitle={data?.data[0]?.job_title}
              jobCountry={data?.data[0]?.job_country}
              companyName={data?.data[0]?.employer_name}
              companyLogo={data?.data[0]?.employer_logo}
            />
            <Tabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
            {displayContent()}
          </View>
        )}
      </ScrollView>
      <Footer url={data?.data?.[0]?.job_google_link ?? "https://www.google.com"} />
    </SafeAreaView>
  );
}
