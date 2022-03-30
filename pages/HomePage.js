import React from 'react';
import {
    View,
    Text,
    ImageBackground,
    StyleSheet,
    TextInput,
    ScrollView,
    SafeAreaView,
    ActivityIndicator
} from "react-native";
import {connect} from "react-redux";
import {withTranslation} from "react-i18next";
import { Modalize } from 'react-native-modalize'
import { Ionicons } from '@expo/vector-icons';
import {
    sPopularError,
    sPopularJobs,
    sPopularLoading, sRecentError, sRecentJobs,
    sRecentLoading
} from "../store/selectors/AppSelector";
import {sUserData} from "../store/selectors/UserSelector";
import {loadPopularJobs, loadRecentJobs} from "../store/actions/AppAction";
import JobItem from "../components/JobItem";
import JobItemHorizontal from "../components/JobItemHorizontal";
import Hamburger from "../components/nav/Hamburger";
import ShowAlert from "../components/Alert";
import Error from "../components/Error";
import LocationPicker from "../components/LocationPicker";
import {Colors} from "../constants/colors";
import {Routes} from "../constants/routes";

class Home extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            searchInput: ''
        }
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData = () => {
        this.props.loadPopularJobs();
        this.props.loadRecentJobs();
    }

    render() {
        const {navigation, popularJobs, popularLoading, popularError, recentJobs, recentLoading, recentError,
            user, t} = this.props;

        const isError = popularError || recentError;
        const isLoading = popularLoading || recentLoading;

        const searchInputHandler = (enteredText) => {
            this.setState({searchInput: enteredText});
        }

        const handleSearch = (event) => {
            if (this.state.searchInput) {
                navigation.navigate(Routes.jobList, {
                    city: this.state.searchInput
                });
            } else {
                ShowAlert(t('error.warning'), t('error.search'), t('error.ok'),
                    () => console.log('wrong search'));
            }
        };

        const goToDetails = (jobId) => {
            navigation.navigate(Routes.jobDetails, {
                jobId: jobId
            })
        }

        return (
                <ImageBackground
                    source={require('../assets/images/banner.png')}
                    style={styles.imageBackground}
                >
                <SafeAreaView>
                    <Hamburger navigation={navigation}/>

                    <Text style={styles.welcomeText}>
                        {t('home.welcome')  + ' ' + user.name},
                    </Text>

                    <Text style={styles.welcomeWorkText}>
                        {t('home.title')}
                    </Text>

                    <View style={styles.searchBox}>
                        <View style={styles.searchInputBox}>
                            <Ionicons name="ios-search" size={24} color="grey" />
                            <TextInput
                                clearButtonMode={'while-editing'}
                                placeholder={t('home.searchNewJob')}
                                placeholderTextColor="gray"
                                style={styles.searchInput}
                                maxLength={30}
                                autoCorrect={false}
                                onSubmitEditing={handleSearch}
                                onChangeText={searchInputHandler}
                            />
                        </View>

                        <LocationPicker navigation={navigation}/>
                    </View>
                </SafeAreaView>

                <Modalize
                    handleStyle={styles.modalButton}
                    modalStyle={styles.modalList}
                    alwaysOpen={550}
                    scrollViewProps={{
                        showsVerticalScrollIndicator:false,
                    }}
                >

                    {!isLoading && !isError && (
                        <>
                            <Text style={styles.textList}>
                                {t('home.popular')}
                            </Text>

                            <ScrollView
                                horizontal
                                showsHorizontalScrollIndicator={false}
                                style={styles.popularJob}
                            >
                                {popularJobs && popularJobs?.data?.map((job, i) => (
                                    <JobItemHorizontal
                                        key={i}
                                        img={job.company.photo}
                                        title={job.title}
                                        address={job.address}
                                        companyName={job.company.name}
                                        onPress={() => goToDetails(job.id)}

                                    />
                                ))}
                            </ScrollView>

                            <View style={styles.recentJob}>
                                <Text style={styles.textList}>
                                    {t('home.recent')}
                                </Text>

                                {recentJobs && recentJobs?.data?.elements?.map((job, i) => (
                                    <JobItem
                                        key={i}
                                        img={job.company.photo}
                                        title={job.title}
                                        address={job.address}
                                        companyName={job.company.name}
                                        createdAt={job.createdAt}
                                        isNew={true}
                                        onPress={() => goToDetails(job.id)}
                                    />
                                ))}
                            </View>

                        </>
                    )}

                    {isLoading && !isError && (<ActivityIndicator color={Colors.primary} size="large"/>)}
                    {isError && (<Error onPress={() => this.fetchData()} />)}
                </Modalize>

            </ImageBackground>
        )
    }
}

// mappa lo stato come props del componente wrappato dal container
function mapStateToProps(state) {
    return {
        popularJobs: sPopularJobs(state),
        popularLoading: sPopularLoading(state),
        popularError: sPopularError(state),
        recentJobs: sRecentJobs(state),
        recentLoading: sRecentLoading(state),
        recentError: sRecentError(state),
        user: sUserData(state)
    }
}

// mappa lo stato come props del componente wrappato dal container
function mapDispatchToProps(dispatch) {
    return {
        loadPopularJobs() {
            dispatch(loadPopularJobs());
        },
        loadRecentJobs() {
            dispatch(loadRecentJobs());
        }
    }
}

// componente che permette la connessione tra un componente react e i18n
const HomeTranslation = withTranslation()(Home);
// componente che permette la connessione tra un componente react e redux
const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(HomeTranslation);
export default HomeContainer;

const styles = StyleSheet.create({
    imageBackground: {
        width: '100%',
        height: '100%'
    },
    welcomeText: {
        paddingHorizontal: 20,
        fontSize: 14,
        marginTop: 30,
        fontFamily: 'MS-Medium',
        color: Colors.light
    },
    welcomeWorkText: {
        paddingHorizontal: 20,
        fontSize: 25,
        marginTop: 10,
        fontFamily: 'MS-Bold',
        color: Colors.light
    },
    searchBox: {
        flexDirection:"row",
        alignItems:"center",
        width:"100%",
        padding: 20,
        marginVertical:20
    },
    searchInputBox: {
        flexDirection:"row",
        alignItems:"center",
        width:"85%",
        fontFamily: 'MS-Regular',
        padding:10,
        backgroundColor:Colors.light,
        paddingHorizontal:20,
        borderRadius:10,
    },
    searchInput: {
        width: "95%",
        fontFamily:"MS-Medium",
        paddingHorizontal:10,
        fontSize:12
    },
    modalButton: {
        marginTop:30,
        backgroundColor:"#e9e9e9",
        width:80
    },
    modalList: {
        borderTopLeftRadius:60,
        borderTopRightRadius:60,
        paddingTop: 65
    },
    textList: {
        fontFamily:"MS-Bold",
        fontSize:18,
        color: Colors.darkGray,
        paddingLeft:22,
    },
    popularJob: {paddingLeft:20},
    recentJob: {marginTop:25}
});