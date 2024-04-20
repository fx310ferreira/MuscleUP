import { StyleSheet } from "react-native";
import { COLORS, FONT } from "../../styles/styleConsts";

export const styles = StyleSheet.create(
    {
        container: {
            display:"flex",
            height: '100%',
            flex: 1
        },
        header: {
            position: 'absolute',
            top: 64,
            zIndex: 1,
            display: 'flex',
            width: '100%',
            padding: 12,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
        },
        camera: {
            flex: 1
        },
            text: {
                fontSize: 12,
                fontFamily: FONT.FAMILY,
                fontWeight: FONT.MEDIUM_WEIGHT,
                color: COLORS.PRIMARY
            }
    }
);