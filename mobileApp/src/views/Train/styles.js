import { StyleSheet } from "react-native";
import { COLORS, FONT } from "../../styles/styleConsts";

export const styles = StyleSheet.create(
    {
        container: {
            display:"flex",
            flex: 1
        },
        header: {
            position: 'absolute',
            top: '4rem',
            zIndex: 1,
            display: 'flex',
            width: '100%',
            padding: '1rem',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            text: {
                fontSize: FONT.MEDIUM_SIZE,
                fontFamily: FONT.FAMILY,
                fontWeight: FONT.MEDIUM_WEIGHT,
                color: COLORS.PRIMARY
            }
        },
        camera: {
            flex: 1
        },
    }
);