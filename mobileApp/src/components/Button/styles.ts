import { StyleSheet } from "react-native";
import { COLORS, FONT } from "../../styles/styleConsts";

export const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.PRIMARY,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: '1px',
    borderColor: COLORS.PRIMARY,
    boxSize: 'border-box',
    width: 'fit-content',
    borderRadius: '2rem',
    paddingVertical: '0.5rem',
    paddingHorizontal: '1rem',
  },
  text: {
    fontFamily: FONT.FAMILY,
    fontSize: FONT.MEDIUM_SIZE,
    color: 'white',
  }
});