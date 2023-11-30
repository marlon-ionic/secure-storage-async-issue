import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'secure-storage-async-issue',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
