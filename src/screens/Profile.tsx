import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, View, Text, ActivityIndicator, FlatList, Platform, SafeAreaView } from 'react-native';
import BigButton from '@/components/BigButton.native';
import Cafe from '@/components/Cafe';
import PizzaTranslator from '@/components/PizzaTranslator';
import { getMoviesFromApiAsync } from '@/utils/api';

type Movie = {
    id: string;
    title: string;
    releaseYear: string;
};

const Profile = ({ navigation, route }) => {
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
                <Text>This is {route.params.name}'s profile</Text>
                <Image style={styles.image} source={require('../../assets/icon.png')} />
                <Image source={{ uri: 'https://reactjs.org/logo-og.png' }}
                    style={{ width: 40, height: 40 }} />
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
    movies: {
        color: '#475569'
    },
    image: {
        width: 50,
        height: 50,
    }
});

export default Profile;