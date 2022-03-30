import React, {useEffect} from 'react';
import {FlatList, ActivityIndicator, StyleSheet} from 'react-native';
import { SwipeRow } from 'react-native-swipe-list-view';
import {useTranslation} from "react-i18next";
import {useNavigation} from "@react-navigation/native";
import {useDispatch, useSelector} from "react-redux";
import {
    sFavorites,
    sFavoritesError,
    sFavoritesLoading
} from "../store/selectors/AppSelector";
import {loadFavorites, removeFavoriteList} from "../store/actions/AppAction";
import ListOutline from "../components/ListOutline";
import Error from "../components/Error";
import NoData from "../components/NoData";
import SwipeButton from "../components/SwipeButton";
import ShowAlert from "../components/Alert";
import JobItem, {jobItemContainer} from "../components/JobItem";
import {Colors} from "../constants/colors";
import {Routes} from "../constants/routes";

export default function Favorites() {
    const { t } = useTranslation();
    const navigation = useNavigation();

    const favorites = useSelector(state => sFavorites(state));
    const loading = useSelector(state => sFavoritesLoading(state))
    const error = useSelector(state => sFavoritesError(state));

    const dispatch = useDispatch();

    useEffect(() => {
        fetchData();
        // quando lo screen è onFocus reload
        const navigationFocusListener = navigation.addListener('focus', () => {
            fetchData();
        });

        // Ritorno la function per fare l'unsubscribe quando ho un unmount dello schermo
        return navigationFocusListener;
    }, []);

    const fetchData = () => {
        dispatch(loadFavorites());
    }

    const deleteFavorite = (jobId) => {
        dispatch(removeFavoriteList(jobId))
    };

    const handleButton = (jobId) => {
        ShowAlert(t('alert.warning'), t('alert.confirmTextFavorite'),
            t('alert.cancel'), () => console.log('delete canceled'), t('alert.ok'),
            () => deleteFavorite(jobId))
    }


    const renderItem = ({ item }) => (
        <SwipeRow
            rightOpenValue={-75}
            disableRightSwipe={true}
            //preview={true}
        >
            <SwipeButton
                containerStyle={jobItemContainer}
                color={Colors.danger}
                icon={'ios-trash-bin-sharp'}
                onPress={() => handleButton(item?.id)}
            />

            <JobItem
                img={item?.company?.photo}
                title={item?.title}
                address={item?.address}
                companyName={item?.company?.name}
                createdAt={item?.createdAt}
                onPress={ () => navigation.navigate(Routes.jobDetails, {
                    jobId: item?.id
                }) }
            />
        </SwipeRow>
    );

    return(
        <ListOutline
            textHeader={t('favorite.title')}
            navigation={navigation}
        >
            {!loading && !error && favorites && favorites?.data?.elements?.length > 0 && (
                <FlatList
                    onRefresh={fetchData}
                    refreshing={loading}
                    data={favorites?.data?.elements}
                    renderItem={renderItem}
                    keyExtractor={item => item?.id}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{paddingBottom: 35}}
                />
            )}

            {!loading && !error && favorites && favorites?.data?.elements?.length <= 0 && (
                <NoData />
            )}

            {loading && !error && (<ActivityIndicator style={styles.spinner} color={Colors.primary} size="large"/>)}
            {error && (<Error onPress={() => fetchData()} />)}

        </ListOutline>
    )
}

const styles = StyleSheet.create({
    spinner: {marginTop: 50},
    deleteContainer: {
        backgroundColor: Colors.danger
    }
});