import React from "react";
import { Text, TextProps } from "react-native";
import MaskedView from "@react-native-masked-view/masked-view";
import { LinearGradient } from "expo-linear-gradient";

interface GradientTextProps extends TextProps {
    children: React.ReactNode;
    colorStart: string;
    colorEnd: string;
}

const GradientText: React.FC<GradientTextProps> = (props: GradientTextProps) => {
    return (
        <MaskedView maskElement={<Text {...props} />}>
            <LinearGradient
                colors={[props.colorStart, props.colorEnd]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
            >
                <Text {...props} style={[props.style, { opacity: 0 }]} />
            </LinearGradient>
        </MaskedView>
    );
};

export default GradientText;