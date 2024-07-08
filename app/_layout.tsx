import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" />
      <Stack.Screen name="Login" />
      <Stack.Screen name="Register" />
      <Stack.Screen name="Home" />
      <Stack.Screen name="History" />
      <Stack.Screen name="ChangePassword" />
      <Stack.Screen name="ForgetPassword" />
      <Stack.Screen name="ChooseImage" />
      <Stack.Screen name="DiseaseInfo" />
    </Stack>
  );
}
