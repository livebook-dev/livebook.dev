---
title: "Introducing File Integration - Launch Week 2 - Day 3"
description: "Introducing Livebook v0.11 with file integration—drag and drop files for instant code generation, lazy read large datasets, and more. Explore now!"
date: 2023-10-11
tags: ["releases", "launch week"]
---

Welcome to the 3rd day of Livebook Launch Week 2! 🎉

Today, we’re excited to announce Livebook v0.11’s most prominent feature, file integration.

Although file integration may not sound exciting at first glance, bear with us; we have some elegant features to show.

Imagine code generation when you drag and drop a file based on the file type. Or quickly do a lazy reading of a multiple gigabyte parquet file stored in S3. That’s what we’re talking about! 😎

Watch the video where José Valim shows a demo of what this feature can do.

<div class="embed">
  <iframe src="https://www.youtube.com/embed/ICsZVUHZ8PQ?rel=0" title="Video" allowfullscreen loading="lazy"></iframe>
</div>

## Why?

Throughout the last releases, we have been improving how Livebook helps to work with data.

Data comes from different sources. One common source is a database, which [Livebook already has good support for](/integrations/?type=database). Another source is a file, either on your machine or on S3, which Livebook hasn’t natively integrated with yet.

Don’t get us wrong, you could already write some Elixir code in your notebook that reads a file from the file system or the web. But the Livebook UI had no understanding of it. And that’s what changed in this release.

## What’s the Livebook file integration?

The concept is simple. When you’re editing a notebook, you can add a file to it. All files are listed in the sidebar, so everyone using your notebook can quickly glance at your file dependencies. Once you do that, Livebook exposes an API for your notebook to read that file via the `Kino.FS` module.

<div class="embed">
  <iframe src="https://www.youtube.com/embed/P1xl6U16HV4?rel=0" title="Video" allowfullscreen loading="lazy"></iframe>
</div>

But that’s not the only thing. Now that Livebook natively understands files, it can offer code suggestions based on the file type.

For example, when you drag and drop a CSV file to Livebook, it can generate code that creates an Explorer Dataframe from that data:

<div class="embed">
  <iframe src="https://www.youtube.com/embed/IyD0S3K5j34?rel=0" title="Video" allowfullscreen loading="lazy"></iframe>
</div>

Or when you drag and drop a SQLite database file, Livebook can generate code that describes that database:

<div class="embed">
  <iframe src="https://www.youtube.com/embed/jQ6OwqLvKrk?rel=0" title="Video" allowfullscreen loading="lazy"></iframe>
</div>

Or when you drag and drop an audio file, Livebook can generate code that uses a Machine Learning model to generate a transcription for you:

<div class="embed">
  <iframe src="https://www.youtube.com/embed/geZ6MCw3Ak4?rel=0" title="Video" allowfullscreen loading="lazy"></iframe>
</div>

One thing you’ll notice in common with all those drag-and-drop examples is that Livebook doesn’t automatically execute the code. Instead, it emits the code and allows you to run it yourself.

This may look like a small detail, but it’s part of our vision for Livebook. We don’t want it to be a magic box that executes some task behind the scenes that you can’t know what it is. We want to enable you to introspect the code, learn from it, and customize it to your needs.

We took that approach with [Smart cells](/blog/v0-6-automate-and-learn-with-smart-cells). And that’s the approach we’re continuing to apply.

## File references and file attachments

When you start adding files to your notebook, you’ll notice that there are two types of files: References and Attachments.

References are files that point to existing resources on your disk, a remote storage, or a URL. It’s like a symbolic link; Livebook doesn’t store the file, it just has a pointer to it.

Attachments are different. They are files stored in the `files/` directory alongside your notebook source. So, a file attachment will be kept wherever you save your notebook.

So, if you’re storing a file in an S3-compatible cloud service, in a web server, or if you want to save it and version it alongside your notebook source, Livebook has you covered.

## Lazy data reading and manipulation

When you have a dataset with multiple gigabytes of data, you don’t want to load all of it at once to the memory. A common approach for that is lazy loading the data. And this new Livebook release supports that workflow as well.

For example, let’s say your dataset is stored as a Parquet file in S3. When you add that file to your notebook, Livebook will give the option to load that data into a dataframe lazily:

<div class="embed">
  <iframe src="https://www.youtube.com/embed/wJ2jplkNRQ4?rel=0" title="Video" allowfullscreen loading="lazy"></iframe>
</div>

Not only that, but you can also lazily manipulate that data:

<div class="embed">
  <iframe src="https://www.youtube.com/embed/txVN10gmxxU?rel=0" title="Video" allowfullscreen loading="lazy"></iframe>
</div>

When needed, Livebook will download all the data, like when plotting a chart based on the data or when exporting it after some data wrangling:

<div class="embed">
  <iframe src="https://www.youtube.com/embed/zvAo_m1stg0?rel=0" title="Video" allowfullscreen loading="lazy"></iframe>
</div>

All that means is now more than ever, you can use Livebook for work with multiple gigabytes of data without needing a machine with dozens of gigabytes of memory.

## What now?

Ready to take the new Livebook for a spin?

[Install the latest version](/#install), drop [one of those files into](https://github.com/hugobarauna/livebook-notebooks/tree/main/launch_week_2) a notebook, and see what happens!

## More of Launch Week 2

*   [Day 1: Remote execution Smart cell](/blog/remote-execution-smart-cell-launch-week-2-day-1)
*   [Day 2: Speech-to-text with Whisper: timestamping, streaming, and parallelism, oh-my!](/blog/speech-to-text-with-whisper-timestamping-streaming-and-parallelism-oh-my-launch-week-2-day-2)
*   [Day 4: Integration with SnowFlake and Microsoft SQL Server](/blog/integration-with-snowflake-and-microsoft-sql-server-launch-week-2-day-4)
*   [Day 5: Vim and Emacs key bindings](/blog/vim-and-emacs-key-bindings-launch-week-2-day-5)
