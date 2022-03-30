import React, {useEffect} from 'react';
import {FlatList, ActivityIndicator, StyleSheet} from 'react-native';
import {useTranslation} from "react-i18next";
import {useNavigation, useRoute} from "@react-navigation/native";
import {useDispatch, useSelector} from "react-redux";
import {sSearch, sSearchError, sSearchLoading} from "../store/selectors/AppSelector";
import {loadSearchJobs, loadSearchJobsByCoords} from "../store/actions/AppAction";
import JobItem from "../components/JobItem";
import ListOutline from "../components/ListOutline";
import Error from "../components/Error";
import NoData from "../components/NoData";
import {StringUtils} from "../util/StringUtils";
import {Colors} from "../constants/colors";
import {Routes} from "../constants/routes";

export default function Search() {
    const {t} = useTranslation();
    const navigation = useNavigation();
    const route = useRoute();

    const {city, lat, lon} = route.params;

    const jobList = useSelector(state => sSearch(state));
    const loading = useSelector(state => sSearchLoading(state));
    const error = useSelector(state => sSearchError(state));

    const dispatch = useDispatch();

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        if (lat && lon) {
            dispatch(loadSearchJobsByCoords(lat, lon));
        } else {
            dispatch(loadSearchJobs(city));
        }
    }


    const renderItem = ({ item }) => (
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
    );

    return(
        <ListOutline
            textHeader={(lat && lon) ? t('search.aroundMe') : StringUtils.capitalize(city)}
            titleIcon={'location-outline'}
            navigation={navigation}
        >
            {!loading && !error && jobList && jobList?.data?.elements?.length > 0 && (
                <FlatList
                    onRefresh={fetchData}
                    refreshing={loading}
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

const styles = StyleSheet.create({
    spinner: {marginTop: 50}
});