import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StatusBar } from 'react-native';
import { s } from 'react-native-wind';
import { Feather, Ionicons } from '@expo/vector-icons';
import { SafeAreaProvider, SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../helper/navigationTypes';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const insets = useSafeAreaInsets();

   type SplashScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Splash'>;
    const navigation = useNavigation<SplashScreenNavigationProp>();

  // Mock data for past visits
  const pastVisits = [
    { date: '18-03-24', market: 'BAH', storeName: 'Lorem Ipsum', score: 77 },
    { date: '17-03-24', market: 'KWT', storeName: 'Lorem Ipsum', score: 90 },
    { date: '17-03-24', market: 'MOR', storeName: 'Lorem Ipsum', score: 74 },
    { date: '20-03-24', market: 'UAE', storeName: 'Lorem Ipsum', score: 80 },
    { date: '18-03-24', market: 'QTR', storeName: 'Lorem Ipsum', score: 77 },
    { date: '17-03-24', market: 'KSA', storeName: 'Lorem Ipsum', score: 56 },
    { date: '17-03-24', market: 'QMN', storeName: 'Lorem Ipsum', score: 89 },
    { date: '18-03-24', market: 'BAH', storeName: 'Lorem Ipsum', score: 77 },
    { date: '17-03-24', market: 'KWT', storeName: 'Lorem Ipsum', score: 90 },
    { date: '17-03-24', market: 'MOR', storeName: 'Lorem Ipsum', score: 74 },
  ];

  // Metrics data
  const metrics = [
    { title: 'Planogram Compliance', value: '60%' },
    { title: 'Share of Shelf (SOS)', value: '58%' },
    { title: 'Must Stock List', value: '62%' },
    { title: 'On Shelf Availability', value: '63%' },
  ];

  return (
    <SafeAreaProvider>
      <SafeAreaView style={s`flex-1 bg-white`}>
        <StatusBar barStyle="dark-content" />
        
        {/* Header */}
        <View style={s`flex-row justify-between items-center px-5 py-3`}>
          <Text style={s`text-blue-900 font-bold text-xl`}>alphaventure</Text>
          <View style={s`flex-row items-center`}>
            <TouchableOpacity style={s`px-2`}>
              <Ionicons name="home" size={24} color="#0096FF" />
            </TouchableOpacity>
            <TouchableOpacity style={s`px-2`}>
              <Ionicons name="bar-chart" size={24} color="#666" />
            </TouchableOpacity>
            <TouchableOpacity style={s`px-2`}>
              <Feather name="share" size={24} color="#666" />
            </TouchableOpacity>
          </View>
        </View>

        <ScrollView style={s`flex-1`}>
          {/* Summary Section */}
          <View style={s`px-5 py-3`}>
            <View style={s`flex-row justify-between items-center mb-4`}>
              <Text style={s`text-gray-800 text-2xl font-bold`}>Summary</Text>
              <TouchableOpacity style={s`border border-blue-400 rounded-full px-4 py-2 flex-row items-center`}>
                <Text style={s`text-blue-500 mr-1`}>Last 30 Days</Text>
                <Feather name="chevron-down" size={16} color="#0096FF" />
              </TouchableOpacity>
            </View>

            {/* Score Circle */}
            <View style={s`bg-gray-100 rounded-lg p-5 items-center mb-4`}>
              <View style={s`w-32 h-32 rounded-full bg-white justify-center items-center border-8 border-blue-400`}>
                <Text style={s`text-5xl font-bold text-gray-800`}>60</Text>
              </View>
              <Text style={s`mt-3 text-gray-700 font-medium text-center`}>Average Perfect Store Score</Text>
            </View>

            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={s`flex-row`}>
                {metrics.map((metric, index) => (
                  <View 
                    key={index} 
                    style={s`bg-gray-100 rounded-lg p-3 mr-2 w-24`}
                  >
                    <Text style={s`text-xl font-bold text-blue-600 text-center`}>{metric.value}</Text>
                    <Text style={s`text-xs text-gray-600 mt-1 text-center`}>{metric.title.split(' ')[0]}</Text>
                  </View>
                ))}
              </View>
            </ScrollView>
          </View>

          {/* Past Visits Section */}
          <View style={s`px-5 py-3 pb-20`}>
            <View style={s`flex-row justify-between items-center mb-4`}>
              <Text style={s`text-gray-800 text-2xl font-bold`}>Past Visits</Text>
              <TouchableOpacity style={s`bg-blue-500 rounded-full w-10 h-10 justify-center items-center`}>
                <Feather name="plus" size={24} color="white" />
              </TouchableOpacity>
            </View>

            {/* Table Header */}
            <View style={s`flex-row border-b border-gray-300 py-2`}>
              <Text style={s`flex-1 font-medium text-blue-900`}>Date</Text>
              <Text style={s`flex-1 font-medium text-blue-900`}>Market</Text>
              <Text style={s`flex-2 font-medium text-blue-900`}>Store Name</Text>
              <Text style={s`flex-1 font-medium text-blue-900 text-right`}>Perfect Score</Text>
            </View>

            {/* Table Rows */}
            {pastVisits.map((visit, index) => (
              <View 
                key={index} 
                style={s`flex-row border-b border-gray-200 py-3`}
              >
                <Text style={s`flex-1 text-gray-700`}>{visit.date}</Text>
                <Text style={s`flex-1 text-gray-700`}>{visit.market}</Text>
                <Text style={s`flex-2 text-gray-700`}>{visit.storeName}</Text>
                <Text style={s`flex-1 text-gray-700 text-right`}>{visit.score}</Text>
              </View>
            ))}

            {/* Pagination */}
            <View style={s`flex-row justify-between items-center mt-4`}>
              <View style={s`flex-row items-center`}>
                <Text style={s`text-gray-600 mr-2`}>Rows per page:</Text>
                <TouchableOpacity style={s`flex-row items-center`}>
                  <Text style={s`text-gray-800 mr-1`}>10</Text>
                  <Feather name="chevron-down" size={16} color="#666" />
                </TouchableOpacity>
              </View>
              
              <Text style={s`text-gray-600`}>1-10 of 30</Text>
              
              <View style={s`flex-row`}>
                <TouchableOpacity style={s`p-2`}>
                  <Feather name="chevron-left" size={20} color="#666" />
                </TouchableOpacity>
                <TouchableOpacity style={s`p-2`}>
                  <Feather name="chevron-right" size={20} color="#666" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>

        {/* Floating Action Button */}
        <TouchableOpacity 
          style={s`absolute bottom-5 right-5 left-5 bg-blue-500 rounded-full py-3 px-6 flex-row justify-center items-center`}

          onPress={() => navigation.navigate('Details')} 
        >
          <Feather name="plus" size={20} color="white" />
          <Text style={s`text-white font-medium ml-2`}>New Visit</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default HomeScreen