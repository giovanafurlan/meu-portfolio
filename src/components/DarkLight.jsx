import {
    Menu,
    MenuButton,
    useColorMode,
    useColorModeValue
} from "@chakra-ui/react";
import {
    FiMoon,
    FiSun
} from 'react-icons/fi';

export default function DarkLight() {
    const { colorMode, toggleColorMode } = useColorMode();
    const color = useColorModeValue('black', 'white');

    return (
        <Menu
            placement='top-start'>
            <MenuButton
                title='DarkLight'
                transition='all 0.2s'
                fontSize={'lg'}
                background={'none'}
                p={0}
                onClick={toggleColorMode}
                _hover={{ bg: 'none' }}
                _focus={{
                    outline: 'none'
                }}>
                {colorMode === 'light'
                    ?
                    <FiMoon color={color} />
                    :
                    <FiSun color={color} />}
            </MenuButton>
        </Menu>
    );
};