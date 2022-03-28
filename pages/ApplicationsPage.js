import React, {useEffect} from 'react';
import {FlatList, ActivityIndicator, StyleSheet} from 'react-native';
import Colors from "../constants/colors";
import JobItem, {jobItemContainer} from "../components/JobItem";
import {useNavigation} from "@react-navigation/native";
import {useDispatch, useSelector} from "react-redux";
import {
    sApplications, sApplicationsError, sApplicationsLoading,
} from "../store/selectors/AppSelector";
import {loadApplications, removeApplication} from "../store/actions/AppAction";
import {ListOutline} from "../components/ListOutline";
import Error from "../components/Error";
import NoData from "../components/NoData";
import SwipeButton from "../components/SwipeButton";
import {SwipeRow} from "react-native-swipe-list-view";
import ShowAlert from "../components/Alert";


const Applications = () => {
    const navigation = useNavigation();

    const applications = useSelector(state => sApplications(state));
    const loading = useSelector(state => sApplicationsLoading(state))
    const error = useSelector(state => sApplicationsError(state));

    const dispatch = useDispatch();

    useEffect(() => {
        fetchData();
        // quando lo screen è onFocus
        const navigationFocusListener = navigation.addListener('focus', () => {
            fetchData();
        });

        // Ritorno la function per fare l'unsibscribe quando ho un unmount dello schermo
        return navigationFocusListener;
    }, []);

    const fetchData = () => {
        dispatch(loadApplications());
    }

    const deleteApplication = (jobId) => {
        dispatch(removeApplication(jobId))
    };

    const handleButton = (jobId) => {
        ShowAlert('Attenzione', 'Stai per eliminare una candidatura. Vuoi proseguire?',
            'Annulla', () => console.log('delete canceled'), 'Ok',
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
                onPress={ () => navigation.navigate('JobDetails', {
                    jobId: item?.id
                }) }
            />
        </SwipeRow>
    );

    return(
        <ListOutline
            textHeader={'Candidature'}
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