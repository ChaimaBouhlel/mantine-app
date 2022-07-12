import { Button } from "@mantine/core";
import { useState } from "react";
import { Sun, MoonStars } from 'tabler-icons-react';

function Buttons() {

    const [loading, setLoading] = useState(false)

    const handleClick = () => {
        setLoading(true)
    }
    return (
        <>
            <Button
                leftIcon={<Sun />}
                variant="gradient"
                gradient={{ from: 'indigo', to: 'cyan' }}
            >Indigo cyan</Button>
            <Button
                loading={loading}
                variant="gradient"
                onClick={handleClick}
                gradient={{ from: 'teal', to: 'lime', deg: 105 }}
            >
                Lime green
            </Button>
            <Button 
            component="a"
            href="https://mantine.dev/core/button/"
            target="_blank"
            variant="gradient" gradient={{ from: 'teal', to: 'blue', deg: 60 }}>Teal blue</Button>
            <Button variant="gradient"
            styles={(theme)=>({
                root:{
                    border: 0,
                    height:50,
                    fontFamily:"monospace",
                    paddingRight: 60,
                    '&:hover':{
                        paddingLeft: 60,
                        height:51,
                    }
                },
            })}
             gradient={{ from: 'orange', to: 'red' }}>Orange red</Button>
            <Button variant="gradient" gradient={{ from: '#ed6ea0', to: '#ec8c69', deg: 35 }}>Peach</Button>
        </>
    );
}

export default Buttons;
