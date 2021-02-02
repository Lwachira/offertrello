
import React, { useState } from 'react';
import {
    Box,
    Heading,
    Center,
    Select,
    HStack,
    Text
} from "@chakra-ui/react"
import GetTrelloAddCardModal from './getTrelloAddCardModal';

const GetTrelloBoardCard = props => {
    //props.ListID
    const [boardCardData, setBoardCardData] = useState('');

    Trello.get(
        `lists/${props.ListID}/cards`,
        { fields: "id,name" },
        function (data) {
            if (boardCardData == '')
                setBoardCardData(data);
        }
    )
    if (boardCardData == '') {
        return null
    }
    else {
        console.log(boardCardData)
        return (
            <>
                {
                    boardCardData.map((res) => (
                        <Box
                            boxShadow="base"
                            p="4"
                            mb={2}
                            key={res.id}
                            value={res.id}
                        >
                            <Text>{res.name}</Text>

                        </Box>
                    ))
                }
                <Center mt={3}>
                    <GetTrelloAddCardModal ListID={props.ListID} />
                </Center>
            </>
        )
    }

}
export default GetTrelloBoardCard;