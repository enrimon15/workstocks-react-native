import React, {useEffect} from 'react';
import {View, Text, Image, SafeAreaView, FlatList, ActivityIndicator, StyleSheet} from 'react-native';
import {Ionicons} from "@expo/vector-icons";
import Colors from "../constants/colors";
import Back from "../components/Back";
import JobItem from "../components/JobItem";
import {useNavigation, useRoute} from "@react-navigation/native";
import {useDispatch, useSelector} from "react-redux";
import {sSearch, sSearchError, sSearchLoading} from "../store/selectors/AppSelector";
import {loadSearchJobs} from "../store/actions/AppAction";

const Search = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const city = route.params.city;

    const jobList = useSelector(state => sSearch(state));
    const loading = useSelector(state => sSearchLoading(state));
    const error = useSelector(state => sSearchError(state));

    const dispatch = useDispatch();

    useEffect(() => {
        console.log("dispatch");
        dispatch(loadSearchJobs(city));
    }, []);


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
        <View style={{
            backgroundColor:"white",
            flex:1
        }}>
            <View style={{
                backgroundColor: Colors.primary,
                height:"28%",
                borderBottomLeftRadius:30,
                borderBottomRightRadius:30,
                paddingHorizontal:20,
                shadowColor: "#84A4FF",
                shadowOffset: {
                    width: 0,
                    height:0,
                },
                shadowOpacity: 10,
                shadowRadius: 20,
                elevation: 2, // Android
            }}>
                <SafeAreaView>
                <Back navigation={navigation} iconColor={"white"} />
                <View style={{
                    flexDirection:"row",
                    alignItems:"center",
                    marginTop:25,
                    width:"100%"
                }}>
                    <View style={{width:"50%", flexDirection: "row"}}>
                        <Ionicons name="location-outline" size={28} color="white" />
                        <Text style={{
                            fontSize:28,
                            color:"#FFF",
                            marginLeft: 5,
                            fontFamily:"MS-Medium"
                        }}>{city}</Text>
                    </View>
                    <View style={{width:"50%",alignItems:"flex-end"}}>
                        <Image
                            source={require('../assets/images/undraw.png')}
                            style={{height:100,width:100}}
                            resizeMode="contain"
                        />
                    </View>
                </View>
                </SafeAreaView>
            </View>


            {!loading && !error && jobList && (
                <FlatList
                    data={jobList?.data?.elements}
                    renderItem={renderItem}
                    keyExtractor={item => item?.id}
                />
            )}

            {loading && !error && (<ActivityIndicator style={{marginTop: 50}} color={Colors.primary} size="large"/>)}
            {error && (<Text>Oops.. Qualcosa è andato storto!</Text>)}
        </View>
    )
}
export default Search;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50,
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
});