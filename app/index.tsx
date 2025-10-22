import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, SafeAreaView, Dimensions } from 'react-native';
import EmblemaVerde from '@/components/emblema_verde';
const { width } = Dimensions.get('window');

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
        padding: 20,
        width: (width - 60) / 2, // Ajusta a largura para metade da tela com espaçamento
        height: 150,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        },
    dailyConversationsTitle: {
        color: '#fff',
        fontSize: 16,
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
        width: (width - 60) / 2, // Card vazio para preencher o espaço
        height: 150,
        backgroundColor: '#52b788', // Cor verde de exemplo
        borderRadius: 20,
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
});


export default function Index() {

    const popularData = [
        { id: '1', color: '#6a1b9a' },
        { id: '2', color: '#c2185b' },
        { id: '3', color: '#b71c1c' },
        { id: '4', color: '#4527a0' },
    ];

    return (
    <SafeAreaView style={styles.safeArea}>
        <ScrollView style={styles.container}>
        {/* Header */}
        <View style={styles.header}>

            <Image source={require('../assets/home/barra-de-menu.png')} style={styles.icon} />

            <View style={styles.userInfo}>
            <View style={styles.userStatus}>
                <Text style={styles.level}>Lvl 14</Text>
                <Text style={styles.xp}>546XP p/prox nível</Text>
            </View>

            <Image source={require('../assets/home/avatar.png')} style={styles.avatar} />

            </View>
        </View>
        <Text style={styles.greeting}>Olá, Daniel!</Text>
        <Text style={styles.subtitle}>Explore as tarefas mais interessantes do dia!</Text>

        {/* Seção Missões Diárias */}
        <View style={styles.dailyMissionsCard}>
            <View style={styles.dailyMissionsTextContainer}>
                <Text style={styles.dailyMissionsTitle}>Missões Diárias</Text>
                <Text style={styles.dailyMissionsText}>Conclua suas missões antes de 12:00h</Text>
                {/*Icones das missões<View style={styles.dailymissionIcons}>
                    
                </View>*/}
            </View>
        <Image source={require('../assets/home/3d_modelo.png')} style={styles.dailyMissionsImage} />
        </View>

        {/* Seção Atividades LTM */}
        <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Atividades LTM</Text>
            <View style={styles.buttonRow}>
                <TouchableOpacity style={styles.viewAllButton}>
                <Text style={styles.viewAllButtonText}>Visualizar tudo</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.arrowButton}>
              {/* Ícone de seta */}
            </TouchableOpacity>
            </View>
        </View>

        {/* Seção Conversas Diárias */}
        <View style={styles.dailyConversationsContainer}>
            <View style={styles.dailyConversationsCard}>
            <View>
                <Text style={styles.dailyConversationsTitle}>Conversas Diárias</Text>
                <Text style={styles.dailyConversationsRating}>★ 5.0</Text>
            </View>
            </View>
          {/* Card vazio para alinhamento */}
            <View style={styles.emptyCard} />
        </View>

        {/* Seção Popular */}
        <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Popular</Text>
            <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.viewAllButton}>
                <Text style={styles.viewAllButtonText}>Visualizar tudo</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.arrowButton}>
              {/* Ícone de seta */}
            </TouchableOpacity>
            </View>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.popularScroll}>
            {popularData.map(item => (
            <View key={item.id} style={[styles.popularCard, { backgroundColor: item.color }]} />
            ))}
        </ScrollView>

        {/* Função do Emblema */}
        {EmblemaVerde()}
        </ScrollView>
    </SafeAreaView>
    );
}