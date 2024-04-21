import { StyleSheet } from "react-native";
import { COLORS, FONT } from "../../styles/styleConsts";

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 3,
  },
  title: {
    fontFamily: FONT.FAMILY,
    fontSize: 20,
    color: COLORS.PRIMARY,
    fontWeight: '500',
  },
  subTitle: {
    fontFamily: FONT.FAMILY,
    fontSize: 16,
    color: COLORS.GREY2,
    fontWeight: '400',
  }
});