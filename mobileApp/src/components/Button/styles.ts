import { StyleSheet } from "react-native";
import { COLORS, FONT } from "../../styles/styleConsts";

export const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.PRIMARY,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: COLORS.PRIMARY,
    borderRadius: 32,
    paddingVertical: 8,
    paddingHorizontal: 8,
    maxWidth: 148,
  },
  text: {
    fontFamily: FONT.FAMILY,
    fontSize: 15,
    color: 'white',
  },
  secundary: {
    backgroundColor: COLORS.PRIMARY_FADED,
    borderColor: COLORS.PRIMARY,
    borderWidth: 1,
  },
  secundayText: {
    color: COLORS.PRIMARY,
  },
  tertiary:{
    alignSelf: 'center',
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 46,
  }
});