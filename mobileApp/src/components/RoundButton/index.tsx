import { Pressable } from "react-native";
import { ReactNode } from "react";

import { styles } from "./styles";

export default function RoundButton(
  { big=false, active=false, onPress, children, variant='primary' } :
  { big?: boolean, active?: boolean, onPress: () => void, children: ReactNode, variant?: 'primary' | 'secundary' }
) {
  return (
    <Pressable style={[big ? styles.buttonBig : styles.button, active ? styles.active : null, variant === 'secundary' ? styles.secundary : null] } onPress={onPress}>
      {children}
    </Pressable>
  );
}