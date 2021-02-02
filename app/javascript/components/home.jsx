import React, { useState, useEffect } from 'react';
import {
    Box,
    Heading,
    Center,
    Select,
    HStack
} from "@chakra-ui/react"

import Greeting from './greeting'

const Home = () => {

    window.Trello.authorize({
        type: 'popup',
        name: 'Getting Started Application',
        scope: {
            read: 'true',
            write: 'true'
        },
        expiration: '1hour'
    });
    return (
        <Greeting />
    )
}

export default Home;