import Card from "@/components/Card";
import { FlatList, SafeAreaView, ScrollView, Text, View } from "react-native";
const data = [
  { id: "1", title: "Nhập kho pallet" },
  { id: "2", title: "Pallet vào lane" },
  { id: "3", title: "Shipping pallet" },
  { id: "4", title: "Moving pallet" },
  { id: "5", title: "Delivery material" },
  { id: "6", title: "Recieve plan" },
  { id: "7", title: "Kitting material" },
  // Thêm các mục khác
];
export default function Index() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          padding: 10,
          backgroundColor: "white",
          shadowColor: "#000",
          elevation: 3,
        }}
      >
        <View style={{ flexDirection: "row", gap: 5, alignItems: "flex-end" }}>
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
        </View>
      </View>

      <FlatList
        style={{
          flex: 1,
          gap: 10,
          padding: 10,
        }}
        data={data}
        renderItem={({ item }) => <Card title={item.title} />}
        keyExtractor={(item) => item.id}
        numColumns={3} // Số cột trong lưới
        contentContainerStyle={{ gap: 10 }} // Khoảng cách giữa các mục
        columnWrapperStyle={{ gap: 10 }} // Khoảng cách giữa các cột
      />
    </SafeAreaView>
  );
}
