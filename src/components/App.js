import { MantineProvider, ColorSchemeProvider, Paper } from '@mantine/core';
import { useHotkeys, useLocalStorageValue} from '@mantine/hooks';
import AppShellExample from "./AppShell";
import { QueryClient, QueryClientProvider } from 'react-query'

function App() {

  const [colorScheme, setColorScheme] = useLocalStorageValue({
    key: 'mantine-color-scheme',
    defaultValue: 'light',
    getInitialValueInEffect: true,
  });

  const queryClient = new QueryClient()

  const toggleColorScheme = (value) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  useHotkeys([['mod+J', () => toggleColorScheme()]]);

  return (
    <QueryClientProvider client={queryClient}>
      <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
        <MantineProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS>
          <Paper padding="md" radius={0} style={{ minHeight: "100vh" }}>
            <AppShellExample />
          </Paper>
        </MantineProvider>
      </ColorSchemeProvider>
    </QueryClientProvider>

  );
}

export default App;
