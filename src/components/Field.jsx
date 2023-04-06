import {
    Flex,
    FormControl,
    FormLabel,
    Input,
    Text,
    Tooltip,
    useColorModeValue
} from '@chakra-ui/react';

export default function Field({
    isRequired,
    id,
    title,
    tooltip,
    value,
    onChange,
    handleKeyDown,
    onKeyPress
}) {
    const border = useColorModeValue('black', 'white');

    return (
        <FormControl
            isRequired={isRequired}>
            <Flex
                align={'center'}>
                <FormLabel
                    htmlFor={'description'}
                    mt='1.5'>
                    {title}
                </FormLabel>
                <Tooltip
                    label={tooltip}
                    placement={'right'}
                    hasArrow>
                    <Text>
                        ⓘ
                    </Text>
                </Tooltip>
            </Flex>
            <Input
                borderRadius={'10px'}
                borderColor={border}
                id={id}
                value={value || ''}
                onChange={onChange}
                onKeyDown={handleKeyDown}
                onKeyPress={onKeyPress} />
        </FormControl>
    )
}
