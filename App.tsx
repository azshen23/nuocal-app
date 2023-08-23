import React from "react";
import RootNavigation from "./navigation";
import { ClerkProvider } from "@clerk/clerk-expo";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
  useMutation,
} from "@tanstack/react-query";
import Constants from "expo-constants";
const queryClient = new QueryClient();
export default function App() {
  return (
    <ClerkProvider
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
