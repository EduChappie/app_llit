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

export default function Index() {

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

    const popularData = [
        { id: '1', color: 'rgba(56, 236, 95, 1)' },
        { id: '2', color: 'rgba(236, 56, 179, 1)' },
        { id: '3', color: 'rgba(251, 171, 0, 1)' },
        { id: '4', color: '#4527a0' },
    ];

    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView style={styles.container}>

                <View style={styles.header}>
                    <TouchableOpacity onPress={() => {rout.push('/main/errorScreen')}}>
                        <Image source={require('@/assets/eduardo_assets/barra-de-menu.png')} style={styles.icon} />
                    </TouchableOpacity>
                    <View style={styles.userInfo}>
                        <View style={styles.userStatus}>
                            <Text style={styles.level}>Lvl 14</Text>
                            <Text style={styles.xp}>546XP p/prox nível</Text>
                        </View>
                        <TouchableOpacity onPress={() => { rout.push('/main/errorScreen')}}>
                            <Image source={require('@/assets/eduardo_assets/avatar.png')} style={styles.avatar} />
                        </TouchableOpacity>
                    </View>
                </View>

                <Text style={styles.greeting}>Olá, {user ? user : "Guest..."}</Text>
                <Text style={styles.subtitle}>Explore as tarefas mais interessantes do dia!</Text>

                <TouchableOpacity style={styles.dailyMissionsCard} onPress={() => { rout.push('/main/errorScreen') }}>
                    <View style={styles.dailyMissionsTextContainer}>
                        <Text style={styles.dailyMissionsTitle}>Missões Diárias</Text>
                        <Text style={styles.dailyMissionsText}>Conclua suas missões antes de 12:00h</Text>
                    </View>
                    <Image source={require('@/assets/eduardo_assets/3d_modelo.png')} style={styles.dailyMissionsImage} />
                </TouchableOpacity>

                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>Atividades LTM</Text>
                    <View style={styles.buttonRow}>
                        <TouchableOpacity style={styles.viewAllButton}
                            onPress={() => rout.push('/main/errorScreen')}
                        >
                            <Text style={styles.viewAllButtonText}>Visualizar tudo</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.dailyConversationsContainer}>
                    <ScrollView horizontal showsHorizontalScrollIndicator={true} style={styles.popularScroll}>
                        <TouchableOpacity style={styles.dailyConversationsCard} onPress={() => rout.push('/main/HomeScreen')}>
                            <View>
                                <Text style={styles.dailyConversationsTitle}>Conversas Diárias</Text>
                                <Text style={styles.dailyConversationsRating}>★ 5.0</Text>
                                <Image style={styles.mascote} source={require('@/assets/eduardo_assets/llit_mascote.png')} />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => rout.push('/main/errorScreen')} style={styles.emptyCard} />
                        <TouchableOpacity onPress={() => rout.push('/main/errorScreen')} style={styles.emptyCard} />
                    </ScrollView>
                </View>

                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>Popular</Text>
                    <View style={styles.buttonRow}>
                        <TouchableOpacity style={styles.viewAllButton}
                            onPress={() => rout.push('/main/errorScreen')}
                        >
                            <Text style={styles.viewAllButtonText}>Visualizar tudo</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.popularScroll}>
                    {popularData.map(item => (
                        <TouchableOpacity key={item.id} onPress={() => rout.push('/main/errorScreen')} style={[styles.popularCard, { backgroundColor: item.color }]} />
                    ))}
                </ScrollView>

                <EmblemaVerde />

            </ScrollView>
        </SafeAreaView>
    );
}
