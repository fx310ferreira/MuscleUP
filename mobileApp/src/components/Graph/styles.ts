import { StyleSheet } from "react-native";
import { COLORS, FONT } from "../../styles/styleConsts";

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 16,
    gap: 16,
  },
  bar: {
    display: 'flex',
    flexDirection: 'column',
    width: 16,
    height: 100,
  },
  bar__empty: {
    backgroundColor: COLORS.PRIMARY_FADED,
    width: '100%',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    // make it go inside
    position: 'absolute',
    top: 0,
  },
  bar__fill: {
    backgroundColor: COLORS.PRIMARY,
    width: '100%',
    borderRadius: 16,
    position: 'absolute',
    bottom: 0,
  },
});