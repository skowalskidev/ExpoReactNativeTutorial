import React, { useState } from "react";
import { StyleSheet, View, Text, Image, Button } from "react-native";

type Props = {
    name: string;
};

export const Cat = (props: Props) => {
    const [isHungry, setIsHungry] = useState(true);

    return (
        <View>
            <Image
                source={{
                    uri: 'https://reactnative.dev/docs/assets/p_cat1.png',
                }}
                style={styles.image}
            />
            <Text>
                I am {props.name}, and I am {isHungry ? 'hungry' : 'full'}!
            </Text>
            <Button
                onPress={() => {
                    setIsHungry(false);
                }}
                disabled={!isHungry}
                title={isHungry ? 'Give me some food, please!' : 'Thank you!'}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    image: {
        width: 40, height: 40,
    },
});