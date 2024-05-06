import * as React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';

const MyButton = React.forwardRef<View, { label: string }>((props, ref) => (
    <View {...props} ref={ref} style={{ marginTop: 50 }}>
        <Text>{props.label}</Text>
    </View>
));

export default function DirectManipulation() {
    return (
        <TouchableOpacity>
            <MyButton label="Press me!" />
        </TouchableOpacity>

    );
}
