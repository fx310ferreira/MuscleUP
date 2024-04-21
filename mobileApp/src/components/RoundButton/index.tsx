import { Pressable } from "react-native";
import { styles } from "./styles";
import React, { ReactNode } from "react";


export default function RoundButton({ big, active, onPress, children }: { big: boolean, active?: boolean, onPress: () => void, children: ReactNode }) {
  return (
    <Pressable style={[big ? styles.buttonBig : styles.button, active ? styles.active : null] } onPress={onPress}>
      {children}
    </Pressable>
  );
}