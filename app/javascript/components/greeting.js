import React, { useState } from 'react';
import {
    Box,
    Heading,
    Center,
    Select,
    HStack
} from "@chakra-ui/react"
import GetTrelloBoardsSelect from './getTrelloBoardSelect';

const Greeting = () => {

    const [memeberName, setMememberName] = useState('');
    window.Trello.get("members/me", { fields: "all" }, function (data) {
        //console.log(err); // if something went wrong, this will be non-null
        setMememberName(data.fullName)
    })

    if (memeberName === '') {
        return (
            <Box>
                <Center>
                    <Heading>Hello</Heading>
                </Center>
            </Box>

        );
    }
    else {
        return (
            <div>
                <Center>
                    <Heading>Hello, {memeberName}</Heading>
                </Center>
                <GetTrelloBoardsSelect />
            </div>
        );
    }
}

export default Greeting;