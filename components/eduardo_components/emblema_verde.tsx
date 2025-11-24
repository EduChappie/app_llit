import React, { useEffect, useRef } from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    Animated,
    TouchableOpacity,
    StatusBar,
} from "react-native";
import emblemaStyle from "@/components/ui/eduardo_ui/emblema_verde_sty";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons, Feather } from "@expo/vector-icons";
// --------------- Importações

/**
 * Ajuste aqui os valores para testar a lógica:
 * - progress: número de dias concluídos atualmente
 * - totalDays: objetivo de dias para desbloquear (ex: 3)
 * - timesEarned: quantas vezes o usuário já ganhou essa badge (ex: 12)
 */
const progress = 2;
const totalDays = 3;
const timesEarned = 12;


// Tela do Emblema
export default function EmblemaVerde() {
    const animated = useRef(new Animated.Value(0)).current;
    const progressRatio = Math.max(0, Math.min(1, progress / totalDays));
    const unlocked = progress >= totalDays;

    useEffect(() => {
        // animação da barra (0 -> width)
        Animated.timing(animated, {
            toValue: progressRatio,
            duration: 700,
            useNativeDriver: false,
        }).start();
    }, [progressRatio, animated]);

    const barWidth = animated.interpolate({
        inputRange: [0, 1],
        outputRange: ["0%", "100%"],
    });

    return (
        <SafeAreaView style={emblemaStyle.container}>
            <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />
            <LinearGradient
                // fundo geral com canto arredondado similar ao design
                colors={["rgba(255, 247, 188, 1)", "rgba(255, 190, 11, 1)"]}
                style={emblemaStyle.card}
            >
                <Text style={emblemaStyle.title}>Busy Bee</Text>

                <Text style={emblemaStyle.subtitle}>
                    This badge is awarded when you
                    {"\n"}consequently complete your daily tasks for
                    {"\n"}
                    <Text style={emblemaStyle.bold}>3 days straight</Text>
                </Text>

                {/* Badge central */}
                <View style={emblemaStyle.badgeWrapper}>
                    {/* badge contador (x12) */}
                    <View style={emblemaStyle.counterPill}>
                        <Text style={emblemaStyle.counterText}>x{timesEarned}</Text>
                    </View>

                    {/* Badge visual - criamos camadas para imitar borda verde brilhante e preenchimento */}
                    <LinearGradient
                        colors={["#9eff86", "#25a800"]}
                        style={emblemaStyle.badgeOuter}
                    >
                        <View style={emblemaStyle.badgeInnerShadow}>
                            <View style={[emblemaStyle.badgeInner, unlocked && emblemaStyle.badgeInnerUnlocked]}>
                                {/* um 'escudo' estilizado via bordas arredondadas inferiores */}
                                <View style={emblemaStyle.badgeShape} />
                            </View>
                        </View>
                    </LinearGradient>
                </View>

                <View style={{ height: 18 }} />

                <Text style={emblemaStyle.smallLabel}>You Earned it</Text>
                <Text style={emblemaStyle.bigNumber}>{timesEarned} Times</Text>

                {/* progress pill (2/3 dias) */}
                <View style={emblemaStyle.progressPillContainer}>
                    <View style={emblemaStyle.progressPill}>
                        <Text style={emblemaStyle.progressPillText}>
                            {progress}/{totalDays} dias
                        </Text>
                    </View>
                </View>

                {/* progress bar area */}
                <View style={emblemaStyle.progressArea}>
                    <View style={emblemaStyle.track}>
                        <Animated.View style={[emblemaStyle.progressFill, { width: barWidth }]} />
                        {/* sombra do círculo do cadeado */}
                        <View style={emblemaStyle.lockBubble}>
                            {unlocked ? (
                                <Feather name="unlock" size={22} color="#2c5a00" />
                            ) : (
                                <MaterialCommunityIcons name="lock" size={22} color="#2c5a00" />
                            )}
                        </View>
                    </View>
                </View>

                
            </LinearGradient>
        </SafeAreaView>
    );
}

