export const getMoviesFromApiAsync = async () => {
    const response = await fetch(
        'https://reactnative.dev/movies.json',
    );
    const json = await response.json();
    return json.movies;
};
