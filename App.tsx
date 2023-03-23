import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';
import { Dashboard } from './src/components/Dashboard';
import { Header } from './src/components/Header';
import { TaskProvider } from './src/contexts/ContextTasks';

export default function App() {
  return (
    <View>
      <TaskProvider>
        <Header />
        <Dashboard />
        <StatusBar />
      </TaskProvider>
    </View>
  );
}


