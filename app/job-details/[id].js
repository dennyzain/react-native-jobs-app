import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import { COLORS, icons, images } from "../../constants";
import { ScreenHeaderBtn } from "../../components";
import { Stack, useRouter } from "expo-router";

export default function JobDetail() {
  const router = useRouter();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: COLORS.lightWhite,
          headerShadowVisible: false,
          headerTitle: () => "",
          headerLeft: () => (
            <ScreenHeaderBtn
              iconUrl={icons.menu}
              dimension="60%"
              handlePress={() => router.back()}
            />
          ),
          headerRight: () => <ScreenHeaderBtn iconUrl={images.profile} dimension="100%" />,
        }}
      />
    </SafeAreaView>
  );
}
