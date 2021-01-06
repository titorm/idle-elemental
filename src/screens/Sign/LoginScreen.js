import React, { useLayoutEffect, useState } from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';

import { registerNewUser, loginUser } from '../../application/api/methods/userApi';

import PageHeader from '../../components/PageHeader';

import styles from './LoginScreenStyles';

function LoginScreen(props) {
    const { navigation } = props;
    const isAndroid = Platform.OS === 'android';

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [onCreate, setOnCreate] = useState(false);

    useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Idle Elemental',
        });
    }, [navigation]);

    const submit = () => {
        if (onCreate) signUp();
        else login();
    };

    const signUp = async () => {
        registerNewUser(email, password).then(() => {
            // feedbackService.showSuccessMessage('Account created successfully!');
            navigateToApplication();
        }).catch((error) => {
            // feedbackService.showErrorMessage(error.message);
        });
    };

    const login = async () => {
        loginUser(email, password).then(() => {
            // feedbackService.showSuccessMessage('Account created successfully!');
            navigateToApplication();
        }).catch((error) => {
            // feedbackService.showErrorMessage(error.message);
        });
    };

    const navigateToApplication = () => {
        navigation.reset({
            index: 0,
            routes: [{ name: 'summon' }],
        });
    };

    return (
        <TouchableWithoutFeedback
            style={styles.container}
            onPress={Keyboard.dismiss}
        >
            <KeyboardAvoidingView
                enabled
                behavior={isAndroid ? null : 'padding'}
                style={styles.container}
            >
                <View style={styles.divider} />
                <PageHeader
                    title='Login'
                    subtitle='Glad to see you here'
                />
                <TextInput
                    style={styles.input}
                    mode='outlined'
                    autoCapitalize='none'
                    label='Email'
                    keyboardType='email-address'
                    // theme={theme}
                    onChangeText={setEmail}
                />
                <TextInput
                    secureTextEntry
                    style={styles.input}
                    mode='outlined'
                    autoCapitalize='none'
                    label='Password'
                    // theme={theme}
                    onChangeText={setPassword}
                />
                <Button
                    style={styles.button}
                    mode='contained'
                    color='green'
                    onPress={submit}
                >
                    {onCreate ? 'Sign-Up' : 'Login'}
                </Button>
                <Button
                    style={styles.button}
                    mode='text'
                    color='black'
                    onPress={() => setOnCreate(!onCreate)}
                >
                    {!onCreate ? 'Create an Account' : 'Go to Login'}
                </Button>
                <View style={styles.divider} />
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    );
}

export default LoginScreen;
