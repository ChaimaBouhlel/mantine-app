import { Input, TextInput, Tooltip } from "@mantine/core";
import { AlertCircle, BrandGithub, ChevronDown } from "tabler-icons-react";

function InputExample() {



    return (

        <div>
            <TextInput
                icon={<BrandGithub size={16} />}
                rightSection={
                    <Tooltip label="We do not send spam" position="top" placement="end">
                        <AlertCircle size={16} style={{ display: 'block', opacity: 0.5 }} />
                    </Tooltip>
                }
                label="This is an input field"
                description="Description of the input fild. yeyyy yeyyyy"
                error="You made a huge error."
                required
            />
            <Input
                component="select"
                rightSection={<ChevronDown />}
            >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
            </Input>
        </div>
    );
}

export default InputExample;
