---
title: "What's new in Livebook 0.10 - Introducing Multi-Session Livebook Apps"
description: "This major update brings many exciting features, with the spotlight being the introduction of multi-session Livebook apps. We’ve also added a presentation view, initial Erlang support, Live Doctests, and dataframe file export."
date: 2023-07-14
tags: ["releases"]
---

Today we’re launching Livebook 0.10! 🎉

This major update brings many exciting features, with the spotlight being the introduction of multi-session Livebook apps.

We’ve also added a presentation view, initial Erlang support, Live Doctests, and dataframe file export. Let’s dive in and explore these new features.

## Multi-Session Livebook Apps

[Livebook 0.9 introduced Livebook apps](/blog/deploy-notebooks-as-apps-quality-of-life-upgrades-launch-week-1-day-1). This is a way to turn your notebook into an interactive web application. Now, we’re expanding that further.

Initially, Livebook Apps was designed for long-running applications. Behind the scenes, only one instance of a Livebook app could run at any given moment. Since Livebook has built-in support for multiple users, all users accessing an app would be sharing the same instance of the app. We’re now calling that single-session Livebook apps.

This new version introduces multi-session Livebook Apps. What’s different is that when you join a multi-session application, you get a version of that app exclusively for you. Like single-session apps, multi-session apps can run for as long as they want, but most often, they will receive user input, execute several instructions, and then exit.

We believe they are an excellent fit for automating technical and business workflows. You can think of them as something similar to scripts, but instead of running in a terminal, they are interactive web applications accessed through the browser.

For example, instead of repeatedly being asked to run one-off scripts, you can package that script as a Livebook app and makes it accessible to other team members to run it, at any time, by themselves.

Let’s see how that works.

<div class="embed">
  <iframe src="https://www.youtube.com/embed/dSjryA1iFng?rel=0" title="Video" allowfullscreen loading="lazy"></iframe>
</div>

## Presentation View

We noticed many people [use Livebook for presentations](https://www.youtube.com/watch?v=b9BQM40UzEs&t=564s). However, it can be frustrating to switch between Livebook and your slides. Also, showing the whole notebook can distract your audience. But there’s good news!

[Franklin Rakotomalala](https://github.com/aifrak) contributed a Presentation view feature that hides the sidebar and focuses on the part of your notebook you want to present. Here’s how it works.

<div class="embed">
  <iframe src="https://www.youtube.com/embed/Tlo4mYK8UuM?rel=0" title="Video" allowfullscreen loading="lazy"></iframe>
</div>

Shout out to Franklin!

## Initial Erlang Support

You can now write Erlang code inside Livebook. Not only that, but you can combine it with Elixir in the same notebook. If you define a function or a variable inside one language, you can easily use it in the other.

Watch the video below for an example.

<div class="embed">
  <iframe src="https://www.youtube.com/embed/Jsv3-2XPc-k?rel=0" title="Video" allowfullscreen loading="lazy"></iframe>
</div>

This was a community contribution by [Benedikt Reinartz](https://github.com/filmor). Thanks to him, Livebook now supports multiple BEAM languages.

## Live Doctests

Starting from version 0.8, [doctests are integrated with Livebook](/blog/whats-new-in-livebook-0-8). This new version comes with exciting improvements in that area.

When you evaluate a cell with doctests, a traffic light-like status appears on the left of each doctest. This gives you a visual indication if it passed or not. Additionally, when the doctest fails, the failing result is directly inlined in the code editor.

Here’s how it works:

<div class="embed">
  <iframe src="https://www.youtube.com/embed/G4VHl-polXg?rel=0" title="Video" allowfullscreen loading="lazy"></iframe>
</div>

This is a step towards bringing [Live Programming concepts](https://github.com/livebook-dev/livebook/issues/1351) into Livebook, [the idea](https://www.microsoft.com/en-us/research/publication/usable-live-programming/) that for “programming to be more fluid, editing and debugging should occur concurrently as you write code.”

This one started with the code contribution of [Jose Vargas](https://github.com/Sleepful) and the [research work of Szymon Kaliski](https://szymonkaliski.com/projects/live-coding-livebook/).

## Dataframe File Export

When working on a [data analysis task using Livebook](/blog/data-wrangling-in-elixir-with-explorer-the-power-of-rust-the-elegance-of-r-launch-week-1-day-5), you might need to access the analysis result from another tool or share them with someone who prefers opening it in a spreadsheet.

Now, you can easily do that by exporting your dataframe to a CSV, NDJSON, or Parquet file. Here’s how it works:

<div class="embed">
  <iframe src="https://www.youtube.com/embed/_VYiYlmOOlk?rel=0" title="Video" allowfullscreen loading="lazy"></iframe>
</div>

## Try it!

To play with the new features, follow these steps:

*   [Install](/#install) the latest Livebook version
*   Import the demo notebook that showcases the new features by clicking the badge below

[![Run in Livebook](../../images/blog/2023-07-14-whats-new-in-livebook-0-10-introducing-multi-session-livebook-apps/run-in-livebook-badge.png)](/run?url=https%3A%2F%2Fgithub.com%2Fhugobarauna%2Flivebook-notebooks%2Fblob%2Fmain%2Fwhats_new_in_livebook_v0.10.livemd)

And if you want to discover everything that changed in 0.10, here’s [the changelog](https://github.com/livebook-dev/livebook/blob/v0.10/CHANGELOG.md).

Happy hacking!
