import { useState } from 'react';
import {
  Container
} from '@chakra-ui/react';
import dynamic from 'next/dynamic';
const Menu = dynamic(() => import("../../../components/Menu"));
const LinkResult = dynamic(() => import("./LinkResult"));
const InputShortener = dynamic(() => import("./InputShortener"));

export default function EncurtadorURL() {

  const [inputValue, setInputValue] = useState("");

  return (
    <Menu>
      <InputShortener setInputValue={setInputValue} />
      <LinkResult inputValue={inputValue} />
    </Menu>
  );
}
