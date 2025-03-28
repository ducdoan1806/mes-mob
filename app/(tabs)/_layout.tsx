import { Stack, useRouter } from "expo-router";
import React from "react";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";

export default function TabLayout() {
  const router = useRouter();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          padding: 10,
          backgroundColor: "white",
          shadowColor: "#000",
          elevation: 3,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          onPress={() => {
            router.push("/");
          }}
          style={{ flexDirection: "row", gap: 5, alignItems: "flex-end" }}
        >
          <Text
            style={{
              fontSize: 40,
              fontWeight: 600,
              color: "#15236d",
              fontStyle: "italic",
            }}
          >
            MES
          </Text>
          <Text style={{ fontSize: 14, lineHeight: 35 }}>Scanner</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text
            style={{ color: "#15236d", fontSize: 16 }}
            onPress={() => {
              router.navigate("/(auth)");
            }}
          >
            Logout
          </Text>
        </TouchableOpacity>
      </View>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="delivery" options={{ headerShown: false }} />
      </Stack>
    </SafeAreaView>
  );
}
