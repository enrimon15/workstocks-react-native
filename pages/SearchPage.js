import React, {useEffect} from 'react';
import {FlatList, ActivityIndicator, StyleSheet} from 'react-native';
import Colors from "../constants/colors";
import JobItem from "../components/JobItem";
import {useNavigation, useRoute} from "@react-navigation/native";
import {useDispatch, useSelector} from "react-redux";
import {sSearch, sSearchError, sSearchLoading} from "../store/selectors/AppSelector";
import {loadSearchJobs} from "../store/actions/AppAction";
import {StringUtils} from "../util/StringUtils";
import {ListOutline} from "../components/ListOutline";
import Error from "../components/Error";
import NoData from "../components/NoData";

const Search = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const city = route.params.city;

    const jobList = useSelector(state => sSearch(state));
    const loading = useSelector(state => sSearchLoading(state));
    const error = useSelector(state => sSearchError(state));

    const dispatch = useDispatch();

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        dispatch(loadSearchJobs(city));
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
            textHeader={StringUtils.capitalize(city)}
            titleIcon={'location-outline'}
            navigation={navigation}
        >
            {!loading && !error && jobList && jobList?.data?.elements?.length > 0 && (
                <FlatList
                    data={jobList?.data?.elements}
                    renderItem={renderItem}
                    keyExtractor={item => item?.id}
                />
            )}

            {!loading && !error && jobList && jobList?.data?.elements?.length <= 0 && (
                <NoData />
            )}

            {loading && !error && (<ActivityIndicator style={styles.spinner} color={Colors.primary} size="large"/>)}
            {error && (<Error onPress={() => fetchData()} />)}

        </ListOutline>
    )
}
export default Search;

const styles = StyleSheet.create({
    spinner: {marginTop: 50}
});