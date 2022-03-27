import {StyleSheet, View, TouchableOpacity} from 'react-native';
import Colors from "../constants/colors";
import { Ionicons } from '@expo/vector-icons';

const SwipeButton = ({containerStyle, color, icon, onPress}) => {



    return(
        <View style={{marginVertical: 1, flex: 1}}>
            <View style={[containerStyle, {backgroundColor: color}]}>
                <TouchableOpacity
                    style={[styles.backRightBtn, styles.backRightBtnRight]}
                    onPress={onPress}
                >
                    <Ionicons name={icon} size={24} color="white" />
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default SwipeButton;

const styles = StyleSheet.create({
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
        position: 'absolute'
    },
    backRightBtnRight: {
        right: 20,
    }
});