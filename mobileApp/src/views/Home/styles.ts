import { StyleSheet } from "react-native";
import { COLORS, FONT } from "../../styles/styleConsts";

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    padding: 30,
    gap: 8,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  leftHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5
  },
  nameAndSub: {
    flexDirection: 'column',
    gap: 2,
  },
  name: {
    color: COLORS.PRIMARY,
    fontFamily: FONT.FAMILY,
    fontSize: 18.5,
    fontWeight: '600',
  },
  sub: {
    color: COLORS.PRIMARY,
    fontFamily: FONT.FAMILY,
    fontSize: 16,
    fontWeight: '400',
  },
  today: {
    flexDirection: 'column',
    gap: 10,
  },
  today__date: {
    color: COLORS.GRAY,
    fontFamily: FONT.FAMILY,
    fontSize: 20,
  },
  today__cals: {
    color: COLORS.PRIMARY,
    fontFamily: FONT.FAMILY,
    fontSize: 32,
    fontWeight: '700',
  },
  start: {
    color: 'white',
    fontFamily: FONT.FAMILY,
    fontSize: 14,
    fontWeight: '500',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
});