import BasicMeta from "../../components/meta/BasicMeta";
import OpenGraphMeta from "../../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../../components/meta/TwitterCardMeta";
import PostList from "../../components/PostList";
import config from "../../lib/config";
import { listPostContent } from "../../lib/blog";
import { listTags } from "../../lib/tags";
import useTranslation from "next-translate/useTranslation";

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
  }
}