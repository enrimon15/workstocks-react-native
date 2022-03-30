import React from 'react';
import MapView, {Marker} from "react-native-maps";
import {StyleSheet} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {Colors} from "../../constants/colors";

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

    if (!region.latitude || !region.longitude) {
        return <></>;
    }

    return (
        <Animatable.View animation={'fadeIn'} style={styles.container}>
            <MapView initialRegion={region} style={styles.map}>
                <Marker title={city} description={companyName} coordinate={coords} />
            </MapView>
        </Animatable.View>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.light,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,
        marginHorizontal: 10
    },
    map: {
        width: "100%",
        height: 280,
    },
});