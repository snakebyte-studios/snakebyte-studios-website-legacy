---
title: "What I learned from making my first static blog"
hook: "In this blog we will explore what it is like to build your own static blog using markdown and Next.js!"
date: "April 3rd"
author: "Lev Markelov"
readTime: "6 min"
tag: "money"
---

One of the first things that I had to tackle with this journey was figuring out the architecture behind the process. Initially, I went
with the mindset that I would need a database set up, where I would store all my blog posts. From there I would retrieve them and serve them
to this website. This proved to be way more lucritive of a process than I originally thought it was going to be, so I ended up using markdown files!

This proved to be a whole lot easier of an approach, especially since I know didn't really even need a CMS as long as I knew how to properly write an .md doc (so for now moving forward, I'll be writting it out using markdown files until I feel like adding a CMS lol)

## How to set up markdown files in Next.js

Front matter. Does it ring a bell? Because I didn't know it even existed prior to making this.

> Front matter is all the meta data that exists between the --- lines of an .md files

Here is an example of how you can link images from markdown files and have it appear in your blog!
![Cool imge of a person blowing smoke](/images/team/lev.jpg#styleIt)
