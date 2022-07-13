import { Text, Title } from "@mantine/core";

function TextAndTitle() {
    return (
        <div>
            <Title
                order={1}
                align="center"
            >
                This is a TITLE

            </Title>
            <Text size="lg" weight={700} transform="capitalize">
                This is a text. We are testing texts in mantine. This is awesome!
                <Text
                    size="xl"
                    variant="gradient"
                    gradient={{ from: 'indigo', to: 'cyan', deg: 45 }}
                >
                    Welcome to the home page
                </Text>

                consectetur adipiscing elit. Nulla laoreet mattis blandit. Fusce ac pretium purus. Praesent posuere in lorem et egestas.
            </Text>
        </div>
    );
}

export default TextAndTitle;