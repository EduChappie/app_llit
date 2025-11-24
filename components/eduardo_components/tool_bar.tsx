import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
// Você precisará de uma biblioteca de ícones, como `react-native-vector-icons`
import { Ionicons } from '@expo/vector-icons'; 

// Mapeamento dos ícones para as rotas
/*
const iconMap = {
Home: { 
    IconComponent: HomeIcon, 
    active: { name: 'home', size: 28 }, 
    inactive: { name: 'home-outline', size: 24 } 
},
TV: { 
    IconComponent: TVIcon,
    active: { name: 'tv', size: 24 }, 
    inactive: { name: 'tv-outline', size: 24 } 
},
Profile: { 
    IconComponent: UserIcon,
    active: { name: 'person', size: 24 }, 
    inactive: { name: 'person-outline', size: 24 } 
},
Charts: { 
    IconComponent: ChartIcon,
    active: { name: 'stats-chart', size: 24 }, 
    inactive: { name: 'stats-chart-outline', size: 24 } 
},
};*/

const CustomTabBar = ({ state, descriptors, navigation }) => {
    return (
    <View style={styles.tabBarContainer}>
        {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
            options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;
        const iconInfo = iconMap[route.name];

        const onPress = () => {
            const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
        });

        if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
        }
        };

        // Renderiza um ícone personalizado com o círculo de destaque se estiver focado
        const renderIcon = () => {
            const Icon = Ionicons; // ou o componente de ícone que você está usando
            const color = isFocused ? 'black' : 'white'; // Cor do ícone

            if (route.name === 'Home') { // O ícone Home tem um estilo diferente na imagem
                return (
                    <View style={styles.activeIconCircle}>
                        <Icon name={'home-outline'} size={24} color={'black'} />
                    </View>
                );
            }

          // Ícones normais (TV, Pessoa, Gráfico)
            return (
            <Icon 
                name={isFocused ? iconInfo.active.name : iconInfo.inactive.name} 
                size={24} 
                color={'white'} 
            />
            );
        };

        return (
        <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            style={styles.tabButton}
        >
            {renderIcon()}
        </TouchableOpacity>
        );
    })}
    </View>
);
};

const styles = StyleSheet.create({
    tabBarContainer: {
        // A chave para fixar no final é o 'position: absolute' com 'bottom: 0'
        position: 'absolute', 
        bottom: 20, // Distância do fundo, ajuste conforme a imagem
        left: 20,
        right: 20,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: 70, // Altura da barra
        backgroundColor: '#FFC83D', // Cor amarela da imagem
        borderRadius: 35, // Arredondamento
        paddingHorizontal: 10,
        // Sombra (opcional, para dar um efeito flutuante)
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.1,
        shadowRadius: 20,
        elevation: 5,
    },
    tabButton: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
    },
    activeIconCircle: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: 'white', // Círculo branco de destaque
        justifyContent: 'center',
        alignItems: 'center',
    // Opcional: Efeito de deslocamento para "pular" um pouco
    // transform: [{ translateY: -10 }], 
    },
  // Adicione outros estilos conforme necessário para os ícones e rótulos
});

export default CustomTabBar;