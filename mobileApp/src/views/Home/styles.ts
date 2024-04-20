import { StyleSheet } from "react-native";
import { COLORS, FONT } from "../../styles/styleConsts";

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    padding: 30,
    gap: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  leftHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10
  },
  nameAndSub: {
    flexDirection: 'column',
    gap: 2,
  },
  name: {
    color: COLORS.PRIMARY,
    fontFamily: FONT.FAMILY,
    fontSize: '1.15rem',
    fontWeight: '600',
  },
  sub: {
    color: COLORS.PRIMARY,
    fontFamily: FONT.FAMILY,
    fontSize: '1rem',
    fontWeight: '400',
  },
  today: {
    flexDirection: 'column',
    gap: 10,
  },
  today__date: {
    color: COLORS.GRAY,
    fontFamily: FONT.FAMILY,
    fontSize: '1.25rem',
  },
  today__cals: {
    color: COLORS.PRIMARY,
    fontFamily: FONT.FAMILY,
    fontSize: '2rem',
    fontWeight: '700',
  }
});