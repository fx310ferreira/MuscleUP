import { StyleSheet } from "react-native";
import { COLORS, FONT } from "../../styles/styleConsts";

export const styles = StyleSheet.create(
    {
        container: {
            display:"flex",
            flex: 1,
            width: '100%',
            height: '100%',
        },
        header: {
            position: 'absolute',
            bottom: '4rem',
            zIndex: 100,
            display: 'flex',
            width: '100%',
            padding: '1rem',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
        },
        camera: {
            flex: 1,
            zIndex: 0,
        },
        text: {
            fontSize: 12,
            fontFamily: FONT.FAMILY,
            fontWeight: FONT.MEDIUM_WEIGHT,
            color: COLORS.PRIMARY
        }
    }
);