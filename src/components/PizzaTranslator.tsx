import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

const PizzaTranslator = () => {
    const [text, setText] = useState('');
    return (
        <View style={{ padding: 10 }}>
            <TextInput
                style={styles.input}
                placeholder="Type here to translate!"
                onChangeText={newText => setText(newText)}
                defaultValue={text}
                placeholderTextColor={'#475569'}
            />
            <Text style={styles.text}>
                {text
                    .split(' ')
                    .map(word => word && '🍕')
                    .join(' ')}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        color: 'white',
        height: 40,
    },
    text: {
        padding: 10,
        fontSize: 42,
    },
    image: {
        width: 40, height: 40,
    },
});

export default PizzaTranslator;