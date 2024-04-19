import { StyleSheet } from "react-native";
import { COLORS } from "../../styles/styleConsts";

export const styles = StyleSheet.create({
    button: {
        backgroundColor: COLORS.PRIMARY_FADED,
        color: COLORS.PRIMARY,
        borderRadius: '100%',
        width: '3.5rem',
        height: '3.5rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: '1px',
        borderColor: COLORS.PRIMARY,
        boxSize: 'border-box',
    },
}
);