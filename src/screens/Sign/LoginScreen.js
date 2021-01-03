import React, { useLayoutEffect, useState } from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import Firebase from 'firebase';

import { setUser } from '../../application/store/modules/user/actions';

import PageHeader from '../../components/PageHeader';

const isAndroid = Platform.OS === 'android';

function LoginScreen(props) {
    const { navigation } = props;
    const dispatch = useDispatch();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [onCreate, setOnCreate] = useState(false);

    useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Idle Elemental',
        });
    }, [navigation]);

    function submit() {
        if (onCreate) {
            signUp();
        } else {
            login();
        }
    }

    async function signUp() {
        Firebase.auth().setPersistence(Firebase.auth.Auth.Persistence.LOCAL)
            .then(() => {
                Firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(() => {
                        dispatch(setUser(Firebase.auth().currentUser));
                        // feedbackService.showSuccessMessage('Account created successfully!');
                        navigateToApplication();
                    }).catch((error) => {
                        // feedbackService.showErrorMessage(error.message);
                    });
            });
    }

    async function login() {
        Firebase.auth().setPersistence(Firebase.auth.Auth.Persistence.LOCAL)
            .then(() => {
                Firebase.auth().signInWithEmailAndPassword(email, password)
                    .then(() => {
                        dispatch(setUser(Firebase.auth().currentUser));
                        navigateToApplication();
                    }).catch((error) => {
                        // feedbackService.showErrorMessage(error.message);
                    });
            });
    }

    function navigateToApplication() {
        navigation.reset({
            index: 0,
            routes: [{ name: 'summon' }],
        });
    }

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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white',
    },
    divider: {
        flex: 1,
    },
    input: {
        marginTop: 12,
        width: '90%',
    },
    button: {
        marginTop: 12,
        width: '90%',
        padding: 8,
    },
});

export default LoginScreen;
