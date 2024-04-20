import { Text, Pressable } from "react-native";
import { styles } from "./styles";


export default function Button({ onPress, text }: { onPress: () => void, text: string }) {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
}