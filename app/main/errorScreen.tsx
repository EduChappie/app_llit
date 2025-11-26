import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, SafeAreaView, Dimensions } from 'react-native';
import EmblemaVerde from '@/components/eduardo_components/emblema_verde';
const { width } = Dimensions.get('window');

import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState, useEffect } from 'react';

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#fff',
    },
    container: {
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: '#fff',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 15,
    },
    icon: {
        width: 40,
        height: 40,
    },
    userInfo: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    userStatus: {
        alignItems: 'flex-end',
        marginRight: 10,
    },
    level: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    xp: {
        fontSize: 12,
        color: '#888',
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
    },
    greeting: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 20,
    },
    subtitle: {
        fontSize: 16,
        color: '#888',
        marginBottom: 20,
    },
    dailyMissionsCard: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#ff69b4',
        borderRadius: 20,
        padding: 25,
        position: 'relative',
        marginBottom: 20,
    },
    dailyMissionsTextContainer: {
        flex: 1,
    },
    dailyMissionsTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
    },
    dailyMissionsText: {
        fontSize: 14,
        width: '50%',
        color: '#fff',
        marginTop: 5,
    },
    dailyMissionsImage: {
        width: 250,
        height: 200,
        right: -20,
        position: 'absolute',
        resizeMode: 'contain',
    },
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 10,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    buttonRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    viewAllButton: {
        backgroundColor: '#ffc107',
        borderRadius: 20,
        paddingVertical: 8,
        paddingHorizontal: 15,
    },
    viewAllButtonText: {
        color: '#000',
        fontWeight: 'bold',
    },
    arrowButton: {
        width: 30,
        height: 30,
        backgroundColor: '#ccc',
        borderRadius: 15,
        marginLeft: 10,
    },
    dailyConversationsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    dailyConversationsCard: {
        backgroundColor: '#007aff',
        borderRadius: 20,
        position: 'relative',
        overflow: 'hidden',
        padding: 20,
        width: '50%',
        height: 150,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    dailyConversationsTitle: {
        color: '#fff',
        fontSize: 16,
        marginBottom: 55,
        fontWeight: 'bold',
    },
    dailyConversationsRating: {
        color: '#ffc107',
        marginTop: 5,
    },
    dailyConversationsImage: {
        width: 80,
        height: 80,
    },
    emptyCard: {
        width: 120,
        height: 150,
        backgroundColor: '#52b788',
        borderRadius: 20,
        marginLeft: 20,
    },
    popularScroll: {
        marginBottom: 20,
    },
    popularCard: {
        width: 150,
        height: 150,
        borderRadius: 20,
        marginRight: 15,
    },
    mascote: {
        width: '110%',
        height: '110%',
        bottom: '-25%',
        right: '-76%',
        resizeMode: 'contain',
        position: 'absolute',
    },
});

export default function screenNotFound() {

    const rout = useRouter();

    const [user, setUser] = useState(null);
    const [avatar, setAvatar] = useState(null);

    const getUser = async () => {
        const info = await AsyncStorage.getItem("usuario");
        if (info) {
            const dt = JSON.parse(info);
            setUser(dt.nome);
            setAvatar(dt.avatar);
            console.log(dt.nome);
        }
    };

    useEffect(() => {
        getUser();
    }, []);

    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView style={styles.container}>

                {/* Cabeçalho de perfil */}
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => { rout.push('/main')}}>
                        <Image source={require('@/assets/eduardo_assets/arrow.png')} style={styles.icon} />
                    </TouchableOpacity>
                    <View style={styles.userInfo}>
                        <View style={styles.userStatus}>
                            <Text style={styles.level}>Lvl 14</Text>
                            <Text style={styles.xp}>546XP p/prox nível</Text>
                        </View>
                        <Image source={require('@/assets/eduardo_assets/avatar.png')} style={styles.avatar} />
                    </View>
                </View>

                <Text style={styles.greeting}>Desculpe, {user ? user : "Guest..."}</Text>
                <Text style={styles.subtitle}>Página inexistente, prevista para próximas atualizações!</Text>

                {/* Página de erro para telas inexistentes */}
                <View style={styles.dailyMissionsCard}>
                    <View style={styles.dailyMissionsTextContainer}>
                        <Text style={styles.dailyMissionsTitle}>Error 404</Text>
                        <Text style={styles.dailyMissionsText}>Sentimos muito pelo transtorno, mas em breve teremos atualizações futuras de implementação de mais telas.</Text>
                    </View>
                    <Image source={require('@/assets/fotos/bixo2.png')} style={styles.dailyMissionsImage} />
                </View>


            </ScrollView>
        </SafeAreaView>
    );
}
