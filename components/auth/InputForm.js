import {Platform, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import FormValidIndicator from "./FormValidIndicator";
import ErrorForm from "./ErrorForm";
import React from "react";
import {Feather} from "@expo/vector-icons";

export default function InputForm({containerStyle, children, title, placeholder, changeTextHandler, applyValidation,
                                      errorText, isInputValid, isPassword, secureTextEntry, updateSecureTextEntry,
                                      initialValue}) {

    return (
        <View style={containerStyle}>
            <Text style={styles.text_footer}>{title}</Text>

            <View style={styles.action}>
                {children}

                <TextInput
                    placeholder={placeholder}
                    placeholderTextColor="gray"
                    style={styles.textInput}
                    autoCapitalize="none"
                    autoCorrect={false}
                    onChangeText={(val) => changeTextHandler(val)}
                    secureTextEntry={isPassword ? secureTextEntry : false}
                    value={initialValue ? initialValue : null}
                />

                {applyValidation && isInputValid &&
                    <FormValidIndicator/>
                }

                {isPassword && <TouchableOpacity
                    style={styles.eyePassword}
                    onPress={updateSecureTextEntry}
                >
                    {secureTextEntry ?
                        <Feather
                            name="eye-off"
                            color="grey"
                            size={20}
                        />
                        :
                        <Feather
                            name="eye"
                            color="grey"
                            size={20}
                        />
                    }
                </TouchableOpacity>}
            </View>

            {applyValidation && isInputValid == false &&
                <ErrorForm text={errorText} />
            }
        </View>
    )
}

const styles = StyleSheet.create({
    text_footer: {
        fontFamily: "MS-Regular",
        fontSize: 16
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        fontSize: 12,
        fontFamily: "MS-Regular"
    },
    eyePassword: {
        marginLeft: 4
    }
});