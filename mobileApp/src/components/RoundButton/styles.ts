import { StyleSheet } from "react-native";
import { COLORS } from "../../styles/styleConsts";

export const styles = StyleSheet.create({
    button: {
        backgroundColor: COLORS.PRIMARY_FADED,
        color: COLORS.PRIMARY,
        borderRadius: 100,
        width: 54,
        height: 54,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonBig: {
        backgroundColor: COLORS.WHITE,
        borderWidth: 1,
        borderColor: COLORS.GREY,
        borderRadius: 100,
        width: 86,
        height: 86,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    active: {
        backgroundColor: COLORS.PRIMARY_FADED,
        borderWidth: 1,
        borderColor: COLORS.PRIMARY,
    }
}
);