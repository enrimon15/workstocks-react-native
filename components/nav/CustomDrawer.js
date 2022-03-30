import React from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity, StyleSheet,
} from 'react-native';
import {
    DrawerContentScrollView,
    DrawerItemList,
} from '@react-navigation/drawer';
import { Ionicons, AntDesign } from '@expo/vector-icons';
import {useTranslation} from "react-i18next";
import {useDispatch, useSelector} from "react-redux";
import {sUserData} from "../../store/selectors/UserSelector";
import {logout} from "../../store/actions/UserAction";
import {Colors} from "../../constants/colors";

export default function CustomDrawer(props) {
    const {t} = useTranslation();
    const user = useSelector(sUserData);
    const dispatch = useDispatch();

    return (
        <View style={{flex: 1}}>
            <DrawerContentScrollView
                {...props}
                contentContainerStyle={styles.container}>
                <View
                    style={styles.outline}>
                    <Image
                        resizeMode="contain"
                        source={require('../../assets/images/logo_con_testo.png')}
                        style={styles.logo}
                    />
                    <View style={styles.user}>
                        <AntDesign name="user" size={22} color={Colors.light} />
                        <Text
                            style={styles.userText}>
                            {user.name + ' ' + user.surname}
                        </Text>
                    </View>

                </View>
                <View style={styles.drawerList}>
                    <DrawerItemList {...props} />
                </View>
            </DrawerContentScrollView>
            <View style={styles.logoutContainer}>
                <TouchableOpacity
                    onPress={() => {dispatch(logout())}}
                    style={styles.logoutButton}
                >
                    <View style={styles.logoutTextHeader}>
                        <Ionicons name="exit-outline" size={22} color={Colors.dark} />
                        <Text
                            style={styles.logoutText}>
                            {t('auth.logout')}
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.primary
    },
    outline: {
        padding: 20
    },
    logo: {
        width: "70%",
        marginBottom: 30
    },
    user: {
        flexDirection: "row",
        marginBottom: 5
    },
    userText: {
        color: Colors.light,
        fontSize: 18,
        fontFamily: 'MS-Medium',
        marginLeft: 5
    },
    drawerList: {
        flex: 1,
        backgroundColor: Colors.light,
        paddingTop: 30
    },
    logoutContainer: {
        padding: 20,
        borderTopWidth: 1,
        borderTopColor: '#ccc'
    },
    logoutButton: {
        paddingVertical: 15
    },
    logoutTextHeader: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    logoutText: {
        fontSize: 15,
        fontFamily: 'MS-Medium',
        marginLeft: 5,
    }
});