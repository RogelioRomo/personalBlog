---
title: RateFreak, rate everything
date: 07-01-2026
description: Describing my experience building a personal site to rate media
image: ''
tags: [Personal project, PayloadCMS, Next.js]
---

## What is RateFreak?

Is a website on which you can rate and add a review of the media you have consume.
These can be music albums or tracks, books, comics, manga, TV shows, etc. In reality
I builded it just for myself because I have noticed that I watch, read, or listen to new
stuff every now and then but I don't track it. This is specially annoying because when
people ask me if I watched a TV series or if I listened to an album my mind goes blank lol.

This is my way of preserving data that matter. A way to later come back when people ask me
what do I recommend for them to listen, or read. Is just easier to consult it on my website
than trying to remember everything.

## Design

Before the explanation I want to say that the web app inspires from Letterboxd, a similar app that
allows users to log movies, only movies tho; that's why I want it to make something for all the
other type of media.

![Image of RateFreak homepage](https://res.cloudinary.com/dkktgzgff/image/upload/v1779292531/cdf90c8b-c698-4d55-a982-6fcaf22837d1.png)

I wanted to have an easy way to add items without putting that much time into it, keep in mind that
apps like this work better if there is already existing data. I could scrape an API for the music and
obtain that data, but the issue with this is that I am not dealing with only one type of media, I have
multiple types of media which means multiple API's to scrap, so It would take time I really would prefer
spending it writing code.

Since this was only a web app I would use and maybe less than 5 users in case friends would like to use it
the best and easier approach was to just make requests to an API search endpoints and retrieve the data in
order to then save it in my database with the data I stablish, because I don't really need all the data the
API's return, at most I only need 5 fields per type of media.

Another feature I want it to have was a content manager system (CMS), because I didn't want to enter
the media items via forms on my web, I wanted to have an Admin dashboard only accessible for me and not
regular users (yes I have roles on the web). After some research I came with *PayloadCMS* a *Next.js*
CMS that works inside Next.js using the backend features this framework has, like apis and routes. This was
such a good choice because It would mean I only needed to maintain one project instead of having a separate
backend in .NET (which is what I like at the moment).

![Image of RateFreak homepage](https://res.cloudinary.com/dkktgzgff/image/upload/v1782786484/payloadcms_ivn5aq.png)

The only other thing I needed was a database in order to sava the data and then using it on the frontend. So I went
with the elephant old friend (PostgreSQL). And also a storage for the images on the web, I went with *Cloudinary*
because the free tier has more than enough storage for me. Then I finished the app then deployed it to a VPS
using Docker containers and then connected the IP to a Cloudflare CDN in order to secure the domain with some
of their features and that was it.

## Features

It has all the basic features a web app like this should have. Role based, login and session features, user profiles,
user features like backlogs, rated items lists, reviews and ratings on items, a search feature for items on the database,
and more.

On the CMS dashboard part, I added an API search feature to all the collections in order to obtain the data that the item
needs in order to be saved on the database. It auto completes all the entries once you select the item it found on the API,
and it uploads automatically the image to Cloudinary and saves it on Payload on a specific folder sorted by type of media.

It also pairs with a minimalist UI and a good UX to allow anyone that visits the site to understand where to go
and how to interact with the page.

## Conclusion

It was a fun project, I use it a lot and I'm always trying to improve it. I have done some personal project before
but nothing that I have stick with and that I use frequently. I think the choices I made on the design were the
correct ones since there are not a lot of users. It was challenging and really really fun.
