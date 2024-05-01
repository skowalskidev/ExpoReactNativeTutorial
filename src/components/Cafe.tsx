import { View } from "react-native";
import { Cat } from "./Cat";

const Cafe = () => {
    return (
        <View>
            <Cat name="Maru" />
            <Cat name="Jellylorum" />
            <Cat name="Spot" />
        </View>
    );
};

export default Cafe;