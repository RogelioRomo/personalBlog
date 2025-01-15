---
title: My blog project
date: 01-13-2025
description: Explanation on what I did in this website using Astro
image: ''
tags: [Astro]
---

## Astro

<br/>

I've been using Astro for some minor thing, mostly small projects to actually
learn how Astro works. One of those was of course a PokeAPI project (classic and expected right?).
Jokes aside, I've notice how quickly I can get things done with Astro, so easy to use and It makes
sense. It's different to something like React, which to me can be very abstract and actually needs
to put your brain to work.

<br/>

With Astro, you do basic things because the main focus is to build basic sites, like this one!
And dont get me wrong, you can totally build complex stuff with Astro, but its not the main
focus since when you actually need work with complexity then you implement components with
another frontend framework like React, Vue or any other supported by Astro.

<br/>

## Cool things in this site

<br/>

### Tailwind

<br/>

I already named Astro a lot (7 times tba), but what I have not mentioned is that I'm also using
TailwindCss. This is not the first time I use it, in fact I've been using it for over a year.
It just good, I can say much wrong about it (ignoring the bloated code you could get when using it),
just like Astro is just so easy an quick to work with that it's honestly a better option most of
the times. Btw the integration of tailwind and Astro is really cool because you just need to run
a line on your shell and you're ready to go.

<br/>

### .MD Files

<br/>

I'm using .md files to redact and built the posts and notes. Since .md actually can be interpreted
and transformed on the browser to HTML it's really easy to maintain and use. Of course this can't be
true if you are building something bigger because you would be better implementing a database to
actually maintain the performance when you have a lot of requests.

<br/>

How does .md files work with Astro? Like butter and bread. You have a built in structure you can
follow to allocate your .md (or .mdx) files in a 'content' folder. This way Astro can figure out
that you have files that need to be render on your site. You need a config file to build this logic
which is called a 'collection' which creates a schema with the frontmatter of you .md files and then
you can practically use that data on every page or component you want. It's really easy and
really cool.

<br/>

```typescript
const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string(),
    description: z.string(),
    image: z.string(),

    //relation
    tags: z.array(z.string()),
  })
})
```

<br/>

You can interact whit this files even to create 'pagination' on your sites. Normally you create a
router and then you add logic to the page you want to paginate to create new routes based on you
content and name those new pages based on your slugs. In Astro you can do this but just naming
you file [page].astro this way you tell astro that this page will have a pagination logic so you
just end up interacting with your data getting your collection and setting the amount of pages
you want with "pageSize: number".

<br/>

```typescript
export const getStaticPaths = (async ({ paginate }) => {
  const notePosts = await getCollection("note");
  return paginate(notePosts, { pageSize: 3 });
}) satisfies GetStaticPaths;

const { page } = Astro.props;
```

<br/>

## Wrapping up

<br/>

So in a few words... Astro Rocks!!! so you should use it, like really try it out, you'll love it.
