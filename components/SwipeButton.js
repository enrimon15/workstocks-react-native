import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import {Colors} from "../constants/colors";

export default function SwipeButton({containerStyle, color, icon, onPress}) {
    return(
        <View style={}>
            <View style={[containerStyle, {backgroundColor: color}]}>
                <TouchableOpacity
                    style={styles.backRightBtn}
                    onPress={onPress}
                >
                    <Ionicons name={icon} size={24} color={Colors.light} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 1,
        flex: 1
    },
    rowBack: {
        flexDirection:"row",
        backgroundColor: Colors.danger,
        padding:20,
        marginHorizontal:20,
        borderRadius:15,
        alignItems:"center",
        justifyContent: "space-between",
        marginTop:20,
        flex: 1
    },
    backRightBtn: {
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        right: 20
    }
});