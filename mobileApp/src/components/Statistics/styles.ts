import { StyleSheet } from "react-native";
import { COLORS, FONT } from "../../styles/styleConsts";

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 16,
    gap: 16,
  },
  carousel: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 16,
  },
  carousel__day: {
    fontFamily: FONT.FAMILY,
    fontSize: 15,
    color: COLORS.LIGHTGRAY,
  },
  stats: {
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
  },
  stats__header: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 6,
  },
  stats__header__value: {
    fontFamily: FONT.FAMILY,
    fontSize: 32,
    color: COLORS.PRIMARY,
    fontWeight: '500',
  },
  stats__header__desc: {
    fontFamily: FONT.FAMILY,
    fontSize: 16,
    color: COLORS.GRAY,
  },
  stats__body: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 16,
  }
});