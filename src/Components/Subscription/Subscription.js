import React, {useContext} from 'react';
import {ScrollView} from 'react-native';
import {PricingCard} from 'react-native-elements';
import {ThemeContext} from "../../provider/ThemeProvider";

const Subscription = () => {
    const {theme} = useContext(ThemeContext)
    return (
        <ScrollView style={{backgroundColor:theme.background}}>
            <PricingCard price={'19$ per month'}
                         containerStyle={{backgroundColor:theme.itemBackground}}
                         color={'red'}
                         title={'Monthly'}
                         button={{ title: 'GET STARTED', icon: 'flight-takeoff' }}
                         info={['Courses, paths and skill assessments for individuals']}>
            </PricingCard>
            <PricingCard price={'159$ per year'}
                         containerStyle={{backgroundColor:theme.itemBackground}}
                         color={'blue'}
                         title={'Annual'}
                         button={{ title: 'GET STARTED', icon: 'flight-takeoff' }}
                         info={['Courses, paths and skill assessments for individuals']}>
            </PricingCard>
            <PricingCard price={'239$ per year'}
                         containerStyle={{backgroundColor:theme.itemBackground}}
                         color={'green'}
                         title={'Premium'}
                         button={{ title: 'GET STARTED', icon: 'flight-takeoff' }}
                         info={['Acess to exams, projects and interactive courses']}>
            </PricingCard>
        </ScrollView>
    );
};
export default Subscription;
