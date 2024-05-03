import React from 'react';
import { TouchableHighlight, Text, Platform } from 'react-native';

const BigButton = () => {
    return (
        <TouchableHighlight
            style={{
                backgroundColor: Platform.OS === 'ios' ? '#007AFF' : '#3F51B5',
                borderRadius: 8,
                paddingVertical: 12,
                paddingHorizontal: 24,
                alignItems: 'center',
            }}
            onPress={() => console.log('ios Button pressed')}>
            <Text style={{ color: 'white', fontSize: 18 }}>Press Me</Text>
        </TouchableHighlight>
    );
};

export default BigButton;
