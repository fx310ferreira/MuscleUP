import { Text, View } from "react-native";
import { styles } from "./styles";

export default function TitleSub({ title, subTitle }: { title: string, subTitle: string }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {title}
      </Text>
      <Text style={styles.subTitle}>
        {subTitle}
      </Text>
    </View>
  );
}