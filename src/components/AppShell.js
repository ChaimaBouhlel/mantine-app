import React, { useState } from 'react';
import {
    BrowserRouter as Router,
    Link,
    Route,
    Routes
} from 'react-router-dom';
import {
    AppShell,
    Navbar,
    Header,
    Footer,
    Aside,
    Text,
    MediaQuery,
    Burger,
    useMantineTheme,
} from '@mantine/core';
import LightDarkModeButton from './LightDarkButton';
import MyTable from './MyTable';
import ChipsExample from './ChipsExample';
import InputExample from './InputExample';
import TextAndTitle from './TextAndTitle';
import Cards from './Cards';

export default function AppShellExample() {
    const theme = useMantineTheme();
    const [opened, setOpened] = useState(false);
    return (
        <Router>
            <AppShell
                styles={{
                    main: {
                        background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
                    },
                }}
                navbarOffsetBreakpoint="sm"
                asideOffsetBreakpoint="sm"
                fixed
                navbar={
                    <Navbar p="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 200, lg: 300 }}>
                        <Navbar.Section>
                            <Text>Navbar Section Title</Text>
                        </Navbar.Section>
                        <Navbar.Section grow mt="lg">
                            <div style={{ display: "flex", flexDirection: "column" }}>
                                <Text
                                    component={Link}
                                    variant="link"
                                    to="/"
                                >
                                    Home Page
                                </Text>
                                <Text
                                    component={Link}
                                    variant="link"
                                    to="/table"
                                >
                                    Table
                                </Text>
                                <Text
                                    component={Link}
                                    variant="link"
                                    to="/input"
                                >
                                    Input Page
                                </Text>
                                <Text
                                    component={Link}
                                    variant="link"
                                    to="/cards"
                                >
                                    Cards Page
                                </Text>
                                <Text
                                    component={Link}
                                    variant="link"
                                    to="/chips"
                                >
                                    Chips Page
                                </Text>

                            </div>
                        </Navbar.Section>
                        <Navbar.Section>
                            <Text>This is a footer</Text>
                        </Navbar.Section>
                    </Navbar>
                }
                aside={
                    <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
                        <Aside p="md" hiddenBreakpoint="sm" width={{ sm: 200, lg: 300 }}>
                            <Text>Application sidebar</Text>
                        </Aside>
                    </MediaQuery>
                }
                footer={
                    <Footer height={60} p="md">
                        Application footer
                    </Footer>
                }
                header={
                    <Header height={70} p="md">
                        <div style={{ display: 'flex', justifyContent: "space-between" }}>
                            <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
                                <Burger
                                    opened={opened}
                                    onClick={() => setOpened((o) => !o)}
                                    size="sm"
                                    color={theme.colors.gray[6]}
                                    mr="xl"
                                />
                            </MediaQuery>
                            <Text>Application header    </Text>
                            <LightDarkModeButton />
                        </div>
                    </Header>
                }
            >
                <Routes>
                <Route path='/' element={<TextAndTitle/>}/>
                <Route path='/input' element={<InputExample/>}/>
                <Route path='/cards' element={<Cards/>}/>
                <Route path='/table' element={<MyTable/>}/>
                <Route path='/chips' element={<ChipsExample/>}/>
                </Routes>
            </AppShell>
        </Router>
    );
}
