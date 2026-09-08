---
title: "What’s new in Livebook 0.8.1"
description: "In this blog post, we'll take a look at some of the new features released with Livebook 0.8.1. Let's dive in!"
author: "Livebook Team"
date: 2023-01-30
tags: ["releases"]
---

In this blog post, we'll take a look at some of the new features released with Livebook 0.8.1. Let's dive in!

## The new file input

One of the goals of Livebook is to enable you to build interactive notebooks. That means offering [various input elements](https://hexdocs.pm/kino/Kino.Input.html) that allow users to input data into the notebook.

This new version comes with two new inputs, one of them is the [file input](https://hexdocs.pm/kino/Kino.Input.html#file/2). You can use it to allow the user of your notebook to upload a file that the notebook will process.

There are many scenarios where this can be useful, for example, data exploration. Let's see how the new input can be used to explore data in a CSV file.

<div class="embed">
  <iframe src="https://www.youtube.com/embed/s_11aB5Nw1w?rel=0" title="Video" allowfullscreen loading="lazy"></iframe>
</div>

## The new audio input

Another new input available in this release is the [audio input](https://hexdocs.pm/kino/Kino.Input.html#audio/2).

It provides two options for uploading audio data: recording using a microphone or uploading an audio file.

Let's see an example of this new input in action.

<div class="embed">
  <iframe src="https://www.youtube.com/embed/0WI4IefS6AQ?rel=0" title="Video" allowfullscreen loading="lazy"></iframe>
</div>

## Support for capturing images from the camera in the image input

The [image input](https://hexdocs.pm/kino/Kino.Input.html#image/2) was first introduced in Livebook 0.8.0. With this new release, it has been improved to include the ability to take a picture using the computer's camera, in addition to uploading an image file.

Let's see how it works.

<div class="embed">
  <iframe src="https://www.youtube.com/embed/h-mFPE-fywM?rel=0" title="Video" allowfullscreen loading="lazy"></iframe>
</div>

This feature was [contributed](https://github.com/livebook-dev/livebook/pull/1595) by [Cocoa Xu](https://twitter.com/_uwu_cocoa).

## Option to run the Setup cell without cache

A new option has been added to run the setup cell without cache. This can be useful when you want to force the dependencies of your notebook to be installed again from scratch.

While this was previously possible through the `:force` option of `Mix.install/2`:

```elixir
Mix.install(
    [
        {:kino, "~> 0.8.1"}
    ],
    force: true
)
```

With this new release, it's now as simple as clicking a button:

![](/images/blog/2023-01-30-whats-new-in-livebook-0-8-1/setup-cell-without-cache.gif)

## Loading LB\_ environment variables as Livebook secrets

Secrets management is a feature that was [added in Livebook 0.7](/blog/whats-new-in-livebook-0-7). It allows you to securely handle sensitive data, such as passwords and API keys.

Before this release, the UI was the only way to add secrets to Livebook. But now, there's another way.

You can provision Livebook Secrets through environment variables on the machine running your Livebook instance. Just create environment variables starting with `LB_`, such as `LB_API_KEY` or `LB_DATABASE_PASSWORD`, and Livebook will load them as Secrets.

This can be especially useful when running Livebook on platforms like Fly.io and Hugging Face. This means you can set up secrets on their panels, and they will directly appear in Livebook.

Let's see how that works for running Livebook via Docker.

<div class="embed">
  <iframe src="https://www.youtube.com/embed/ZkooWYJ03kQ?rel=0" title="Video" allowfullscreen loading="lazy"></iframe>
</div>

## Docker images with CUDA libraries

Last but not least, we also started to distribute [Livebook via Docker images](https://hub.docker.com/r/livebook/livebook/tags) with CUDA libraries installed.

[CUDA](https://en.wikipedia.org/wiki/CUDA) is a parallel computing platform and API that allows software to take advantage of the power of GPUs. This is particularly useful in technical fields where parallel programming can be applied, such as Machine Learning (ML).

Now running [Stable Diffusion on your GPU directly from Livebook](/blog/announcing-bumblebee-gpt2-stable-diffusion-and-more-in-elixir) is even easier!

## Try it!

To play with the new features, all you need to do is:

*   [Install](/#install) the new Livebook version
*   Import the notebook containing a demo of the new features by clicking on the badge below

[![Run in Livebook](../../images/blog/2023-01-30-whats-new-in-livebook-0-8-1/run-in-livebook-badge.png)](/run?url=https%3A%2F%2Fgithub.com%2Fhugobarauna%2Flivebook-notebooks%2Fblob%2Fmain%2Fwhats_new_in_livebook_v0.8.1.livemd)

Happy hacking!
