import { Tag, Text } from "@chakra-ui/react";
import Link from "next/link";

export default function TagButton({ tag }) {
  return (
    <Link
      href={"/blog/tags/[[...slug]]"}
      as={`/blog/tags/${tag.slug}`}>
      <Text
        fontSize={'sm'}>
        #{tag.name}
      </Text>
    </Link>
  );
}