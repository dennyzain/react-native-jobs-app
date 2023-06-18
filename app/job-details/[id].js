import React, { useState } from "react";
import {
  ActivityIndicator,
  RefreshControl,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from "react-native";
import { COLORS, SIZES, icons, images } from "../../constants";
import { Company, ScreenHeaderBtn } from "../../components";
import { Stack, useRouter, useSearchParams } from "expo-router";
import useFetch from "../../hook/useFetch";
import Tabs from "../../components/jobdetails/tabs/Tabs";

const tabs = ["About", "Qualifications", "Responbilities"];

export default function JobDetail() {
  const router = useRouter();
  const { id } = useSearchParams();
  const [refreshing, setRefreshing] = useState(false);
  const [activeTab, setActiveTab] = useState(false);
  const { data, isError, refetch, isLoading } = useFetch("job-details", {
    job_id: id,
  });
  const onRefresh = () => {};
  console.log(id, " INI ID");

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
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
