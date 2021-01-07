import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { Appbar } from 'react-native-paper';
import { useSelector } from 'react-redux';

function Header() {
    const { resources } = useSelector((state) => state.player);

    const theme = {
        colors: {
            primary: 'green',
            text: 'white',
        },
    };

    useEffect(() => {
        // eslint-disable-next-line no-console
        console.log(resources);
    }, [resources]);

    return (
        <Appbar.Header
            theme={theme}
        >
            <Appbar.Content
                title='Idle Elemental'
                titleStyle={styles.title}
            />
        </Appbar.Header>
    );
}

const styles = StyleSheet.create({
    title: {
        color: 'white',
        fontWeight: '600',
        textAlign: 'center',
    },
});

export default Header;
