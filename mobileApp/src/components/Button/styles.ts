import { StyleSheet } from "react-native";
import { COLORS } from "../../styles/styleConsts";

export const styles = StyleSheet.create({
    button: {
        backgroundColor: COLORS.PRIMARY,
        color: COLORS.PRIMARY,
        borderRadius: 15,
        paddingHorizontal: 100,
        paddingVertical: 17,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
}
);