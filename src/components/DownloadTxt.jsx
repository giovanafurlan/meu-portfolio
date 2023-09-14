import { Button, useColorModeValue } from '@chakra-ui/react';
import React from 'react'
import { AiOutlineDownload } from 'react-icons/ai';

export default function DownloadTxt({ content }) {

    const bg2 = useColorModeValue('black', 'white');
    const color = useColorModeValue('white', 'black');
    const hover = useColorModeValue('gray.600', 'gray.300');

    const downloadTxtFile = (content) => {
        const element = document.createElement("a");
        const file = new Blob([JSON.stringify(content)],
            { type: 'text/plain;charset=utf-8' });
        element.href = URL.createObjectURL(file);
        element.download = "myFile.txt";
        document.body.appendChild(element);
        element.click();
    }

    return (
        <Button
            float={'right'}
            w={{
                lg: 'min-content',
                sm: 'full'
            }}
            color={bg2}
            bg={"none"}
            _hover={{
                bg: hover,
                color: color
            }}
            onClick={() => downloadTxtFile(content)}>
            <AiOutlineDownload size={"20px"}/>
        </Button>
    )
}
