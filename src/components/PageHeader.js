import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Defs, Line, LinearGradient, Stop, Svg } from 'react-native-svg';

function PageHeader(props) {
    const { title, subtitle } = props;

    function renderSubtitle() {
        if (!subtitle) {
            return null;
        }
        return (
            <Text style={styles.subtitle2}>{subtitle}</Text>
        );
    }

    return (
        <>
            <Text style={styles.h4}>{title}</Text>
            {renderSubtitle()}
            <View style={styles.gradientContainer}>
                <Svg
                    height='2'
                    width='100'
                >
                    <Defs>
                        <LinearGradient
                            id='grad'
                            x1='0'
                            y1='0'
                            x2='1'
                            y2='0'
                        >
                            <Stop
                                offset='0'
                                stopColor='green'
                                stopOpacity='1'
                            />
                            <Stop
                                offset='1'
                                stopColor='blue'
                                stopOpacity='1'
                            />
                        </LinearGradient>
                    </Defs>
                    <Line
                        x1='0'
                        x2='100'
                        stroke='url(#grad)'
                        strokeWidth='2'
                    />
                </Svg>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    h4: {
        color: 'black',
        fontSize: 24,
        textAlign: 'center',
        fontWeight: '300',
    },
    subtitle2: {
        color: 'black',
        textAlign: 'center',
        marginBottom: 8,
    },
    gradientContainer: {
        alignItems: 'center',
        marginBottom: 16,
        justifyContent: 'center',
    },
});

export default PageHeader;
