import React from 'react';
import {View, ImageBackground, Text, SafeAreaView, ScrollView, ActivityIndicator,
    Dimensions, StyleSheet} from 'react-native';
import Colors from '../constants/colors';
import {StatusBar} from "expo-status-bar";
import Back from "../components/nav/Back";
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
import {connect} from "react-redux";
import ContractTypeUtils from "../util/ContractTypeUtils";
import {StringUtils} from "../util/StringUtils";
import CardDetail from "../components/jobDetails/CardDetail";
import InfoDetail from "../components/jobDetails/InfoDetail";
import ApplyButton from "../components/jobDetails/ApplyButton";
import JobOfferHeader from "../components/jobDetails/JobOfferHeader";
import Error from "../components/Error";

const {height} = Dimensions.get("screen");
const height_banner = height * 0.25;

class JobDetail extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData = () => {
        const { jobId } = this.props.route.params;
        this.props.loadJobDetail(jobId);
    };

    render(){
        const {navigation, jobDetail, jobLoading, jobError, addApplication, addFavorite, removeFavorite,
            applicationsError, favoritesError} = this.props;

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
                        <ImageBackground source={require('../assets/images/detail.png')}
                                         style={styles.banner}>
                            <Back navigation={navigation} iconColor={"black"} />
                        </ImageBackground>
                        {!jobLoading && !isError && (
                            <>
                                <ScrollView showsVerticalScrollIndicator={false}>

                                    <JobOfferHeader
                                        title={jobDetailData?.title}
                                        address={jobDetailData?.address?.city + ', ' + jobDetailData?.address?.country}
                                        handleFavorite={() => handleFavorite()}
                                        isFavorite={(jobDetailData && jobDetailData?.isFavorite)}
                                        companyPhoto={jobDetailData?.company?.photo}
                                        companyName={jobDetailData?.company?.name}
                                        companyWebsite={jobDetailData?.company?.website}

                                    />

                                    <View style={styles.jobDetailsContainer}>
                                        <InfoDetail
                                            title={'Esperienza'}
                                            text={jobDetailData?.experience + ' anni'}
                                        />

                                        <InfoDetail
                                            title={'Contratto'}
                                            text={ContractTypeUtils.getContractType(jobDetailData?.contractType)}
                                        />

                                        <InfoDetail
                                            title={'Salario'}
                                            text={jobDetailData?.minSalary + 'k - ' + jobDetailData?.maxSalary + 'k'}
                                        />
                                    </View>

                                    <CardDetail>
                                        <Text style={styles.jobDescription}>Descrizione Offerta</Text>
                                        <Text style={styles.jobDescriptionText}>
                                            {StringUtils.htmlToText(jobDetailData?.description)}
                                        </Text>
                                    </CardDetail>
                                </ScrollView>

                                <ApplyButton
                                    isApplicated={jobDetailData?.isApplicated}
                                    text={jobDetailData && jobDetailData?.isApplicated ?
                                        'Candidatura Effettuata'
                                        : 'Candidati'
                                    }
                                    onPress={handleApplication}
                                />
                            </>
                        )}

                        {jobLoading && !isError && (<ActivityIndicator style={{marginTop: 50}} color={Colors.primary} size="large"/>)}
                        {isError && (<Error onPress={() => this.fetchData()} />)}
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

// componente che permette la connessione tra un componente react e redux
const JobDetailsContainer = connect(mapStateToProps, mapDispatchToProps)(JobDetail);
export default JobDetailsContainer;

const styles = StyleSheet.create({
    container: {
        backgroundColor:"white",
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