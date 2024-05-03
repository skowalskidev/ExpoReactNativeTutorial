import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, View, Text, ActivityIndicator, FlatList, Platform, SafeAreaView } from 'react-native';
import Cafe from './src/components/Cafe';
import PizzaTranslator from './src/components/PizzaTranslator';
import { getMoviesFromApiAsync } from './src/utils/api';
import BigButton from './src/components/BigButton.native';

type Movie = {
    id: string;
    title: string;
    releaseYear: string;
};

const App = () => {
    const [isLoading, setLoading] = useState(false);
    const [data, setData] = useState<Movie[]>([]);

    const getMovies = async () => {
        try {
            setLoading(true);
            const movies = await getMoviesFromApiAsync();
            setData(movies);
        } catch (error) {
            console.error('Error fetching movies:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getMovies();
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.view}>
                <Text style={styles.hero}>Welcome to the {Platform.OS} {Platform.Version} cafe!</Text>
                {/* <Image style={styles.image} source={require('./assets/icon.png')} /> */}
                {/* <Image source={{ uri: 'https://reactjs.org/logo-og.png' }}
                    style={{ width: 40, height: 40 }} /> */}
                <Cafe />
                <PizzaTranslator />
                {isLoading ? (
                    <ActivityIndicator />
                ) : (
                    <FlatList
                        data={data}
                        keyExtractor={({ id }) => id}
                        renderItem={({ item }) => (
                            <Text style={styles.movies}>
                                {item.title}, {item.releaseYear}
                            </Text>
                        )}
                    />
                )}
            </View>
            <BigButton />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: 'black',
    },
    view: {
        paddingTop: Platform.OS === 'ios' ? 40 : 100,
        // paddingBottom: 40,
        paddingLeft: 10,
        paddingRight: 10,
        gap: 20,
    },
    hero: {
        textAlign: 'center',
        color: 'white',
    },
    movies: {
        color: '#475569'
    },
    image: {
        width: 50,
        height: 50,
    }
});

export default App;
