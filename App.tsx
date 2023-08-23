import React from "react";
import RootNavigation from "./navigation";
import { ClerkProvider } from "@clerk/clerk-expo";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
  useMutation,
} from "@tanstack/react-query";
import * as SecureStore from "expo-secure-store";
import Constants from "expo-constants";
const tokenCache = {
  async getToken(key: string) {
    try {
      return SecureStore.getItemAsync(key);
    } catch (err) {
      return null;
    }
  },
  async saveToken(key: string, value: string) {
    try {
      return SecureStore.setItemAsync(key, value);
    } catch (err) {
      return;
    }
  },
};
const queryClient = new QueryClient();
export default function App() {
  return (
    <ClerkProvider
      tokenCache={tokenCache}
      publishableKey={
        "pk_test_YnJpZWYtZ29zaGF3ay05Ny5jbGVyay5hY2NvdW50cy5kZXYk"
      }
    >
      <QueryClientProvider client={queryClient}>
        <RootNavigation />
      </QueryClientProvider>
    </ClerkProvider>
  );
}
