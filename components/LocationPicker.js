import {StyleSheet, TouchableHighlight} from 'react-native';
import * as Location from 'expo-location';
import {Ionicons} from "@expo/vector-icons";
import React from "react";
import ShowAlert from "./Alert";

const LocationPicker = ({navigation}) => {
    const [locationPermissionInformation, requestPermission] = Location.useForegroundPermissions();

    const verifyPermissions = async () => {
        if (locationPermissionInformation.status === Location.PermissionStatus.UNDETERMINED) {
            const permissionResponse = await requestPermission();
            return permissionResponse.granted;
        }
        if (locationPermissionInformation.status === Location.PermissionStatus.DENIED) {
            ShowAlert('Attenzione',
                'Hai bisogno di fornire i permessi sulla localizzazione per utilizzare questa funzionalità',
                'Ok',
                () => console.log('Permission denied'));
            return false;
        }

        return true;
    }

    const getPositionHandler = async () => {
        const hasPermission = await verifyPermissions();
        if (!hasPermission) {
            return;
        }
        const location = await  Location.getCurrentPositionAsync();

        navigation.navigate('JobList', {
            lat: location.coords.latitude,
            lon: location.coords.longitude
        });
    }

    return(
        <TouchableHighlight style={styles.location} onPress={getPositionHandler}>
            <Ionicons name="location-outline" size={24} color="black" />
        </TouchableHighlight>
    )
}
export default LocationPicker;

const styles = StyleSheet.create({
    location: {
        alignItems:"center",
        width:"15%",
        backgroundColor:"white",
        borderRadius:10,
        marginLeft:5,
        padding:10,
        justifyContent:"center"
    }
});