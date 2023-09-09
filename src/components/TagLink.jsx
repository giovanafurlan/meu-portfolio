import Link from "next/link";

export default function TagLink({ tag }) {
  return (
    <Link
      href={"/blog/tags/[[...slug]]"}
      as={`/blog/tags/${tag.slug}`}>
      {tag.name}
    </Link>
  );
}
