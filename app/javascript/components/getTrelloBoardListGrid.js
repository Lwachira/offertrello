
import React, { useState } from 'react';
import {
    Box,
    Heading,
    Center,
    Select,
    HStack
} from "@chakra-ui/react"
import GetTrelloBoardCard from './getTrelloBoardCard';

var result;

const GetTrelloBoardListGrid = props => {

    const [boardListData, setBoardListData] = useState('');


    if (props.selectedBoard === '') {
        return null;
    }
    else {
        Trello.get(
            `boards/${props.selectedBoard}/lists`,
            { fields: "id,name" },
            function (data) {
                result = data;
            }
        )
    }


    if (result === undefined) {
        return null;
    }
    else {

        return (

            <>
                <HStack spacing={20} ml={6} mt={6}>
                    {
                        result.map((res) => (
                            <Box
                                w="xl"
                                boxShadow="base"
                                p="4"
                                rounded="md"
                                bg="white"
                                key={res.id}
                                value={res.id}
                            >
                                <Heading mb={3} textAlign="center" as="h4" size="md">{res.name}</Heading>
                                <GetTrelloBoardCard ListID={res.id} />
                            </Box>
                        ))
                    }
                </HStack>
            </>
        )
    }
    /*  if (list === '') {
         return null
     }
     else {
         return (
             <>
 
                 <HStack>
                     {
                         list.map((res) => (
                             <Box
                                 maxW="sm"
                                 borderWidth="1px"
                                 borderRadius="lg"
                                 overflow="hidden"
                                 key={res.id}
                                 value={res.id}
                             >
                                 {res.name}
                             </Box>
                         ))
                     }
                 </HStack>
             </>
         )
     } */
}
export default GetTrelloBoardListGrid  