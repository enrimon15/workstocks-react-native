import React, {useEffect} from 'react';
import {FlatList, ActivityIndicator, StyleSheet} from 'react-native';
import Colors from "../constants/colors";
import JobItem from "../components/JobItem";
import {useNavigation} from "@react-navigation/native";
import {useDispatch, useSelector} from "react-redux";
import {
    sApplications, sApplicationsError, sApplicationsLoading,
} from "../store/selectors/AppSelector";
import {loadApplications} from "../store/actions/AppAction";
import {ListOutline} from "../components/ListOutline";
import Error from "../components/Error";
import NoData from "../components/NoData";


const Applications = () => {
    const navigation = useNavigation();

    const applications = useSelector(state => sApplications(state));
    const loading = useSelector(state => sApplicationsLoading(state))
    const error = useSelector(state => sApplicationsError(state));

    const dispatch = useDispatch();

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        dispatch(loadApplications());
    }


    const renderItem = ({ item }) => (
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
    );

    return(
        <ListOutline
            textHeader={'Candidature'}
            navigation={navigation}
        >

            {!loading && !error && applications && applications?.data?.elements?.length > 0 && (
                <FlatList
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