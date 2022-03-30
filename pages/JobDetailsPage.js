import React from 'react';
import {View, ImageBackground, Text, SafeAreaView, ScrollView, ActivityIndicator,
    Dimensions, StyleSheet} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {StatusBar} from "expo-status-bar";
import {connect} from "react-redux";
import {
    sApplicationsError,
    sFavoritesError,
    sJobDetail,
    sJobDetailError,
    sJobDetailLoading
} from "../store/selectors/AppSelector";
import {
    addApplication,
    addFavorite,
    loadJobDetails,
    removeFavorite
} from "../store/actions/AppAction";
import CardDetail from "../components/CardDetail";
import InfoDetail from "../components/jobDetails/InfoDetail";
import ApplyButton from "../components/jobDetails/ApplyButton";
import JobOfferHeader from "../components/jobDetails/JobOfferHeader";
import Error from "../components/Error";
import Map from "../components/jobDetails/Map";
import Back from "../components/nav/Back";
import TabDetails, {DESCRIPTION, MAP, SKILLS} from "../components/jobDetails/Tabs";
import Skills from "../components/jobDetails/Skills";
import {Colors} from '../constants/colors';
import {StringUtils} from "../util/StringUtils";
import {withTranslation} from "react-i18next";

const {height} = Dimensions.get("screen");
const height_banner = height * 0.2;

class JobDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tabSelected: DESCRIPTION
        }
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData = () => {
        const { jobId } = this.props.route.params;
        this.props.loadJobDetail(jobId);
    };

    onTabPressed = (tab) => {
        this.setState({tabSelected: tab});
    }

    render(){
        const {navigation, jobDetail, jobLoading, jobError, addApplication, addFavorite, removeFavorite,
            applicationsError, favoritesError, t} = this.props;

        const jobDetailData = jobDetail?.data;
        const isError = (jobError || favoritesError || applicationsError);

        const handleFavorite = () => {
            if (jobDetailData.isFavorite) {
                removeFavorite(jobDetailData.id);
            } else {
                addFavorite(jobDetailData.id);
            }
        };

        const handleApplication = () => {
            if (!jobDetailData.isApplicated) {
                addApplication(jobDetailData.id);
            }
        };

        return(
            <>
                <StatusBar style="dark"/>
                <View style={styles.container}>
                    <SafeAreaView style={styles.safeContainer}>
                        <ImageBackground
                            source={require('../assets/images/detail.png')}
                            style={styles.banner}
                        >
                            <Back navigation={navigation} iconColor={Colors.dark}/>
                        </ImageBackground>
                        {!jobLoading && !isError && (
                            <>
                                <JobOfferHeader
                                    title={jobDetailData?.title}
                                    address={jobDetailData?.address?.city + ', ' + jobDetailData?.address?.country}
                                    handleFavorite={() => handleFavorite()}
                                    isFavorite={(jobDetailData && jobDetailData?.isFavorite)}
                                    companyPhoto={jobDetailData?.company?.photo}
                                    companyName={jobDetailData?.company?.name}
                                    companyWebsite={jobDetailData?.company?.website}
                                />

                                <TabDetails selectedTab={this.state.tabSelected} onTabPressed={this.onTabPressed}/>

                                <ScrollView showsVerticalScrollIndicator={false}>
                                    {this.state.tabSelected === DESCRIPTION && <Animatable.View animation={'fadeIn'}>
                                        <View style={styles.jobDetailsContainer}>
                                            <InfoDetail
                                                title={t('detail.experience')}
                                                text={jobDetailData?.experience + ' ' + t('detail.years')}
                                            />
                                            <InfoDetail
                                                title={t('detail.contract')}
                                                text={t('detail.' + jobDetailData?.contractType)}
                                            />
                                            <InfoDetail
                                                title={t('detail.salary')}
                                                text={jobDetailData?.minSalary + 'k - ' + jobDetailData?.maxSalary + 'k'}
                                            />
                                        </View>

                                        <CardDetail>
                                            <Text style={styles.jobDescription}>{t('detail.descriptionJob')}</Text>
                                            <Text style={styles.jobDescriptionText}>
                                                {StringUtils.htmlToText(jobDetailData?.description)}
                                            </Text>
                                        </CardDetail>
                                    </Animatable.View>}

                                    {this.state.tabSelected === MAP &&
                                        <Map
                                            companyName={jobDetailData?.company?.name}
                                            city={jobDetailData?.address?.city}
                                            lat={jobDetailData?.coords?.lat}
                                            lng={jobDetailData?.coords?.lng}
                                        />
                                    }

                                    {this.state.tabSelected === SKILLS &&
                                        <Skills skillList={jobDetailData?.skills}/>
                                    }
                                </ScrollView>

                                <ApplyButton
                                    isApplicated={jobDetailData?.isApplicated}
                                    text={jobDetailData && jobDetailData?.isApplicated ?
                                        t('detail.applied')
                                        : t('detail.apply')
                                    }
                                    onPress={handleApplication}
                                />
                            </>
                        )}

                        {jobLoading && !isError && (
                            <ActivityIndicator style={{marginTop: 50}} color={Colors.primary} size="large"/>)}
                        {isError && (<Error onPress={() => this.fetchData()}/>)}
                    </SafeAreaView>
                </View>
            </>
        )
    }
}

// mappa lo stato come props del componente wrappato dal container
function mapStateToProps(state) {
    return {
        jobDetail: sJobDetail(state),
        jobLoading: sJobDetailLoading(state),
        jobError: sJobDetailError(state),
        applicationsError: sFavoritesError(state),
        favoritesError: sApplicationsError(state)
    }
}

// mappa lo stato come props del componente wrappato dal container
function mapDispatchToProps(dispatch) {
    return {
        loadJobDetail(jobId) {
            dispatch(loadJobDetails(jobId));
        },
        addFavorite(jobId) {
            dispatch(addFavorite(jobId))
        },
        removeFavorite(jobId) {
            dispatch(removeFavorite(jobId))
        },
        addApplication(jobId) {
            dispatch(addApplication(jobId))
        }
    }
}

// componente che permette la connessione tra un componente react e i18n
const JobDetailsTranslation = withTranslation()(JobDetail);
// componente che permette la connessione tra un componente react e redux
const JobDetailsContainer = connect(mapStateToProps, mapDispatchToProps)(JobDetailsTranslation);
export default JobDetailsContainer;

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.light,
        height:"100%",
        paddingHorizontal:10
    },
    safeContainer: {flex: 1},
    banner: {
        width:"100%",
        height:height_banner
    },
    jobDetailsContainer: {
        flexDirection:"row",
        marginTop:20,
        alignItems: "center",
        marginHorizontal: 10,
        justifyContent: "space-between"
    },
    jobDescription: {
        fontFamily:"MS-Bold",
        fontSize:20,
        marginBottom:10
    },
    jobDescriptionText: {
        fontFamily:"MS-Bold",
        color:Colors.accent
    },
})