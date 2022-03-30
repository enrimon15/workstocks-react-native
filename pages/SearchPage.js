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
import * as StringUtils from "../util/StringUtils";
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

    const currentPage = jobList?.data?.response?.pageNumber;
    const totalPages = jobList?.data?.response?.totalPages;

    const dispatch = useDispatch();

    useEffect(() => {
        fetchData(1);
    }, []);

    const fetchData = (page) => {
        if (lat && lon) {
            dispatch(loadSearchJobsByCoords(lat, lon, page));
        } else {
            dispatch(loadSearchJobs(city, page));
        }
    }

    const loadMoreJobs = () => {
        const newPage = currentPage + 1;
        fetchData(newPage);
    };

    const footerLoading = () => {
        return (<ActivityIndicator style={{marginVertical: 20}} color={Colors.primary}/>);
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
                    onRefresh={() => fetchData(1)}
                    refreshing={loading}
                    data={jobList?.data?.elements}
                    renderItem={renderItem}
                    keyExtractor={item => item?.id}
                    onEndReachedThreshold={0.2}
                    onEndReached={currentPage !== totalPages ? loadMoreJobs : null}
                    ListFooterComponent={currentPage !== totalPages ? footerLoading : null}
                />
            )}

            {!loading && !error && jobList && jobList?.data?.elements?.length <= 0 && (
                <NoData />
            )}

            {loading && !error && (<ActivityIndicator style={styles.spinner} color={Colors.primary} size="large"/>)}
            {error && (<Error onPress={() => fetchData(1)} />)}

        </ListOutline>
    )
}

const styles = StyleSheet.create({
    spinner: {marginTop: 50}
});