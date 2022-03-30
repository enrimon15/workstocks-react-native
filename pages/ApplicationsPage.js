import React, {useEffect} from 'react';
import {FlatList, ActivityIndicator, StyleSheet} from 'react-native';
import {SwipeRow} from "react-native-swipe-list-view";
import JobItem, {jobItemContainer} from "../components/JobItem";
import {useNavigation} from "@react-navigation/native";
import {useDispatch, useSelector} from "react-redux";
import {
    sApplications, sApplicationsError, sApplicationsLoading,
} from "../store/selectors/AppSelector";
import {loadApplications, removeApplication} from "../store/actions/AppAction";
import ListOutline from "../components/ListOutline";
import Error from "../components/Error";
import NoData from "../components/NoData";
import SwipeButton from "../components/SwipeButton";
import ShowAlert from "../components/Alert";
import {Colors} from "../constants/colors";
import {useTranslation} from "react-i18next";
import {Routes} from "../constants/routes";


const Applications = () => {
    const {t} = useTranslation();
    const navigation = useNavigation();

    const applications = useSelector(state => sApplications(state));
    const loading = useSelector(state => sApplicationsLoading(state))
    const error = useSelector(state => sApplicationsError(state));

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
        dispatch(loadApplications());
    }

    const deleteApplication = (jobId) => {
        dispatch(removeApplication(jobId))
    };

    const handleButton = (jobId) => {
        ShowAlert(t('alert.warning'), t('alert.confirmTextApplication'),
            t('alert.cancel'), () => console.log('delete canceled'), t('alert.ok'),
            () => deleteApplication(jobId))
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
            textHeader={t('application.title')}
            navigation={navigation}
        >

            {!loading && !error && applications && applications?.data?.elements?.length > 0 && (
                <FlatList
                    onRefresh={fetchData}
                    refreshing={loading}
                    data={applications?.data?.elements}
                    renderItem={renderItem}
                    keyExtractor={item => item?.id}
                />
            )}

            {!loading && !error && applications && applications?.data?.elements?.length <= 0 && (
                <NoData />
            )}

            {loading && !error && (<ActivityIndicator style={styles.spinner} color={Colors.primary} size="large"/>)}
            {error && (<Error onPress={() => fetchData()} />)}

        </ListOutline>
    )
}
export default Applications;

const styles = StyleSheet.create({
    spinner: {marginTop: 50}
});