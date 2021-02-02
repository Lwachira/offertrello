
import React, { useState } from 'react';
import {
    Select
} from "@chakra-ui/react"
import GetTrelloBoardListGrid from './getTrelloBoardListGrid';

const GetTrelloBoardsSelect = () => {
    const [boardData, setBoardData] = useState('');
    const [trelloError, setTrelloError] = useState('');
    const [selectedBoard, setSelectedBoard] = useState('');

    window.Trello.get(
        "members/me/boards",
        { fields: "id,name" },
        function (data) {
            if (boardData == '')
                setBoardData(data)
        },
        function (err) {
            if (trelloError == '')
                setTrelloError(err); // if something went wrong, this will be non-null
        }
    )


    if (trelloError !== '') {
        return null
    }
    else {

        if (boardData === '') {
            return null
        }
        else {
            const _updateSelectedBoard = event => {
                setSelectedBoard(event.target.value)
            }
            return (
                <>
                    <Select onChange={_updateSelectedBoard} placeholder="Select Trello Board" ml={6} mt={6} w="95%" variant="filled">
                        {
                            boardData.map((res) => (
                                <option key={res.id} value={res.id}>{res.name}</option>
                            ))
                        }
                    </Select>
                    <GetTrelloBoardListGrid selectedBoard={selectedBoard} />
                </>
            )
        }

    }
}
export default GetTrelloBoardsSelect;