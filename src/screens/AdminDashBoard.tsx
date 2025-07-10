// import React, { useEffect, useState } from 'react';
// import {
//   View,
//   Text,
//   KeyboardAvoidingView,
//   ScrollView,
//   Platform,
//   Alert,
// } from 'react-native';
// import TitleText from '../components/TitleText';
// import { globalStyles } from '../styles/styles';
// import AppButton from '../components/AppButton';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import axios from 'axios';
// import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
// import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// type RootStackParamList = {
//   LoginScreen: undefined;
//   AdminDashBoard: { username: string };
// };

// const USERS_KEY = '@users';

// const AdminDashBoard: React.FC = () => {
//   const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
//   const route = useRoute<RouteProp<RootStackParamList, 'AdminDashBoard'>>();
//   const { username } = route.params;

//   const [ipAddress, setIpAddress] = useState('');
//   const [country, setCountry] = useState('');
//   const [users, setUsers] = useState<any[]>([]);

//   useEffect(() => {
//     fetchIPAndLocation();
//   }, []);

//   const fetchIPAndLocation = async () => {
//     try {
//       // ✅ Use HTTPS and no IP parameter
//       const locationRes = await axios.get('https://ip-api.com/json');
//       setIpAddress(locationRes.data.query);   // 'query' contains the IP
//       setCountry(locationRes.data.country);   // 'country' is the country name
//     } catch (error) {
//       console.error('Error fetching IP or country:', error);
//       Alert.alert('Error', 'Unable to fetch IP and country.');
//     }
//   };

//   const fetchRegisteredUsers = async () => {
//     try {
//       const storedUsers = await AsyncStorage.getItem(USERS_KEY);
//       const parsedUsers = storedUsers ? JSON.parse(storedUsers) : [];
//       setUsers(parsedUsers);
//     } catch (error) {
//       Alert.alert('Error', 'Failed to fetch users.');
//     }
//   };

//   const handleLogOut = () => {
//     navigation.reset({
//       index: 0,
//       routes: [{ name: 'LoginScreen' }],
//     });
//   };

//   return (
//     <KeyboardAvoidingView
//       style={globalStyles.container}
//       behavior={Platform.OS === 'ios' ? 'padding' : undefined}
//     >
//       <ScrollView
//         contentContainerStyle={globalStyles.formWrapper1}
//         keyboardShouldPersistTaps="handled"
//       >
//         <TitleText text="Admin Dashboard" />

//         <View style={{ alignSelf: 'center', marginBottom: 10 }}>
//           <Text style={globalStyles.welcomeText}>Welcome, {username}!</Text>
//           <Text style={globalStyles.countryText}>IP Address: {ipAddress}</Text>
//           <Text style={globalStyles.countryText}>Country: {country}</Text>
//         </View>

//         <View style={{ marginTop: 20 }}>
//           <Text style={globalStyles.subText}>Registered Users:</Text>

//           {users.length === 0 ? (
//             <Text style={globalStyles.subText}>No users found.</Text>
//           ) : (
//             users.map((user, index) => (
//               <Text key={index} style={globalStyles.userText}>
//                 • {user.username} ({user.email}) ({user.password})
//               </Text>
//             ))
//           )}
//         </View>

//         {/* Button to fetch users manually */}
//         <AppButton title="Fetch Users" onPress={fetchRegisteredUsers} />

//         {/* Log out button */}
//         <AppButton title="Log Out" onPress={handleLogOut} />
//       </ScrollView>
//     </KeyboardAvoidingView>
//   );
// };

// export default AdminDashBoard;
import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  Alert,
  TouchableOpacity,
} from 'react-native';
import TitleText from '../components/TitleText';
import { globalStyles } from '../styles/styles';
import AppButton from '../components/AppButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  LoginScreen: undefined;
  AdminDashBoard: { username: string };
};

const USERS_KEY = '@users';

const AdminDashBoard: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const route = useRoute<RouteProp<RootStackParamList, 'AdminDashBoard'>>();
  const { username } = route.params;

  const [ipAddress, setIpAddress] = useState('');
  const [country, setCountry] = useState('');
  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    fetchIPAndLocation();
  }, []);

  const fetchIPAndLocation = async () => {
    try {
      const res = await axios.get('https://ipinfo.io/json'); 
      setIpAddress(res.data.ip);
     setCountry(`${res.data.country} (${res.data.city}, ${res.data.region})`);

    } catch (error) {
      console.error('Error fetching IP or country:', error);
      Alert.alert('Error', 'Unable to fetch IP and country.');
    }
  };

  const fetchRegisteredUsers = async () => {
    try {
      const storedUsers = await AsyncStorage.getItem(USERS_KEY);
      const parsedUsers = storedUsers ? JSON.parse(storedUsers) : [];
      setUsers(parsedUsers);
    } catch (error) {
      Alert.alert('Error', 'Failed to fetch users.');
    }
  };

  const handleLogOut = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'LoginScreen' }],
    });
  };

  return (
    <KeyboardAvoidingView
      style={globalStyles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView
        contentContainerStyle={globalStyles.formWrapper1}
        keyboardShouldPersistTaps="handled"
      >
        <TitleText text="Admin Dashboard" />

        <View style={{ alignSelf: 'center', marginBottom: 10 }}>
          <Text style={globalStyles.welcomeText}>Welcome, {username}!</Text>
          <Text style={globalStyles.countryText}>IP Address: {ipAddress}</Text>
          <Text style={globalStyles.countryText}>Country: {country}</Text>
        </View>
         <TouchableOpacity  onPress={fetchRegisteredUsers} style={globalStyles.touchButton} >
          <Text>Click to fetch users</Text>
         </TouchableOpacity>
        <View style={{ marginTop: 20 }}>
          <Text style={globalStyles.subText}>Registered Users:</Text>
           

          {users.length === 0 ? (
            <Text style={globalStyles.subText}>No users found.</Text>
          ) : (
            users.map((user, index) => (
              <Text key={index} style={globalStyles.userText}>
                • {user.username} ({user.email}) ({user.password})
              </Text>
            ))
          )}
        </View>

      
       
        
        <AppButton title="Log Out" onPress={handleLogOut} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default AdminDashBoard;
