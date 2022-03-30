import React from "react";
import {StyleSheet, TouchableHighlight} from 'react-native';
import * as Location from 'expo-location';
import {Ionicons} from "@expo/vector-icons";
import ShowAlert from "./Alert";
import {useTranslation} from "react-i18next";
import {Routes} from "../constants/routes";
import {Colors} from "../constants/colors";

export default function LocationPicker({navigation}) {
    const {t} = useTranslation();
    const [locationPermissionInformation, requestPermission] = Location.useForegroundPermissions();

    const showErrorLocation = () => {
        ShowAlert(t('error.warning'),
            t('error.localization'),
            t('error.ok'),
            () => console.log('Permission denied'));
    }

    const verifyPermissions = async () => {
        if (locationPermissionInformation.status === Location.PermissionStatus.UNDETERMINED) {
            const permissionResponse = await requestPermission();
            return permissionResponse.granted;
        }
        if (locationPermissionInformation.status === Location.PermissionStatus.DENIED) {
            return false;
        }

        return true;
    }

    const getPositionHandler = async () => {
        const hasPermission = await verifyPermissions();
        if (!hasPermission) {
            showErrorLocation();
            return;
        }
        const location = await  Location.getCurrentPositionAsync();

        navigation.navigate(Routes.jobList, {
            lat: location.coords.latitude,
            lon: location.coords.longitude
        });
    }

    return(
        <TouchableHighlight style={styles.location} onPress={getPositionHandler}>
            <Ionicons name="location-outline" size={24} color={Colors.dark} />
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    location: {
        alignItems:"center",
        width:"15%",
        backgroundColor:Colors.light,
        borderRadius:10,
        marginLeft:5,
        padding:10,
        justifyContent:"center"
    }
});