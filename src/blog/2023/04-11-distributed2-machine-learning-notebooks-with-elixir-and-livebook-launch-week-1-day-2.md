---
title: "Distributed² Machine Learning notebooks with Elixir and Livebook - Launch Week 1 - Day 2"
description: "Explore Livebook v0.9's enhanced Machine Learning features: new Neural Network tasks with the built-in Smart Cell, Distributed² Machine Learning in Elixir, and more."
date: 2023-04-11
tags: ["releases", "launch week"]
---

Welcome to the second day of Livebook Launch Week! 🎉

Today we will discuss all the new Machine Learning capabilities in Elixir and Livebook. First, we will discuss some of the new Neural Network tasks in Livebook v0.9. Then we will show how easy it is to make an existing model run concurrently and then distributed across multiple machines and multiple GPUs.

Let’s get started!

<div class="embed">
  <iframe src="https://www.youtube.com/embed/MSMyRBJAoSs?rel=0" title="Video" allowfullscreen loading="lazy"></iframe>
</div>

## Distributed² Machine Learning with Elixir

This new Livebook release has many new Machine Learning models you can use with just a few clicks. But there is more exciting news about the Machine Learning story in the Elixir world.

Not only can you do Machine Learning with Elixir, but you can also do Distributed² Machine Learning!

But what does that “Distributed²” means?

It means that when executing a Machine Learning model with Elixir’s [Nx](https://hexdocs.pm/nx/Nx.Serving.html#module-stateful-process-workflow), the distribution can happen on two dimensions:

*   it can be distributed to multiple machines
*   inside each machine, it can be distributed to multiple GPUs

This can lead to increased performance and better utilization of your hardware resources. And it only takes very few changes to your code.

Do you want to see an example? Watch [this part of our video](https://youtu.be/MSMyRBJAoSs?t=232).

We are very excited about these features because we are starting to marry the benefits of Nx with the capabilities for building fault-tolerant and distributed software from the Erlang Virtual Machine. Case in point: [adding distribution support to Nx took only 400 lines of code](https://github.com/elixir-nx/nx/pull/1090), including docs and tests!

## New Machine Learning models available

Neural network tasks were initially [added to Livebook version 0.8](/blog/announcing-bumblebee-gpt2-stable-diffusion-and-more-in-elixir) with the idea of giving you the power to use modern Machine Learning models with just a few clicks.

This 0.9 release comes with more models. Here they are.

### Speech-to-text

<div class="embed">
  <iframe src="https://www.youtube.com/embed/arxY9-r_rAA?rel=0" title="Video" allowfullscreen loading="lazy"></iframe>
</div>

### Conversation

<div class="embed">
  <iframe src="https://www.youtube.com/embed/-YSiEv1_7Sc?rel=0" title="Video" allowfullscreen loading="lazy"></iframe>
</div>

### Question answering

<div class="embed">
  <iframe src="https://www.youtube.com/embed/tGv5pq1JEMk?rel=0" title="Video" allowfullscreen loading="lazy"></iframe>
</div>

### Language detection

<div class="embed">
  <iframe src="https://www.youtube.com/embed/VLvtppCLwMs?rel=0" title="Video" allowfullscreen loading="lazy"></iframe>
</div>

### Zero-shot text classification

<div class="embed">
  <iframe src="https://www.youtube.com/embed/S_zFI-Gb14I?rel=0" title="Video" allowfullscreen loading="lazy"></iframe>
</div>

### Punctuation

<div class="embed">
  <iframe src="https://www.youtube.com/embed/Co6r-_pZolc?rel=0" title="Video" allowfullscreen loading="lazy"></iframe>
</div>

## What now?

We encourage you to go ahead and [install Livebook’s latest version](/#install) to start playing with all of those Machine Learning models!

And if you have any comments or want to share what you’ve built using Livebook, you can [tweet using the #LivebookLaunchWeek](https://twitter.com/intent/tweet?text=I%27m%20loving%20the%20new%20Livebook%200.9!%20%23LivebookLaunchWeek) hashtag.

Stay tuned for the following announcement of the Livebook Launch Week!

## More Launch Week

*   [Day 1: Deploy notebooks as apps & quality-of-life upgrades](/blog/deploy-notebooks-as-apps-quality-of-life-upgrades-launch-week-1-day-1)
*   [Day 3: Hubs and secret management](/blog/hubs-and-secret-management-launch-week-1-day-3)
*   [Day 4: Build and deploy a Whisper chat app to Hugging Face in 15 minutes](/blog/build-and-deploy-a-whisper-chat-app-to-hugging-face-in-15-minutes-launch-week-1-day-4)
*   [Day 5: Data wrangling in Elixir with Explorer, the power of Rust, the elegance of R](/blog/data-wrangling-in-elixir-with-explorer-the-power-of-rust-the-elegance-of-r-launch-week-1-day-5)
