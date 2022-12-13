import dynamic from 'next/dynamic';
const BasicMeta = dynamic(() => import("../../components/meta/BasicMeta"));
const OpenGraphMeta = dynamic(() => import("../../components/meta/OpenGraphMeta"));
const TwitterCardMeta = dynamic(() => import("../../components/meta/TwitterCardMeta"));
const PostList = dynamic(() => import("../../components/PostList"));
import useTranslation from "next-translate/useTranslation";
import config from "../../lib/config";
import { listPostContent } from "../../lib/blog";
import { listTags } from "../../lib/tags";

export default function Posts({ blog, tags }) {
  const { t } = useTranslation("common");

  const url = "/blog";
  const title = 'Blog'
  return (
    <>
      <BasicMeta url={url} title={title} />
      <OpenGraphMeta url={url} title={title} />
      <TwitterCardMeta url={url} title={title} />
      <PostList blog={blog} tags={tags} />
    </>
  );
}

export const getStaticProps = async () => {
  const blog = listPostContent(1, config.posts_per_page);
  const tags = listTags();

  return {
    props: {
      blog,
      tags
    },
  };
};
