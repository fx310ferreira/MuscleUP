import { ActivityIndicator, Pressable, Text } from "react-native";
import { ReactNode } from "react";

import { styles } from "./styles";

const variants = {
  primary: styles.button,
  secundary: [styles.button, styles.secundary],
  tertiary: [styles.button, styles.tertiary],
}

const textVariants = {
  primary: styles.text,
  secundary: [styles.text, styles.secundayText],
}

export default function Button(
  { loading=false, variant='primary', onPress, children } :
  { loading?: boolean, variant?: 'primary' | 'secundary' | 'tertiary', onPress: () => void, children: ReactNode }
) {
  return (
    <Pressable style={variants[variant]} onPress={onPress} disabled={loading}>
      {loading ?
        <ActivityIndicator size="small" color="#fff" />
          :
        <Text style={textVariants[variant]}>{children}</Text>
      }
    </Pressable>
  );
}