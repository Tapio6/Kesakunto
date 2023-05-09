import * as React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';


//import screens
import HomeScreen from './screens/Home';
import WeightScreen from './screens/Weight';
import FoodsScreen from './screens/Food';


//screen names
const homeName = "Home";
const weightName = "Weight"
const foodsName = "Foods"

const Tab = createBottomTabNavigator();

export default function MainContainer() {

    return(
            <Tab.Navigator

                screenOptions={({ route }) => ({
                    headerShown: false,
                    tabBarIcon: ({ focused}) => {
                    let iconName;
                    let rn = route.name;

                    if (rn === homeName) {

                        iconName = focused ? 'home' : 'home-outline'
                    } else if (rn == weightName) {

                        iconName = focused ? 'fast-food' : 'fast-food-outline'
                    } else if (rn == foodsName) {

                        iconName = focused ? 'book' : 'book-outline'
                    } 
                    
                
                    return <Ionicons name={iconName} size={30} />
                    },
                })}>


                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="Weight" component={WeightScreen} />
                <Tab.Screen name="Foods" component={FoodsScreen} />
            </Tab.Navigator>
    )
}