import React from 'react';
import { 
  View, 
  Text, 
  ScrollView, 
  TouchableOpacity, 
  TextInput,
  StatusBar,
  Image
} from 'react-native';
import { s } from 'react-native-wind';
import { Feather } from '@expo/vector-icons';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../helper/navigationTypes';
import { useNavigation } from '@react-navigation/native';

const DetailsScreen = () => {

   type SplashScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Splash'>;
      const navigation = useNavigation<SplashScreenNavigationProp>();


  const steps = [
    { number: 1, completed: true },
    { number: 2, completed: true },
    { number: 3, completed: false, active: true },
    { number: 4, completed: false },
  ];

  return (
    <SafeAreaProvider>
      <SafeAreaView style={s`flex-1 bg-white`}>
        <StatusBar barStyle="dark-content" />
        
        <ScrollView style={s`flex-1`} contentContainerStyle={s`pb-8`}>
          {/* Progress Stepper */}
          <View style={s`px-6 pt-4 pb-4`}>
            <View style={s`flex-row items-center justify-between`}>
              {steps.map((step, index) => (
                <React.Fragment key={step.number}>
                  {/* Step Circle */}
                  <View 
                    style={s`
                      w-5 h-5 rounded-full 
                      ${step.completed ? 'bg-blue-500' : step.active ? 'bg-blue-500' : 'bg-gray-300'} 
                      justify-center items-center z-10
                    `}
                  >
                    {step.completed ? (
                      <Feather name="check" size={12} color="white" />
                    ) : (
                      <Text style={s`text-white text-xs font-bold`}>{step.number}</Text>
                    )}
                  </View>
                  
                  {/* Connector Line */}
                  {index < steps.length - 1 && (
                    <View 
                      style={s`
                        flex-1 h-0.5 
                        ${index < 2 ? 'bg-blue-500' : 'bg-gray-300'}
                      `}
                    />
                  )}
                </React.Fragment>
              ))}
            </View>
          </View>

          {/* Title */}
          <View style={s`px-6 py-4`}>
            <Text style={s`text-2xl font-bold text-gray-800`}>Perfect Store Scorecard</Text>
          </View>

          {/* Form Sections */}
          <View style={s`px-6`}>
            {/* Planogram Compliance Section */}
            <View style={s`mb-5`}>
              <Text style={s`text-sm text-gray-500 mb-2`}>Planogram Compliance</Text>
              <TouchableOpacity 
                style={s`
                  border border-gray-300 rounded-lg p-3 
                  flex-row justify-between items-center
                `}
              >
                <Text style={s`text-gray-800`}>90% Complaint</Text>
                <Feather name="chevron-down" size={20} color="#666" />
              </TouchableOpacity>
            </View>

            {/* Planogram Feedback */}
            <View style={s`mb-5`}>
              <Text style={s`text-sm text-gray-500 mb-2`}>Planogram Feedback</Text>
              <TextInput
                multiline
                numberOfLines={4}
                style={s`
                  border border-gray-300 rounded-lg p-3 
                  min-h-[100px] text-gray-800
                `}
                placeholder="Enter feedback here"
              />
            </View>

            {/* Image Upload */}
            <TouchableOpacity 
              style={s`
                border border-dashed border-gray-300 rounded-lg 
                p-4 items-center justify-center mb-2
              `}
            >
              <Feather name="image" size={24} color="#999" />
              <Text style={s`text-gray-400 mt-2`}>Select Image</Text>
            </TouchableOpacity>

            <Text style={s`text-xs text-gray-500 mb-6`}>
              If you selected less than 100%, please share feedback of what you saw in the form of text or a photo
            </Text>

            {/* SOS Section */}
            <View style={s`mb-5`}>
              <Text style={s`text-sm text-gray-500 mb-2`}>SOS</Text>
              <TouchableOpacity 
                style={s`
                  border border-gray-300 rounded-lg p-3 
                  flex-row justify-between items-center
                `}
              >
                <Text style={s`text-gray-800`}>100%</Text>
                <Feather name="chevron-down" size={20} color="#666" />
              </TouchableOpacity>
            </View>

            {/* SOS Targets */}
            <View style={s`mb-5`}>
              <Text style={s`text-sm text-gray-500 mb-2`}>SOS Targets</Text>
              <TouchableOpacity 
                style={s`
                  border border-gray-300 rounded-lg p-3 
                  flex-row justify-between items-center
                `}
              >
                <Text style={s`text-gray-800`}>No</Text>
                <Feather name="chevron-down" size={20} color="#666" />
              </TouchableOpacity>
            </View>

            <Text style={s`text-xs text-gray-500 mb-4`}>
              What the SOS that you selected in line with the SOS targets shared with you in the guiding principles?
            </Text>

            {/* SOS Feedback */}
            <View style={s`mb-5`}>
              <Text style={s`text-sm text-gray-500 mb-2`}>SOS Feedback</Text>
              <TextInput
                multiline
                numberOfLines={4}
                style={s`
                  border border-gray-300 rounded-lg p-3 
                  min-h-[100px] text-gray-800
                `}
                placeholder="Enter feedback here"
              />
            </View>

            {/* Image Upload */}
            <TouchableOpacity 
              style={s`
                border border-dashed border-gray-300 rounded-lg 
                p-4 items-center justify-center mb-2
              `}
            >
              <Feather name="image" size={24} color="#999" />
              <Text style={s`text-gray-400 mt-2`}>Select Image</Text>
            </TouchableOpacity>

            <Text style={s`text-xs text-gray-500 mb-6`}>
              If you selected no, please share feedback of what you saw in the form of text or a photo.
            </Text>

            {/* Must Stock List */}
            <View style={s`mb-5`}>
              <Text style={s`text-sm text-gray-500 mb-2`}>Must Stock List</Text>
              <TouchableOpacity 
                style={s`
                  border border-gray-300 rounded-lg p-3 
                  flex-row justify-between items-center
                `}
              >
                <Text style={s`text-gray-800`}>No</Text>
                <Feather name="chevron-down" size={20} color="#666" />
              </TouchableOpacity>
            </View>

            <Text style={s`text-xs text-gray-500 mb-4`}>
              Are all the SKUs available as per the MSL shared with you in the guiding principles?
            </Text>

            {/* MSL Feedback */}
            <View style={s`mb-5`}>
              <Text style={s`text-sm text-gray-500 mb-2`}>MSL Feedback</Text>
              <TextInput
                multiline
                numberOfLines={4}
                style={s`
                  border border-gray-300 rounded-lg p-3 
                  min-h-[100px] text-gray-800
                `}
                placeholder="Enter feedback here"
              />
            </View>

            {/* Image Upload */}
            <TouchableOpacity 
              style={s`
                border border-dashed border-gray-300 rounded-lg 
                p-4 items-center justify-center mb-2
              `}
            >
              <Feather name="image" size={24} color="#999" />
              <Text style={s`text-gray-400 mt-2`}>Select Image</Text>
            </TouchableOpacity>

            <Text style={s`text-xs text-gray-500 mb-6`}>
              If you selected no, please share feedback of what you saw in the form of text or a photo
            </Text>

            {/* On Shelf Availability */}
            <View style={s`mb-5`}>
              <Text style={s`text-sm text-gray-500 mb-2`}>On shelf availability</Text>
              <TouchableOpacity 
                style={s`
                  border border-gray-300 rounded-lg p-3 
                  flex-row justify-between items-center
                `}
              >
                <Text style={s`text-gray-800`}>No</Text>
                <Feather name="chevron-down" size={20} color="#666" />
              </TouchableOpacity>
            </View>

            <Text style={s`text-xs text-gray-500 mb-4`}>
              Is there any OOS you have seen on the shelf?
            </Text>

            {/* OSL Feedback */}
            <View style={s`mb-5`}>
              <Text style={s`text-sm text-gray-500 mb-2`}>OSL Feedback</Text>
              <TextInput
                multiline
                numberOfLines={4}
                style={s`
                  border border-gray-300 rounded-lg p-3 
                  min-h-[100px] text-gray-800
                `}
                placeholder="Enter feedback here"
              />
            </View>

            {/* Image Upload */}
            <TouchableOpacity 
              style={s`
                border border-dashed border-gray-300 rounded-lg 
                p-4 items-center justify-center mb-2
              `}
            >
              <Feather name="image" size={24} color="#999" />
              <Text style={s`text-gray-400 mt-2`}>Select Image</Text>
            </TouchableOpacity>

            <Text style={s`text-xs text-gray-500 mb-6`}>
              If you selected no, please share feedback of what you saw in the form of text or a photo
            </Text>
          </View>
        </ScrollView>

        {/* Bottom Navigation Buttons */}
        <View style={s`
          flex-row justify-between px-6 py-4 
          border-t border-gray-200 bg-white
        `}>
          <TouchableOpacity 
            style={s`
              flex-1 mr-2 py-3 px-6 
              bg-gray-200 rounded-lg
              justify-center items-center
            `}
            onPress={() => navigation.goBack()}
          >
            <Text style={s`font-medium text-gray-700`}
            
            >Previous</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={s`
              flex-1 ml-2 py-3 px-6 
              bg-blue-500 rounded-lg
              justify-center items-center
            `}
          >
            <Text style={s`font-medium text-white`}>Next</Text>
          </TouchableOpacity>
        </View>

       
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default DetailsScreen;