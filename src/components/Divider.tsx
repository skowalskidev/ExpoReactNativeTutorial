import React from "react";
import { Text, TextProps, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";


const Divider: React.FC = () => {
    return (
        <View style={{ flexDirection: "row", width: '100%', paddingHorizontal: 40 }}>
            <LinearGradient
                style={{ width: '100%', height: 0.386 }}
                colors={['#D8D8D800', '#D8D8D8F0', '#D8D8D800']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
            >
            </LinearGradient>
        </View>
    );
};

export default Divider;