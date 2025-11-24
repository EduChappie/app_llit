import { StyleSheet } from "react-native";

const emblemaStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgba(0, 0, 0, 0)",
        alignItems: "center",
        justifyContent: "center",
        padding: 16,

        /*
        .frame .div {
                background: radial-gradient(
                    50% 50% at 76% 56%,
                    rgba(255, 247, 188, 1) 0%,
                    rgba(255, 190, 11, 1) 100%
                );
                height: 462px;
                width: 298px;
            } */

    },
    card: {
        width: 298,
        height: 462,

        /*
        align-items: start;
        background-color: transparent;
        display: grid;
        justify-items: center;
        width: 100vw;*/

        maxWidth: 420,
        borderRadius: 28,
        paddingVertical: 28,
        paddingHorizontal: 22,
        alignItems: "center",
        // sombra leve (iOS/Android)
        shadowColor: "#e6b300",
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.25,
        shadowRadius: 12,
        elevation: 10,
    },
    title: {
        fontSize: 28,
        color: "#6E5204",
        fontWeight: "700",
        marginBottom: 6,
    },
    subtitle: {
        textAlign: "center",
        color: "#6E5204",
        fontSize: 15,
        lineHeight: 20,
        marginBottom: 18,
    },
    bold: {
        fontWeight: "700",
    },

    badgeWrapper: {
        width: 190,
        height: 190,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 8,
        position: "relative",
    },

    counterPill: {
        position: "absolute",
        top: -10,
        zIndex: 5,
        backgroundColor: "#eefbf0",
        paddingHorizontal: 12,
        paddingVertical: 4,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: "#cbeec7",
        shadowColor: "#cbeec7",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.7,
        elevation: 4,
    },
    counterText: {
        color: "#196e16",
        fontWeight: "700",
    },

    badgeOuter: {
        width: 150,
        height: 150,
        borderBottomLeftRadius: 99,
        borderBottomRightRadius: 99,
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
        alignItems: "center",
        justifyContent: "center",
        padding: 8,
    },
    badgeInnerShadow: {
        width: "100%",
        height: "100%",
        borderBottomLeftRadius: 99,
        borderBottomRightRadius: 99,
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
        backgroundColor: "#0b2410",
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
    },
    badgeInner: {
        flex: 1,
        width: "100%",
        borderBottomLeftRadius: 99,
        borderBottomRightRadius: 99,
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
        backgroundColor: "#1c3b28",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
    },
    badgeInnerUnlocked: {
        // quando desbloqueado, deixa mais brilhante
        backgroundColor: "#2a4f2f",
    },
    badgeShape: {
        position: "absolute",
        width: "86%",
        height: "78%",
        bottom: 6,
        borderBottomLeftRadius: 99,
        borderBottomRightRadius: 99,
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
        backgroundColor: "rgba(0,0,0,0.12)",
    },

    smallLabel: {
        marginTop: 1,
        color: "#6E5204",
    },
    bigNumber: {
        marginTop: 6,
        fontSize: 28,
        color: "#6E5204",
        fontWeight: "700",
    },

    progressPillContainer: {
        marginTop: 8,
        width: "100%",
        alignItems: "center",
    },
    progressPill: {
        backgroundColor: "#6E5204",
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 16,
        alignSelf: "center",
    },
    progressPillText: {
        color: "#f0f8d8",
        fontWeight: "700",
    },

    progressArea: {
        marginTop: 16,
        width: "100%",
        paddingHorizontal: 6,
    },
    track: {
        height: 22,
        backgroundColor: "#d3d2cfff",
        borderRadius: 999,
        overflow: "hidden",
        justifyContent: "center",
    },
    progressFill: {
        position: "absolute",
        left: 0,
        top: 0,
        bottom: 0,
        backgroundColor: "#ffffffff",
        borderRadius: 999,
    },
    lockBubble: {
        position: "absolute",
        right: 8,
        width: 46,
        height: 46,
        borderRadius: 23,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        top: -12,
        shadowColor: "#b6b6b6",
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.25,
        shadowRadius: 6,
        elevation: 6,
    },

    hint: {
        marginTop: 16,
        color: "#7b5f18",
        textAlign: "center",
    },

    controls: {
        marginTop: 18,
        width: "100%",
        alignItems: "center",
    },
    controlBtn: {
        backgroundColor: "#f4e6b2",
        paddingHorizontal: 12,
        paddingVertical: 10,
        borderRadius: 12,
    },
        controlText: {
        color: "#6d4a00",
        fontWeight: "700",
    },
    note: {
        marginTop: 8,
        fontSize: 12,
        color: "#7a6b3a",
        textAlign: "center",
    },

    /*
.frame {
  align-items: start;
  background-color: transparent;
  display: grid;
  justify-items: center;
  width: 100vw;
}

.frame .div {
  background: radial-gradient(
    50% 50% at 76% 56%,
    rgba(255, 247, 188, 1) 0%,
    rgba(255, 190, 11, 1) 100%
  );
  height: 462px;
  width: 298px;
}
    */
});

export default emblemaStyle;