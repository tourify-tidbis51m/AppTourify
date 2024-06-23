import React, { useState } from "react";
import { Pressable, View, StyleSheet, Image } from "react-native";

const NavBar = () => {
    const [pressedButton, setPressedButton] = useState(null);

    const handlePress = (index) => {
        setPressedButton(index);
    };

    const icons = [
        require('../assets/home_icon.png'),
        require('../assets/events_icon.png'),
        require('../assets/map_icon.png'), 
        require('../assets/control_icon.png'),
        require('../assets/user_icon.png'), 

    ];

    return (
        <View style={styles.navbarContainer}>
            <View style={styles.navbar}>
                {icons.map((icon, index) => (
                    <Pressable
                        key={index}
                        onPress={() => handlePress(index)}
                        style={[
                            styles.navButton,
                            index === 2 && styles.navButtonCenter, // Botón central más grande
                            pressedButton === index && styles.navButtonPressed,
                        ]}
                    >
                        <Image
                            source={icon}
                            style={{
                                width: pressedButton === index ? 40 : 30, // Cambia el tamaño de la imagen si el botón está presionado
                                height: pressedButton === index ? 40 : 30, // Cambia el tamaño de la imagen si el botón está presionado
                            }}
                        />
                    </Pressable>
                ))}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    navbarContainer: {
        height: '6%',
        width: '100%',
        backgroundColor: '#1A2B3C',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
    },
    navbar: {
        flexDirection: 'row',
        justifyContent: 'space-evenly', 
        alignItems: 'center',
        width: '100%',
        padding: 10,
    },
    navButton: {
        width: 60,
        height: 60,
        borderRadius: 30, 
        backgroundColor: 'white',
        borderWidth: 7,
        borderColor: '#1A2B3C',
        justifyContent: 'center',
        alignItems: 'center',
        top: -50,
    },
    navButtonCenter: {
        width: 80, 
        height: 80,
        borderRadius: 45,
    },
    navButtonPressed: {
        borderColor: 'white',
    },
});

export default NavBar;
