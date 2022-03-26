import React from 'react';
import {
    View,
    Text,
    ImageBackground,
    StyleSheet,
    TextInput,
    ScrollView,
    TouchableHighlight,
    SafeAreaView,
    ActivityIndicator
} from "react-native";
import {connect} from "react-redux";
import { Modalize } from 'react-native-modalize'
import { Ionicons } from '@expo/vector-icons';
import JobItem from "../components/JobItem";
import JobItemHorizontal from "../components/JobItemHorizontal";
import Hamburger from "../components/nav/Hamburger";
import {
    sPopularError,
    sPopularJobs,
    sPopularLoading, sRecentError, sRecentJobs,
    sRecentLoading
} from "../store/selectors/AppSelector";
import {loadPopularJobs, loadRecentJobs} from "../store/actions/AppAction";
import Colors from "../constants/colors";
import ShowAlert from "../components/Alert";
import {sUserData} from "../store/selectors/UserSelector";

class Home extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            searchInput: ''
        }
    }

    componentDidMount() {
        this.props.loadPopularJobs();
        this.props.loadRecentJobs();
    }

    render() {
        const {navigation, popularJobs, popularLoading, popularError, recentJobs, recentLoading, recentError,
            user} = this.props;

        const isError = popularError || recentError;
        const isLoading = popularLoading || recentLoading;

        const searchInputHandler = (enteredText) => {
            this.setState({searchInput: enteredText});
        }

        const locationButtonHandler = () => {
            console.log('location click');
        }

        const handleSearch = (event) => {
            if (this.state.searchInput) {
                navigation.navigate('JobList', {
                    city: this.state.searchInput
                });
            } else {
                ShowAlert('Attenzione', 'Ricerca non valida. Inserire un testo valido!', 'Ok',
                    () => console.log('wrong search'));
            }
        };

        return (
                <ImageBackground
                    source={require('../assets/images/banner.png')}
                    style={styles.imageBackground}
                >
                <SafeAreaView>
                    <Hamburger navigation={navigation}/>

                    <Text style={styles.welcomeText}>
                        Bentornato {user.name},
                    </Text>

                    <Text style={styles.welcomeWorkText}>
                        Trova il lavoro perfetto
                    </Text>

                    <View style={styles.searchBox}>
                        <View style={styles.searchInputBox}>
                            <Ionicons name="ios-search" size={24} color="grey" />
                            <TextInput
                                placeholder="Cerca un nuovo lavoro..."
                                placeholderTextColor="gray"
                                style={styles.searchInput}
                                maxLength={30}
                                autoCorrect={false}
                                onSubmitEditing={handleSearch}
                                onChangeText={searchInputHandler}
                            />
                        </View>

                        <TouchableHighlight style={styles.location} onPress={locationButtonHandler}>
                            <Ionicons name="location-outline" size={24} color="black" />
                        </TouchableHighlight>
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
                                Popolari
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
                                        onPress={ () => navigation.navigate('JobDetails', {
                                            jobId: job.id
                                        }) }

                                    />
                                ))}
                            </ScrollView>

                            <View style={styles.recentJob}>
                                <Text style={styles.textList}>
                                    Recenti
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
                                        onPress={ () => navigation.navigate('JobDetails', {
                                            jobId: job.id
                                        }) }
                                    />
                                ))}
                            </View>

                        </>
                    )}

                    {isLoading && !isError && (<ActivityIndicator color={Colors.primary} size="large"/>)}
                    {isError && (<Text>Oops.. Qualcosa è andato storto!</Text>)}
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

// componente che permette la connessione tra un componente react e redux
const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home);
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
        color: 'white'
    },
    welcomeWorkText: {
        paddingHorizontal: 20,
        fontSize: 25,
        marginTop: 10,
        fontFamily: 'MS-Bold',
        color: 'white'
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
        backgroundColor:"white",
        paddingHorizontal:20,
        borderRadius:10,
    },
    searchInput: {
        fontFamily:"MS-Medium",
        paddingHorizontal:10,
        fontSize:12
    },
    location: {
        alignItems:"center",
        width:"15%",
        backgroundColor:"white",
        borderRadius:10,
        marginLeft:5,
        padding:10,
        justifyContent:"center"
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
        color:"#4f4a4a",
        paddingLeft:22,
    },
    popularJob: {paddingLeft:20},
    recentJob: {marginTop:25}
})