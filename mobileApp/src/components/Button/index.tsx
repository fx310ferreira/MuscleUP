import { ActivityIndicator, Pressable } from "react-native";
import { styles } from "./styles";
import React, { ReactNode } from "react";

export default function Button({loading, onPress, children }: { loading: boolean, onPress: () => void, children: ReactNode }) {
  return (
    <Pressable style={styles.button} onPress={onPress} disabled={loading}>
      {loading ? <ActivityIndicator size="small" color="#fff" /> : children}
    </Pressable>
  );
}