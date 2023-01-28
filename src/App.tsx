import React from "react";
import { ChakraProvider, Flex } from "@chakra-ui/react";
import Contacts from "components/contacts";
import { store } from "store";
import { theme } from "./theme";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <Flex maxW="100%" flex={1} justify="center">
          <Contacts />
        </Flex>
      </ChakraProvider>
    </Provider>
  );
}

export default App;
