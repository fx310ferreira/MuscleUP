import { Text, Pressable } from "react-native";
import { styles } from "./styles";

const variants = {
  primary: styles.button,
  secundary: {...styles.button, ...styles.secundary},
}

const textVariant = {
  primary: styles.text,
  secundary: {...styles.text, ...styles.secundayText},
}


export default function Button({ onPress, text, width=148, variant='primary' }: { onPress: () => void, text: string, width?: number, variant?: 'primary' | 'secundary'}) {
  return (
    <Pressable style={[variants[variant], { width }]} onPress={onPress}>
      <Text style={textVariant[variant]}>
        {text}
      </Text>
    </Pressable>
  );
}