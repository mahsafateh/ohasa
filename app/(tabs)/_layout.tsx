import { Redirect, Slot } from "expo-router";

export default function _Layout() {
  const isAuthenticated = false;
  if (isAuthenticated) return <Redirect href="/sign-up" />;
  return <Slot />;
}
