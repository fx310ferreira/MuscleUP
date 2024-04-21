import { Text, View } from "react-native";

import { styles } from "./styles";

export default function Graph({ vals }: { vals: number[] }) {
  return (
    <View style={styles.container}>
      {vals.map((val, index) => (
        <View key={index} style={styles.bar}>
          <View style={[styles.bar__empty, { height: `${105-val}%` }]} />
          <View style={[styles.bar__fill, { height: `${val}%` }]} />
        </View>
      ))}
    </View>
  );
}