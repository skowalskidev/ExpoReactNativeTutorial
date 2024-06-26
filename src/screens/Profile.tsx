import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, View, Text, ActivityIndicator, FlatList, Platform, SafeAreaView, TouchableHighlight } from 'react-native';
import { getMoviesFromApiAsync } from '@/utils/api';
import { FadeInView } from '@/components/FadeInView';

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
                <FadeInView style={{}}>
                    <Image source={{ uri: 'https://reactjs.org/logo-og.png' }}
                        style={{ width: 40, height: 40 }} />
                </FadeInView>
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
            <TouchableHighlight
                style={{
                    backgroundColor: Platform.OS === 'ios' ? '#007AFF' : '#3F51B5',
                    borderRadius: 8,
                    paddingVertical: 12,
                    paddingHorizontal: 24,
                    alignItems: 'center',
                }}
                onPress={() => navigation.goBack()}>
                <Text style={{ color: 'white', fontSize: 18 }}>Back</Text>
            </TouchableHighlight>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
    },
    view: {
        // paddingBottom: 40,
        paddingLeft: 10,
        paddingRight: 10,
        gap: Platform.OS === 'ios' ? 20 : 40,
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