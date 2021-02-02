
import React, { useState } from 'react';
import {
    Box,
    Heading,
    Center,
    Select,
    HStack,
    Text,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    FormControl,
    FormLabel,
    Input,
    Textarea
} from "@chakra-ui/react"

const GetTrelloAddCardModal = props => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    //console.log(props.ListID)
    let [value, setValue] = React.useState("")

    let handleInputChange = (e) => {
        let inputValue = e.target.value
        setValue(inputValue)
    }

    var creationSuccess = function (data) {
        console.log('Card created successfully.');
    };

    const _addNewCard = () => {

        var newCard = {
            name: value,
            // Place this card at the top of our list
            idList: props.ListID,
            pos: 'top'
        };
        window.Trello.post('/cards/', newCard, creationSuccess);
        onClose();
    }
    return (
        <>
            <Button onClick={onOpen}>Open Modal</Button>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Add your card item</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Textarea
                            value={value}
                            onChange={handleInputChange}
                            placeholder="Enter a title for this card…"
                            size="sm"
                        />
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme="blue" mr={3} onClick={_addNewCard}>
                            Save
                        </Button>
                        <Button onClick={onClose}>Cancel</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}
export default GetTrelloAddCardModal;