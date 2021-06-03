import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { FontAwesome5, FontAwesome } from '@expo/vector-icons';
// import { useFonts, Pacifico_400Regular } from '@expo-google-fonts/pacifico';

const TopBar = () => {
    // const [fontsLoaded] = useFonts({
    //     Pacifico_400Regular,
    // });

    return (
        <>
            {/* <View>
                <Text style={styles.heading}>adda24</Text>
            </View> */}
            <View style={styles.container}>
                <FontAwesome5 name="fire" size={20} color="#F06795" />
                <FontAwesome name="comments" size={20} color="#5c5c5c" />
                <FontAwesome name="user" size={20} color="#5c5c5c" />
            </View></>
    );
};

export default TopBar;

const styles = StyleSheet.create({
    // heading: {
    //     fontSize: 24,
    //     fontFamily: 'Pacifico_400Regular',
    //     textAlign: 'center',
    //     fontSize: 20,
    //     paddingVertical: 5,
    // },
    container: {
        height: 65,
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 15,
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.12,
        shadowRadius: 5.46,
        elevation: 9,
    },
})