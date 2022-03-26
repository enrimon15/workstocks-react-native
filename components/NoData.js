import {StyleSheet, Image, View, Text, Dimensions} from 'react-native';
import Colors from "../constants/colors";

const {height} = Dimensions.get("screen");
const height_no_Data = height * 0.3;

const NoData = () => {

    return(
        <View style={styles.container}>
            <Image
                source={require('../assets/images/nodata.png')}
                style={styles.image}
                resizeMode="contain"
            />
            <Text style={styles.text}>Dati non trovati!</Text>
        </View>
    )
}
export default NoData;

const styles = StyleSheet.create({
    container: {
        width: "100%",
        position: 'absolute',
        bottom: 50,
        alignItems: "center"
    },
    image: {
        alignSelf: "center",
        height: height_no_Data
    },
    text: {
        marginTop: 20,
        fontFamily: "MS-Bold",
        color: Colors.accent
    }
});