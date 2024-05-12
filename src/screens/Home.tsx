import React from 'react';
import { StyleSheet, View, Text, Platform, SafeAreaView, Button } from 'react-native';
import Cafe from '@/components/Cafe';
import PizzaTranslator from '@/components/PizzaTranslator';
import GradientText from '@/components/GradientText';
import Divider from '@/components/Divider';

const Home = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.view}>
                <Text style={styles.hero}>Welcome to the {Platform.OS} {Platform.Version} cafe!</Text>
                <GradientText
                    colorStart='#4E54C8'
                    colorEnd='#8F94FB'
                    style={{ fontFamily: 'Inter', fontSize: 24, fontWeight: '600', lineHeight: 32 }}
                >
                    Experience premium
                </GradientText>
                <Divider />
                <Cafe />
                <PizzaTranslator />
            </View>
            <Button
                title="Go to Jane's profile"
                onPress={() =>
                    navigation.navigate('Profile', { name: 'Jane' })
                }
            />
            <Button
                title="Go to Gallery"
                onPress={() =>
                    navigation.navigate('Gallery')
                }
            />
            <Button
                title="Go to Box"
                onPress={() =>
                    navigation.navigate('Box')
                }
            />
            <Button
                title="Go to Theme"
                onPress={() =>
                    navigation.navigate('ThemeModule')
                }
            />
            <Button
                title="Go to DirectManipulation"
                onPress={() =>
                    navigation.navigate('DirectManipulation')
                }
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: '#141421'
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