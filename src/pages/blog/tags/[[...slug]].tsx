import { GetStaticPaths, GetStaticProps } from "next";
import dynamic from 'next/dynamic';
const BasicMeta = dynamic(() => import("../../../components/meta/BasicMeta"));
const OpenGraphMeta = dynamic(() => import("../../../components/meta/OpenGraphMeta"));
const TwitterCardMeta = dynamic(() => import("../../../components/meta/TwitterCardMeta"));
const TagPostList = dynamic(() => import("../../../components/TagPostList"));
import config from "../../../lib/config";
import { countPosts, listPostContent, PostContent } from "../../../lib/blog";
import { getTag, listTags, TagContent } from "../../../lib/tags";

type Props = {
  blog: PostContent[];
  tag: TagContent;
  page?: string;
  pagination: {
    current: number;
    pages: number;
  };
};

export default function Tags({ blog, tag, page }: Props) {
  const url = `/blog/tags/${tag.name}` + (page ? `/${page}` : "");
  const title = tag.name;
  return (
    <>
      <BasicMeta url={url} title={title} />
      <OpenGraphMeta url={url} title={title} />
      <TwitterCardMeta url={url} title={title} />
      <TagPostList blog={blog} tag={tag} />
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const queries = params.slug as string[];
  const [slug, page] = [queries[0], queries[1]];
  const blog = listPostContent(
    page ? parseInt(page as string) : 1,
    config.posts_per_page,
    slug
  );
  const tag = getTag(slug);
  const pagination = {
    current: page ? parseInt(page as string) : 1,
    pages: Math.ceil(countPosts(slug) / config.posts_per_page),
  };
  const props: {
    blog: PostContent[];
    tag: TagContent;
    pagination: { current: number; pages: number };
    page?: string;
  } = { blog, tag, pagination };
  if (page) {
    props.page = page;
  }
  return {
    props,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = listTags().flatMap((tag) => {
    const pages = Math.ceil(countPosts(tag.slug) / config.posts_per_page);
    return Array.from(Array(pages).keys()).map((page) =>
      page === 0
        ? {
            params: { slug: [tag.slug] },
          }
        : {
            params: { slug: [tag.slug, (page + 1).toString()] },
          }
    );
  });
  return {
    paths: paths,
    fallback: false,
  };
};
