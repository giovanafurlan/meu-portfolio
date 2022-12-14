import { Tag, Text } from "@chakra-ui/react";
import Link from "next/link";

export default function TagButton({ tag }) {
  return (
    <Link
      href={"/blog/tags/[[...slug]]"}
      as={`/blog/tags/${tag.slug}`}>
      <a>
        <Text
          fontSize={'16'}>
          #{tag.name}
        </Text>
      </a>
    </Link>
  );
}