module.exports = {
  name: "MyApp",
  version: "1.0.0",
  extra: {
    clerkPublishableKey: process.env.CLERK_PUBLISHABLE_KEY,
  },
  orientation: "portrait",
  icon: "./assets/nuocal-logo-3.png",
  userInterfaceStyle: "light",
  splash: {
    image: "./assets/nuocal-logo-3.png",
    resizeMode: "contain",
    backgroundColor: "#677B9C",
  },
  updates: {
    fallbackToCacheTimeout: 0,
  },
  assetBundlePatterns: ["**/*"],
  ios: {
    supportsTablet: true,
  },
  android: {
    adaptiveIcon: {
      foregroundImage: "./assets/nuocal-logo-3.png",
      backgroundColor: "#677B9C",
    },
  },
  web: {
    favicon: "./assets/favicon.png",
  },
};
