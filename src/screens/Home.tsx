import React from 'react';
import { StyleSheet, View, Text, Platform, SafeAreaView, Button } from 'react-native';
import BigButton from '@/components/BigButton.native';
import Cafe from '@/components/Cafe';
import PizzaTranslator from '@/components/PizzaTranslator';

const Home = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.view}>
                <Text style={styles.hero}>Welcome to the {Platform.OS} {Platform.Version} cafe!</Text>
                <Cafe />
                <PizzaTranslator />
            </View>
            <Button
                title="Go to Jane's profile"
                onPress={() =>
                    navigation.navigate('Profile', { name: 'Jane' })
                }
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
    },
    view: {
        paddingLeft: 10,
        paddingRight: 10,
        gap: 20,
    },
    hero: {
        textAlign: 'center',
    },
});

export default Home;