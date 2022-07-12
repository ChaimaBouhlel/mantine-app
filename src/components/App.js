import Cards from "./Cards";
import { MantineProvider, ColorSchemeProvider,ColorScheme, Paper } from '@mantine/core';
import LightDarkModeButton from "./LightDarkButton";
import { useHotkeys, useLocalStorageValue } from "@mantine/hooks";
import Buttons from "./Buttons";


function App() {
  const [colorScheme, setColorScheme] = useLocalStorageValue({
    key: 'mantine-color-scheme',
    defaultValue: 'light',
    getInitialValueInEffect: true,
  });

  const toggleColorScheme = (value) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  useHotkeys([['mod+J', () => toggleColorScheme()]]);
  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS>
      <LightDarkModeButton />
        <Paper padding="md" radius={0} style={{minHeight:"100vh"}}>
          <Cards />
          <Buttons/>
        </Paper>
      </MantineProvider>
    </ColorSchemeProvider>

  );
}

export default App;
