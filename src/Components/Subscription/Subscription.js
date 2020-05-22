import React from 'react';
import {ScrollView} from 'react-native';
import {PricingCard} from 'react-native-elements';

const Subscription = () => {
    return (
        <ScrollView>
            <PricingCard price={'19$ per month'}
                         color={'red'}
                         title={'Monthly'}
                         button={{ title: 'GET STARTED', icon: 'flight-takeoff' }}
                         info={['Courses, paths and skill assessments for individuals']}>
            </PricingCard>
            <PricingCard price={'159$ per year'}
                         color={'blue'}
                         title={'Annual'}
                         button={{ title: 'GET STARTED', icon: 'flight-takeoff' }}
                         info={['Courses, paths and skill assessments for individuals']}>
            </PricingCard>
            <PricingCard price={'239$ per year'}
                         color={'green'}
                         title={'Premium'}
                         button={{ title: 'GET STARTED', icon: 'flight-takeoff' }}
                         info={['Acess to exams, projects and interactive courses']}>
            </PricingCard>
        </ScrollView>
    );
};
export default Subscription;
