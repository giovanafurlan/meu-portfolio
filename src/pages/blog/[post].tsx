import { GetStaticProps, GetStaticPaths } from "next";
import { fetchPostContent } from "../../lib/blog";
import matter from "gray-matter";
import fs from "fs";
import yaml from "js-yaml";
import { parseISO } from 'date-fns';
import dynamic from 'next/dynamic';
const PostLayout = dynamic(() => import("../../components/PostLayout"));

const slugToPostContent = (postContents => {
  let hash = {}
  postContents.forEach(it => hash[it.slug] = it)
  return hash;
})(fetchPostContent());

export default function Post({
  image,
  title,
  dateString,
  slug,
  tags,
  intro,
  markdown
}) {

  return (
    <PostLayout
      title={title}
      image={image}
      date={parseISO(dateString)}
      slug={slug}
      tags={tags}
      intro={intro}>
      <div dangerouslySetInnerHTML={{ __html: markdown }} />
    </PostLayout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = fetchPostContent().map(it => "/blog/" + it.slug);

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params.post as string;
  const source = fs.readFileSync(slugToPostContent[slug].fullPath, "utf8");
  const { content, data } = matter(source, {
    engines: { yaml: (s) => yaml.load(s, { schema: yaml.JSON_SCHEMA }) as object }
  });

  const fileContent = matter(fs.readFileSync(`./content/blog/${slug}.mdx`, 'utf8'));
  const markdown = fileContent.content;

  return {
    props: {
      image: data.image,
      title: data.title,
      dateString: data.date,
      slug: data.slug,
      intro: data.intro,
      tags: data.tags,
      markdown
    },
  };
};