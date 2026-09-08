---
title: "Remote execution Smart cell - Launch Week 2 - Day 1"
description: "Introducing Remote Execution Smart cell in Livebook v0.11. Run functions on remote nodes effortlessly."
author: "Livebook Team"
date: 2023-10-09
tags: ["releases", "launch week"]
---

Welcome to the second Livebook Launch Week! 🎉

If this is your first Launch Week with us, let us explain how this works. Starting today, each day of this week, we’ll announce a new feature of this release, Livebook v0.11.

Today, we’ll discuss our newest built-in Smart cell: Remote execution.

## Calling code from other nodes before the new Smart cell

Livebook is a multi-purpose tool. And two of the most common use cases we’ve been seeing are debugging and internal tools.

A common requirement for both use cases is to write code that calls functions from a remote node, probably your main Elixir app in the production environment.

One way to do that is by connecting your notebook to the other node using the “Attached node” runtime:

<div class="embed">
  <iframe src="https://www.youtube.com/embed/vPrFBjgAMyM?rel=0" title="Video" allowfullscreen loading="lazy"></iframe>
</div>

That said, that approach has a limitation. When you use it, all of the code in your notebook will run in the context of that remote node. So, you can’t add Mix dependencies to your notebook, like VegaLite for charts or Kino for user interactions.

The other way we have to run remote functions is by using the default runtime (Elixir standalone) and using the `erpc` Erlang module, like this:

<div class="embed">
  <iframe src="https://www.youtube.com/embed/-5cuGNXTbzs?rel=0" title="Video" allowfullscreen loading="lazy"></iframe>
</div>

But, we noticed people have been using the “Attached node” by default when calling a function from a remote node, even when they need to add dependencies to their notebook. That’s a problem because although the “Attached node” setting is powerful for debugging, we believe that most of the time you need to interact with a remote node, you should use the erpc approach.

So, we decided to make the erpc approach a first-class citizen in Livebook. It’s now available as a new Smart cell that will streamline the process of calling functions from another node.

## Calling code from other nodes using the Remote execution Smart cell

Here’s how the new Smart cell works:

<div class="embed">
  <iframe src="https://www.youtube.com/embed/I6YJs_ZYijc?rel=0" title="Video" allowfullscreen loading="lazy"></iframe>
</div>

As with any other Smart cell, one of the things it helps with is generating boilerplate code for you. There is no need to write the code that connects your notebook to a remote node over and over again.

But it goes beyond that.

The Smart cell can store the remote node’s cookie as a Livebook secret, so you don’t need to hardcode sensitive values inside your notebook. And with the upcoming [Livebook Teams](/teams), it will be easy to share this secret with everyone on the team in a secure manner.

Last, this new Smart cell gives you autocompletion and docs preview of the modules defined in the remote node! Isn’t that awesome?! 🤯

We hope this feature will simplify the development of internal tools that need to communicate with existing nodes.

As an example, here’s a video showing how to use the new feature to connect a Livebook notebook to a Phoenix app, get some data from it, display a chart with those metrics, and share that as an interactive Livebook app:

<div class="embed">
  <iframe src="https://www.youtube.com/embed/Q0aNR2apKv8?rel=0" title="Video" allowfullscreen loading="lazy"></iframe>
</div>

## What now?

All of the new features of this new release are already available today!

To start playing with them, [install the latest version](/#install) of Livebook and have fun!

## More of Launch Week 2

*   [Day 2: Speech-to-text with Whisper: timestamping, streaming, and parallelism, oh-my!](/blog/speech-to-text-with-whisper-timestamping-streaming-and-parallelism-oh-my-launch-week-2-day-2)
*   [Day 3: Introducing File Integration](/blog/introducing-file-integration-launch-week-2-day-3)
*   [Day 4: Integration with SnowFlake and Microsoft SQL Server](/blog/integration-with-snowflake-and-microsoft-sql-server-launch-week-2-day-4)
*   [Day 5: Vim and Emacs key bindings](/blog/vim-and-emacs-key-bindings-launch-week-2-day-5)
