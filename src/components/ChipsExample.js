import { Chip, Chips } from '@mantine/core';
import { useState } from 'react';


function ChipsExample() {

    const [value, setValue] = useState('react');


    return (
        <Chips
            multiple={false}
            value={value}
            onChange={setValue}
            color="cyan"
            variant="filled"
            spacing="lg"
            size="lg"
        >
            <Chip value="react">React</Chip>
            <Chip value="ng">Angular</Chip>
            <Chip value="svelte">Svelte</Chip>
            <Chip value="vue">Vue</Chip>
        </Chips>
    );
}

export default ChipsExample;
