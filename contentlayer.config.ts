import { defineDocumentType, makeSource } from 'contentlayer/source-files';

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `**/*.{md,mdx}`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    summary: {
      type: 'string',
      required: false,
    },
    date: {
      type: 'date',
      required: true,
    },
    tags: {
      type: 'list',
      of: { type: 'string' },
      required: false,
    },
    draft: {
      type: 'boolean',
      default: false,
    },
    cover_image: {
      type: 'string',
      required: false,
    },
    layout: {
      type: 'string',
      required: false,
    },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (post) => {
        // Extract filename from path, remove date prefix if present (Jekyll format)
        const filename = post._raw.sourceFileName.replace(/\.mdx?$/, '');
        // Remove YYYY-MM-DD prefix if present
        return filename.replace(/^\d{4}-\d{2}-\d{2}-/, '');
      },
    },
    url: {
      type: 'string',
      resolve: (post) => {
        const filename = post._raw.sourceFileName.replace(/\.mdx?$/, '');
        const slug = filename.replace(/^\d{4}-\d{2}-\d{2}-/, '');
        return `/blog/${slug}`;
      },
    },
    readingTime: {
      type: 'number',
      resolve: (post) => {
        const wordsPerMinute = 200;
        const wordCount = post.body.raw.split(/\s+/g).length;
        return Math.ceil(wordCount / wordsPerMinute);
      },
    },
  },
}));

export default makeSource({
  contentDirPath: 'assets/blog/posts',
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});