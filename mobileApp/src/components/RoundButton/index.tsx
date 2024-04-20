import { TouchableOpacity, Text, Pressable } from "react-native";
import { styles } from "./styles";


export default function RoundButton({ onPress, children }: { onPress: () => void, children: any }) {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      {children}
    </Pressable>
  );
}