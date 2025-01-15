import type { APIRoute } from 'astro';
import rss from "@astrojs/rss";
import { getCollection, type CollectionEntry } from 'astro:content';

export const GET: APIRoute = async ({ params, request, site }) => {
  const blogPosts = await getCollection('blog');
  const notes = await getCollection('note');

  const items = [
    ...blogPosts.map(({ data, slug }: CollectionEntry<'blog'>) => ({
      title: data.title,
      pubDate: data.date,
      description: data.description,
      tags: data.tags,
      link: `/posts/${slug}`
    })),
    ...notes.map(({ data, slug }: CollectionEntry<'note'>) => ({
      title: data.title,
      pubDate: data.date,
      description: data.description,
      link: `/notes/1`
    }))
  ];

  return rss({
    stylesheet: '/styles/rss.xsl',
    title: 'Rogelio’s Blog and Notes',
    description: 'My personal blog and notes about my development journey and fun things!',
    site: site ?? '',
    items,
    customData: `<language>en-us</language>`,
  });
}
