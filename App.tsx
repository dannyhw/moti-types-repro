import { ScreenContent } from 'components/ScreenContent';
import { StatusBar } from 'expo-status-bar';
import { MotiView } from 'moti';

export default function App() {
  return (
    <>
      <ScreenContent title="Home" path="App.tsx" />
      <MotiView
        from={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{
          opacity: 0,
        }}
        exitTransition={{ duration: 300 }}
      />
      <StatusBar style="auto" />
    </>
  );
}
