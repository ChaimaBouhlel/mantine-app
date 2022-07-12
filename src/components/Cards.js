import { Grid, Card, Image, Text, Badge, Button, Group, useMantineTheme } from '@mantine/core';

function Cards() {

    const theme = useMantineTheme()

    return (
        <div>

            <Grid justify={"space-around"}>
                <Grid.Col style={{ maxWidth: 350 }} sm={4} xs={4}>
                    <div style={{ width: 'auto', margin: 'auto' }}>
                        <Card shadow="sm" p="lg">
                            <Card.Section>
                                <Image src="https://images.unsplash.com/photo-1657611880931-ace80aa360d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" height={300} alt="Norway" />
                            </Card.Section>

                            <Group position="apart" style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>
                                <Text weight={500}>Norway Fjord Adventures</Text>
                                <Badge color="pink" variant="light">
                                    On Sale
                                </Badge>
                            </Group>

                            <Text size="sm" style={{ lineHeight: 1.5 }}>
                                With Fjord Tours you can explore more of the magical fjord landscapes with tours and
                                activities on and around the fjords of Norway
                            </Text>

                            <Button variant="light" color="blue" fullWidth style={{ marginTop: 14 }}>
                                Book classic tour now
                            </Button>
                        </Card>
                    </div>
                </Grid.Col>
                <Grid.Col style={{ maxWidth: 350 }} sm={4} xs={4}>
                    <div style={{ width: 'auto', margin: 'auto' }}>
                        <Card shadow="sm" p="lg">
                            <Card.Section>
                                <Image src="https://images.unsplash.com/photo-1497206365907-f5e630693df0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" height={300} alt="Norway" />
                            </Card.Section>

                            <Group position="apart" style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>
                                <Text weight={500}>Norway Fjord Adventures</Text>
                                <Badge color="pink" variant="light">
                                    On Sale
                                </Badge>
                            </Group>

                            <Text size="sm" style={{ lineHeight: 1.5 }}>
                                With Fjord Tours you can explore more of the magical fjord landscapes with tours and
                                activities on and around the fjords of Norway
                            </Text>

                            <Button variant="light" color="blue" fullWidth style={{ marginTop: 14 }}>
                                Book classic tour now
                            </Button>
                        </Card>
                    </div>
                </Grid.Col>
                <Grid.Col style={{ maxWidth: 350 }} sm={4} xs={4}>
                    <div style={{ width: 'auto', margin: 'auto' }}>
                        <Card shadow="sm" p="lg">
                            <Card.Section>
                                <Image src="https://images.unsplash.com/photo-1550853024-fae8cd4be47f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGJpcmR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" height={300} alt="Norway" />
                            </Card.Section>

                            <Group position="apart" style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>
                                <Text weight={500}>Norway Fjord Adventures</Text>
                                <Badge color="pink" variant="light">
                                    On Sale
                                </Badge>
                            </Group>

                            <Text size="sm" style={{ lineHeight: 1.5 }}>
                                With Fjord Tours you can explore more of the magical fjord landscapes with tours and
                                activities on and around the fjords of Norway
                            </Text>

                            <Button variant="light" color="blue" fullWidth style={{ marginTop: 14 }}>
                                Book classic tour now
                            </Button>
                        </Card>
                    </div>
                </Grid.Col>
            </Grid>
        </div>
    );
}

export default Cards;
