import {
  Image,
  ImageSourcePropType,
  Text,
  TouchableOpacity,
} from "react-native";
import { useRouter, Router } from "expo-router";

interface CardProps {
  title: string;
  screenName: Parameters<Router["push"]>[0];
  iconPath: ImageSourcePropType;
}

const Card = ({ title, iconPath, screenName }: CardProps) => {
  const router = useRouter();

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={() => {
        router.push(screenName);
      }}
      style={{
        paddingHorizontal: 10,
        paddingVertical: 20,
        backgroundColor: "white",
        elevation: 3,
        borderRadius: 10,
        width: "31%",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Image width={20} height={20} source={iconPath} />
      <Text
        style={{
          fontSize: 13,
          fontWeight: 600,
          color: "#4b5563",
          marginTop: 10,
          textAlign: "center",
          wordWrap: "no-wrap",
        }}
        numberOfLines={1}
        ellipsizeMode="tail"
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Card;
