import { MantineProvider, Text, Paper, Button, Loader } from '@mantine/core';

const myTheme = {
  colorScheme: 'light',
  primaryColor: 'orange',
  defaultRadius: 0,
  fontFamily: "Open Sans",
  fontSizes: {md:50}, 
  shadows:{md:  '1px 1px 3px rgba(0,0,0,.25)'}
};
function ExampleComponent() {
  return (
    <div>
      <MantineProvider theme={{
        colorScheme: 'dark',
        fontFamily: 'Greycliff CF, sans-serif',
        loader: "bars",
        colors: {
          palette: [

            "#91a7ff",
            "#c3fae8",

            "#eebefa",
            "#4c6ef5",
            "#faa2c1",
          ],
        },
      }}
        styles={{
          Button: (theme) => ({
            root: {
              backgroundColor: theme.colors.palette[4]
            }
          })
        }}
      >
        <MantineProvider theme={myTheme}>
          <Paper shadow="md" radius="md" p="lg">
            <Text>Paper is the most basic ui component</Text>
            <Text>
              Use it to create cards, dropdowns, modals and other components that require background
              with shadow
            </Text>
          </Paper>
        </MantineProvider>

        <Paper shadow="sm" radius="md" p="lg">
          <Text>Paper is the most basic ui component</Text>
          <Text>
            Use it to create cards, dropdowns, modals and other components that require background
            with shadow
          </Text>

        </Paper>
        <Button>
          Settings
        </Button>
        <Loader></Loader>

      </MantineProvider>
    </div>


  );
}

export default ExampleComponent;
