import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, FlatList, Platform } from 'react-native';
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
        <>
            <View style={{
                paddingTop: Platform.OS === 'ios' ? 40 : 100,
                // paddingBottom: 40,
                paddingLeft: 10,
                paddingRight: 10,
                gap: 20,
            }}>
                <Text style={{ textAlign: 'center' }}>Welcome to the {Platform.OS} {Platform.Version} cafe!</Text>
                <Cafe />
                <PizzaTranslator />
                {isLoading ? (
                    <ActivityIndicator />
                ) : (
                    <FlatList
                        data={data}
                        keyExtractor={({ id }) => id}
                        renderItem={({ item }) => (
                            <Text style={{ color: '#475569' }}>
                                {item.title}, {item.releaseYear}
                            </Text>
                        )}
                    />
                )}
            </View>
            <BigButton />
            {/* <FlatListBasics /> */}
            {/* <SectionListBasics /> */}
        </>
    );
};

export default App;
