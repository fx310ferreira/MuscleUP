import { TouchableOpacity, Text, Pressable } from "react-native";
import { styles } from "./styles";


export default function RoundButton({ onPress, children, css={} }: { onPress: () => void, children: any, css?: any}) {
  return (
    <Pressable style={{...styles.button, ...css}} onPress={onPress}>
      {children}
    </Pressable>
  );
}