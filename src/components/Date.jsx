import { Text } from "@chakra-ui/react";
import { format, formatISO } from "date-fns";

export default function Date({ date }) {
  
  return (
    <time dateTime={formatISO(date)}>
      <Text
        as={'span'}
        color='gray'>
        {format(date, "d LLLL, yyyy")}
      </Text>
    </time>
  );
}
