import {StyleSheet, Image, View, Text, Dimensions} from 'react-native';
import {Colors} from "../constants/colors";
import {useTranslation} from "react-i18next";

const {height} = Dimensions.get("screen");
const height_no_Data = height * 0.3;

export default function NoData() {
    const {t} = useTranslation();

    return(
        <View style={styles.container}>
            <Image
                source={require('../assets/images/nodata.png')}
                style={styles.image}
                resizeMode="contain"
            />
            <Text style={styles.text}>{t('error.noData')}</Text>
        </View>
    )
}

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