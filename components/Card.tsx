import { Image, Text, TouchableOpacity } from "react-native";

interface CardProps {
  title: string;
}

const Card = ({ title }: CardProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={() => {}}
      style={{
        padding: 10,
        backgroundColor: "white",
        elevation: 3,
        borderRadius: 10,
        width: "31%",
        alignItems: "center",
      }}
    >
      <Image
        width={20}
        height={20}
        source={require("../assets/images/react-logo.png")}
      />
      <Text
        style={{
          fontSize: 13,
          fontWeight: 600,
          color: "#4b5563",
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Card;
