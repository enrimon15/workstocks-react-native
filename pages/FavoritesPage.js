import React, {useEffect} from 'react';
import {FlatList, ActivityIndicator, StyleSheet} from 'react-native';
import Colors from "../constants/colors";
import JobItem from "../components/JobItem";
import {useNavigation} from "@react-navigation/native";
import {useDispatch, useSelector} from "react-redux";
import {
    sFavorites,
    sFavoritesError,
    sFavoritesLoading
} from "../store/selectors/AppSelector";
import {loadFavorites} from "../store/actions/AppAction";
import {ListOutline} from "../components/ListOutline";
import Error from "../components/Error";
import NoData from "../components/NoData";

const Favorites = () => {
    const navigation = useNavigation();

    const favorites = useSelector(state => sFavorites(state));
    const loading = useSelector(state => sFavoritesLoading(state))
    const error = useSelector(state => sFavoritesError(state));

    const dispatch = useDispatch();

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        dispatch(loadFavorites());
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
            textHeader={'Offerte Salvate'}
            navigation={navigation}
        >
            {!loading && !error && favorites && favorites?.data?.elements?.length > 0 && (
                <FlatList
                    data={favorites?.data?.elements}
                    renderItem={renderItem}
                    keyExtractor={item => item?.id}
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
export default Favorites;

const styles = StyleSheet.create({
    spinner: {marginTop: 50}
});