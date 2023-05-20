import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

export default function App() {
  return (
    <View className='bg-gray-950 flex-1 items-center justify-center'>
      <Text className='text-gray-50 font-bold text-5xl'>Entrou</Text>
      <StatusBar style="light" translucent />
    </View>
  );
}


