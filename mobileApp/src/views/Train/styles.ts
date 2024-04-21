import { StyleSheet } from "react-native";
import { COLORS, FONT } from "../../styles/styleConsts";
import { Fragment } from "react";

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
            zIndex: 100,
            display: 'flex',
            width: '100%',
            padding: 12,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
        },
        camera: {
            flex: 1,
            zIndex: 0,
        },
        text: {
            fontSize: 20,
            fontFamily: FONT.FAMILY,
            fontWeight: "800",
            color: COLORS.PRIMARY
        },
        loading: {
            position: 'absolute',
            bottom: 0,
            zIndex: 100,
            height: "40%",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        },
        card: {
            backgroundColor: COLORS.WHITE,
            width: "95%",
            height: "100%",
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 30,
            gap: 20
        },
        buttonContent: {
            fontSize: 22,
            fontFamily: FONT.FAMILY,
            fontWeight: "700",
            color: COLORS.WHITE
        },
        buttonContainer: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 10,
            marginBottom: 20
        },
        trainSelector: {
            width: "100%",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
        },
        difficulty: {
            fontFamily: FONT.FAMILY,
            width: "100%",
        },
        errorCard: {
            backgroundColor: COLORS.PRIMARY,
            width: "95%",
            height: "100%",
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'center',
            padding: 30,
            gap: 20
        },
        errorCardTitle: {
            fontFamily: FONT.FAMILY,
            fontSize: 34,
            textAlign:'center',
        }
    }
);