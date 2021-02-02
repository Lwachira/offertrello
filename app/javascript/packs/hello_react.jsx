// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React, { useState } from 'react';
import ReactDOM from 'react-dom'
import { ChakraProvider } from "@chakra-ui/react"
import {
  Box,
  Heading,
  Center,
  Select,
  HStack
} from "@chakra-ui/react"
import Home from '../components/home';


document.addEventListener('DOMContentLoaded', () => {

  ReactDOM.render(
    <ChakraProvider>
      <Home />
    </ChakraProvider>,
    document.body.appendChild(document.createElement('div')),
  )
})

/*


function Welcome(props) {
  return (
    <Center>
      <Heading>Hello, {props.name}</Heading>
    </Center>
  );
}

function App() {
  const [memeberName, setMememberName] = useState('');
  window.Trello.get("members/me", { fields: "all" }, function (data) {
    //console.log(err); // if something went wrong, this will be non-null
    setMememberName(data.fullName)
  })

  if (memeberName === '') {
    return (
      <Box>
        <Welcome />
      </Box>

    );

  }
  else {
    return (
      <div>
        <Welcome name={memeberName} />
        <GetTrelloBoardsSelect />
      </div>
    );
  }

}

 */
