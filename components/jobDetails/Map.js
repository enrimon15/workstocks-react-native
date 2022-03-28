import MapView, {Marker} from "react-native-maps";
import {View, StyleSheet} from 'react-native';

export default function Map({lat, lng, city, companyName}) {

    const coords = {
        latitude: lat,
        longitude: lng
    }

    const region = {
        ...coords,
        latitudeDelta: 0.09,
        longitudeDelta: 0.04
    };

    if (region.latitude && region.longitude) {
        return (
            <View style={styles.container}>
                <MapView initialRegion={region} style={styles.map}>
                    <Marker title={city} description={companyName} coordinate={coords} />
                </MapView>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30
    },
    map: {
        width: "100%",
        height: 300,
    },
});