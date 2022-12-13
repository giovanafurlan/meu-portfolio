import Link from "next/link";

export default function TagLink({ tag }) {
  return (
    <Link
      href={"/blog/tags/[[...slug]]"}
      as={`/blog/tags/${tag.slug}`}>
      <a>{tag.name}</a>
    </Link>
  );
}
