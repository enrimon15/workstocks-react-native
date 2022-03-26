import React from 'react';
import {
    View,
    Text,
    ImageBackground,
    Image,
    TouchableOpacity,
} from 'react-native';
import {
    DrawerContentScrollView,
    DrawerItemList,
} from '@react-navigation/drawer';

import { Ionicons, AntDesign } from '@expo/vector-icons';
import Colors from "../../constants/colors";
import {useDispatch, useSelector} from "react-redux";
import {sUserData} from "../../store/selectors/UserSelector";
import {logout} from "../../store/actions/UserAction";

const CustomDrawer = props => {

    const user = useSelector(sUserData);
    const dispatch = useDispatch();

    return (
        <View style={{flex: 1}}>
            <DrawerContentScrollView
                {...props}
                contentContainerStyle={{backgroundColor: Colors.primary}}>
                <View
                    style={{padding: 20}}>
                    <Image
                        resizeMode="contain"
                        source={require('../../assets/images/logo_con_testo.png')}
                        style={{width: "70%", marginBottom: 30}}
                    />
                    <View style={{flexDirection: "row", marginBottom: 5}}>
                        <AntDesign name="user" size={22} color="white" />
                        <Text
                            style={{
                                color: '#fff',
                                fontSize: 18,
                                fontFamily: 'MS-Medium',
                                marginLeft: 5
                            }}>
                            {user.name + ' ' + user.surname}
                        </Text>
                    </View>

                </View>
                <View style={{flex: 1, backgroundColor: '#fff', paddingTop: 30}}>
                    <DrawerItemList {...props} />
                </View>
            </DrawerContentScrollView>
            <View style={{padding: 20, borderTopWidth: 1, borderTopColor: '#ccc'}}>
                <TouchableOpacity
                    onPress={() => {dispatch(logout())}}
                    style={{paddingVertical: 15}}
                >
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Ionicons name="exit-outline" size={22} />
                        <Text
                            style={{
                                fontSize: 15,
                                fontFamily: 'MS-Medium',
                                marginLeft: 5,
                            }}>
                            Logout
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default CustomDrawer;