import "./styles.css";
import { ChakraProvider } from "@chakra-ui/react";

import { Front } from "./components/pages/Front";
import { About } from "./components/pages/About";
import { Contact } from "./components/pages/Contact";

export default function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <Front />
        <About />
        <Contact />
      </ChakraProvider>
    </div>
  );
}
