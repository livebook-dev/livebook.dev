---
title: "Data wrangling in Elixir with Explorer, the power of Rust, the elegance of R - Launch Week 1 - Day 5"
description: "This post introduces the new data features in Livebook 0.9: fast data exploration through integration with Explorer, interactive data tables, and data transformation using the new Data Transform Smart cell."
author: "Livebook Team"
date: 2023-04-14
tags: ["releases", "launch week"]
---

Welcome to the fifth and last day of the first Livebook Launch Week!

Today we will talk about data wrangling with Livebook and the new data capabilities with this new release.

Watch the video where José Valim shows a demo of those new features.

<div class="embed">
  <iframe src="https://www.youtube.com/embed/U6nuPjyAUPw?rel=0" title="Video" allowfullscreen loading="lazy"></iframe>
</div>

You can also read an overview of the new features below.

## Explorer: series and dataframes for fast data exploration in Elixir

[Explorer](https://github.com/elixir-nx/explorer) is a project that brings series (one-dimensional data) and data frames (two-dimensional data) right into Elixir.

It is implemented on top of the [Polars](https://www.pola.rs/) project, a highly performant dataframe Rust library. And it’s highly inspired by the [dplyr](https://dplyr.tidyverse.org/) project from R, which is quite expressive. We aim to bring ideas from both communities into Elixir to provide a powerful and elegant tool for data processing.

Let’s play with Explorer a little bit.

The first step of a data exploration project is to import the data. Let’s see how you can import a dataset into an Explorer data frame:

<div class="embed">
  <iframe src="https://www.youtube.com/embed/BV6iZmcygEs?rel=0" title="Video" allowfullscreen loading="lazy"></iframe>
</div>

After importing the data, it’s usually a good idea to explore it a little bit. To do that, we’ll use a new feature from Livebook that helps us visualize an Explorer Dataframe as a table.

## Visualizing an Explorer dataframe as an interactive table

[Kino](https://hexdocs.pm/kino/Kino.html) is the library used by Livebook to render rich and interactive outputs directly from your Elixir code. Livebook has multiple built-in Kinos, but anyone can also build [custom Kinos](https://hexdocs.pm/kino/Kino.html#module-custom-kinos) as a way to extend Livebook.

We built a new Kino called Kino Explorer for this release to improve the integration between Explorer and Livebook. Let’s see how we can use it to display an Explorer data frame as an interactive table:

<div class="embed">
  <iframe src="https://www.youtube.com/embed/zSTFhwhSQNM?rel=0" title="Video" allowfullscreen loading="lazy"></iframe>
</div>

## Data transformation using the new Data Transform Smart cell

In Livebook, a [Smart cell](https://hexdocs.pm/kino/Kino.SmartCell.html) is a UI-based cell that helps you to accomplish a specific task like [creating a database connection](/blog/how-to-query-and-visualize-data-from-google-bigquery-using-livebook), [sending a message to a Slack channel](https://github.com/livebook-dev/kino_slack), or [running a Machine Learning model](/blog/announcing-bumblebee-gpt2-stable-diffusion-and-more-in-elixir).

Livebook has various built-in Smart cells, and anyone can [build a Smart cell](https://hexdocs.pm/kino/Kino.SmartCell.html) to extend Livebook to their needs.

For this release, we built a new built-in Smart cell; the Data Transform one. Let’s see how we can use it for some data transformation.

<div class="embed">
  <iframe src="https://www.youtube.com/embed/79rJh1yxslI?rel=0" title="Video" allowfullscreen loading="lazy"></iframe>
</div>

## What now?

Want to play with all of those new features?

First, ensure you’ve [installed the latest version of Livebook](/#install).

Then, click the button below to run the notebook that José Valim built in the demo video:

[![Run in Livebook](../../images/blog/data-wrangling-in-elixir-with-explorer-the-power-of-rust-the-elegance-of-r-launch-week-1-day-5/1.png)](/run?url=https%3A%2F%2Fgist.githubusercontent.com%2Fhugobarauna%2Fcd509c9ea429c3e6a664b64e34a6c31c%2Fraw%2Fde7ef09070178792a1439a8c1ddcbce3da2c10ff%2Fdata_wrangling_with_explorer.livemd)

If you have any comments or want to share what you’ve built using Livebook, you can [tweet using the #LivebookLaunchWeek](https://twitter.com/intent/tweet?text=I%27m%20loving%20the%20new%20Livebook%200.9!%20%23LivebookLaunchWeek) hashtag.

I hope you got as excited as we did with this new Livebook 0.9 release.

Besides that, we’re already working on much more exciting stuff we’re looking forward to sharing—for example, the upcoming [Livebook Teams](/#livebook-plans).

If you use or want to use Livebook at work with your colleagues, you can [fill in our form to help us](https://docs.google.com/forms/d/e/1FAIpQLScDfvUqT4f_s95dqNGyoXwVMD_Vl059jT6r5MPgXB99XVMCuw/viewform) to inform Livebook Team’s roadmap and get updates about it.

Thank you very much for being with us these last five days. This is all for this first Livebook Launch Week!

Building Livebook and sharing what it’s capable of is a joy for us. We hope you can have fun with it too. 😄

## More Launch Week

*   [Day 1: Deploy notebooks as apps & quality-of-life upgrades](/blog/deploy-notebooks-as-apps-quality-of-life-upgrades-launch-week-1-day-1)
*   [Day 2: Distributed² Machine Learning notebooks with Elixir and Livebook](/blog/distributed2-machine-learning-notebooks-with-elixir-and-livebook-launch-week-1-day-2)
*   [Day 3: Hubs and secret management](/blog/hubs-and-secret-management-launch-week-1-day-3)
*   [Day 4: Build and deploy a Whisper chat app to Hugging Face in 15 minutes](/blog/build-and-deploy-a-whisper-chat-app-to-hugging-face-in-15-minutes-launch-week-1-day-4)
