import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Plant Doctor' }} />
      <Stack.Screen name="Login" />
      <Stack.Screen name="Register" />
      <Stack.Screen name="Home" />
      <Stack.Screen name="History" />
      <Stack.Screen name="ChangePassword" options={{ title: 'Change Password' }} />
      <Stack.Screen name="ForgetPassword" options={{ title: 'Forget Password' }} />
      <Stack.Screen name="ChooseImage" options={{ title: 'Please Choose Your Image' }} />
      <Stack.Screen name="DiseaseInfo" />
    </Stack>
  );
}
