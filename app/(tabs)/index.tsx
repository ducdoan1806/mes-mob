import Card from "@/components/Card";
import { menu } from "@/utils/const";
import React from "react";
import { FlatList, View } from "react-native";

const HomeScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        style={{
          flex: 1,
          gap: 10,
          padding: 10,
        }}
        data={menu}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            iconPath={item.iconPath}
            screenName="/delivery"
          />
        )}
        keyExtractor={(item) => item.id}
        numColumns={3} // Số cột trong lưới
        contentContainerStyle={{ gap: 10 }} // Khoảng cách giữa các mục
        columnWrapperStyle={{ gap: 10 }} // Khoảng cách giữa các cột
      />
    </View>
  );
};

export default HomeScreen;
