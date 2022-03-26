import React from 'react';
import {View, ImageBackground, Image, Text, SafeAreaView, ScrollView, ActivityIndicator} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../constants/colors';
import {StatusBar} from "expo-status-bar";
import Back from "../components/Back";
import {
    sJobDetail, sJobDetailError, sJobDetailLoading,
    sPopularError,
    sPopularJobs,
    sPopularLoading, sRecentError,
    sRecentJobs,
    sRecentLoading
} from "../store/selectors/AppSelector";
import {loadJobDetails, loadPopularJobs, loadRecentJobs} from "../store/actions/AppAction";
import {connect} from "react-redux";
import CompanyAvatar from "../components/CompanyAvatar";
import ContractTypeUtils from "../util/ContractTypeUtils";
import {StringUtils} from "../util/StringUtils";

class JobDetail extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log("componentDidMount details page");

        const { jobId } = this.props.route.params;
        console.log(jobId);
        this.props.loadJobDetail(jobId);
    }

    render(){
        const {navigation, jobDetail, jobLoading, jobError} = this.props;
        const jobDetailData = jobDetail?.data;

        return(
            <>
                <StatusBar style="dark"/>
                <View style={{
                    backgroundColor:"white",
                    height:"100%",
                    paddingHorizontal:20
                }}>
                    <SafeAreaView style={{flex: 1}}>
                        <ImageBackground source={require('../assets/images/detail.png')}
                                         style={{width:"100%",height:250}}>
                            <Back navigation={navigation} iconColor={"black"} />
                        </ImageBackground>
                        {!jobLoading && !jobError && (
                            <>
                            <ScrollView showsVerticalScrollIndicator={false}>
                                <View style={{
                                    backgroundColor:"white",
                                    shadowColor: "#84A4FF",
                                    shadowOffset: {
                                        width: 0,
                                        height: 0,
                                    },
                                    shadowOpacity: 0.2,
                                    shadowRadius: 10,
                                    elevation: 2, // Android
                                    padding:15,
                                    borderRadius:15
                                }}>
                                    <View style={{
                                        flexDirection:"row",
                                        alignItems:"center",
                                        justifyContent: 'space-between'
                                    }}>
                                        <View>
                                            <Text style={{
                                                fontSize:18,
                                                fontFamily:"MS-Bold"
                                            }}>{jobDetailData?.title}
                                            </Text>

                                            <View style={{flexDirection:"row",alignItems:"center", marginTop: 3}}>
                                                <Ionicons name="location-outline" size={18} color="#B8B8B8" />
                                                <Text style={{
                                                    fontFamily:"MS-Bold",
                                                    fontSize:13,
                                                    color:"#B8B8B8",
                                                    marginLeft: 5
                                                }}>{jobDetailData?.address?.city + ', ' + jobDetailData?.address?.country}</Text>
                                            </View>
                                        </View>
                                        <View style={{
                                            backgroundColor: Colors.primary,
                                            height:40,
                                            width:40,
                                            borderRadius:5,
                                            marginTop:5,
                                            alignItems:"center",
                                            justifyContent:"center"
                                        }}>
                                            <Ionicons name="ios-heart-outline" size={24} color="white" />

                                        </View>


                                    </View>
                                    <View style={{
                                        flexDirection:"row",
                                        paddingTop:20,
                                        alignItems:"center"
                                    }}>
                                        <CompanyAvatar img={jobDetailData?.company?.photo} />
                                        <View style={{paddingLeft:20}}>
                                            <Text style={{
                                                fontFamily:"MS-Medium"
                                            }}>{jobDetailData?.company?.name}</Text>
                                            <Text style={{
                                                fontFamily:"MS-Regular",
                                                color:"#B8B8B8",
                                                fontSize: 12,
                                                marginTop: 3
                                            }}>{jobDetailData?.company?.website}</Text>
                                        </View>

                                    </View>
                                </View>

                                <View style={{
                                    flexDirection:"row",
                                    marginTop:20,
                                    alignItems: "center",
                                    justifyContent: "space-between"
                                }}>
                                    <View style={{
                                        backgroundColor:"white",
                                        shadowColor: "#84A4FF",
                                        shadowOffset: {
                                            width: 0,
                                            height: 0,
                                        },
                                        shadowOpacity: 0.2,
                                        shadowRadius: 10,
                                        elevation: 2, // Android
                                        paddingVertical:10,
                                        paddingHorizontal: 8,
                                        borderRadius:8,
                                        width:110,
                                    }}>
                                        <Text style={{
                                            fontFamily:"MS-Bold",
                                            color:"#B8B8B8",
                                        }}>Esperienza</Text>
                                        <Text style={{
                                            fontFamily:"MS-Bold",
                                            paddingTop: 1
                                        }}>{jobDetailData?.experience} anni</Text>
                                    </View>

                                    <View style={{
                                        backgroundColor:"white",
                                        shadowColor: "#84A4FF",
                                        shadowOffset: {
                                            width: 0,
                                            height: 0,
                                        },
                                        shadowOpacity: 0.2,
                                        shadowRadius: 10,
                                        elevation: 2, // Android
                                        paddingVertical:10,
                                        paddingHorizontal: 8,
                                        borderRadius:8,
                                        width:110
                                    }}>
                                        <Text style={{
                                            fontFamily:"MS-Bold",
                                            color:"#B8B8B8",
                                        }}>Contratto</Text>
                                        <Text style={{
                                            fontFamily:"MS-Bold",
                                            paddingTop: 1
                                        }}>{ContractTypeUtils.getContractType(jobDetailData?.contractType)}</Text>
                                    </View>

                                    <View style={{
                                        backgroundColor:"white",
                                        shadowColor: "#84A4FF",
                                        shadowOffset: {
                                            width: 0,
                                            height: 0,
                                        },
                                        shadowOpacity: 0.2,
                                        shadowRadius: 10,
                                        elevation: 2, // Android
                                        paddingVertical:10,
                                        paddingHorizontal: 8,
                                        borderRadius:8,
                                        width:110
                                    }}>
                                        <Text style={{
                                            fontFamily:"MS-Bold",
                                            color:"#B8B8B8",
                                        }}>Salario</Text>
                                        <Text style={{
                                            fontFamily:"MS-Bold",
                                            paddingTop: 1
                                        }}>{jobDetailData?.minSalary + 'k - ' + jobDetailData?.maxSalary + 'k'}</Text>
                                    </View>

                                </View>
                                <View style={{
                                    backgroundColor:"white",
                                    shadowColor: "#84A4FF",
                                    shadowOffset: {
                                        width: 0,
                                        height: 0,
                                    },
                                    shadowOpacity: 0.2,
                                    shadowRadius: 10,
                                    elevation: 2, // Android
                                    borderRadius:15,
                                    padding:20,
                                    marginTop:20
                                }}>
                                    <Text style={{
                                        fontFamily:"MS-Bold",
                                        fontSize:20,
                                        marginBottom:10
                                    }}>Descrizione Offerta</Text>
                                    <Text style={{
                                        fontFamily:"MS-Bold",
                                        color:"#B2B2B2",
                                    }}>
                                        {StringUtils.htmlToText(jobDetailData?.description)}
                                    </Text>
                                </View>
                            </ScrollView>

                            <View style={{
                            flexDirection: "row",
                            width:"100%",
                            position: 'absolute',
                            bottom:40,
                            paddingVertical: 10,
                            backgroundColor: Colors.primary,
                            alignItems:"center",
                            justifyContent:"center",
                            borderRadius:10
                        }}>

                            <Ionicons name="ios-briefcase-outline" size={28} color="white" />
                            <Text style={{
                            color:"white",
                            fontFamily:"MS-Regular",
                            marginHorizontal: 10
                        }}>Apply</Text>



                            </View>
                            </>
                        )}

                        {jobLoading && !jobError && (<ActivityIndicator style={{marginTop: 50}} color={Colors.primary} size="large"/>)}
                        {jobError && (<Text>Oops.. Qualcosa è andato storto!</Text>)}
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
        jobError: sJobDetailError(state)
    }
}

// mappa lo stato come props del componente wrappato dal container
function mapDispatchToProps(dispatch) {
    return {
        loadJobDetail(jobId) {
            dispatch(loadJobDetails(jobId));
        }
    }
}

// componente che permette la connessione tra un componente react e redux
const JobDetailsContainer = connect(mapStateToProps, mapDispatchToProps)(JobDetail);
export default JobDetailsContainer;