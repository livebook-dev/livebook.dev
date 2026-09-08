---
title: "Speech-to-text with Whisper: timestamping, streaming, and parallelism, oh-my! - Launch Week 2 - Day 2"
description: "Explore the improved Whisper integration with Livebook v0.11. Features include real-time streaming, audio timestamping, and faster processing."
author: "Livebook Team"
date: 2023-10-10
tags: ["releases", "launch week"]
---

When we [announced Bumblebee](/blog/announcing-bumblebee-gpt2-stable-diffusion-and-more-in-elixir), a collection of pre-trained models inspired by Hugging Face Transformers, the Whisper speech-to-text model quickly became one of the favorite and most used models within the Elixir community.

Thanks to advancements in the overall [Numerical Elixir ecosystem](https://github.com/elixir-nx), Livebook v0.11 includes a highly improved integration with Whisper, which we will detail in this article.

If you want to skip ahead and give it a try, [install Livebook](/#install) and start a new notebook. Then click “+ Smart cell” and choose “Neural Network task.” You will find Whisper as Speech-to-text under Audio.

<div class="embed">
  <iframe src="https://www.youtube.com/embed/w7WMEh2JB0o?rel=0" title="Video" allowfullscreen loading="lazy"></iframe>
</div>

## New features

There are three new features in our Whisper integration:

1.  Timestamping: we now include timestamps on audio segments.
2.  Streaming: our previous version of Whisper was limited to 30 seconds of audio, leaving it up to users to break their audio apart. This new version is capable of streaming both inputs and outputs. You can give arbitrarily long files to the model, which will be streamed as input, and the model will proceed to merge and stream transcriptions as they arrive.
3.  Parallelism: in addition to streaming, files with more than 30 seconds will be split and batched according to the Neural Network batch size. For example, with a batch size of 10, up to 5 minutes of audio can be processed in parallel. Thanks to this, we expect our models to perform inference an order of magnitude faster compared to Open AI’s implementation when transcribing larger files on the GPU.

Of course, all of those features work together, providing a delightful experience as you can see below, where we transcribe on the fly one of [Thinking Elixir episodes](https://podcast.thinkingelixir.com/46):

<div class="embed">
  <iframe src="https://www.youtube.com/embed/HK38-HIK6NA?rel=0" title="Video" allowfullscreen loading="lazy"></iframe>
</div>

When you combine the features above with [Nx’s ability to run neural networks distributed across multiple machines and GPUs](/blog/distributed2-machine-learning-notebooks-with-elixir-and-livebook-launch-week-1-day-2), Elixir developers now have a first-class, state-of-the-art, speech-to-text model ready to run, enjoy, and scale.

## What now?

Try for yourself!

Transcribe an audio file using our built-in Neural Network Task Smart cell. Maybe start with a [small file](https://github.com/hugobarauna/livebook-notebooks/blob/main/launch_week_2/live.m4a) to quickly see the result. Then you can try a [bigger one](https://podcast.thinkingelixir.com/46).

[Download the latest Livebook version](/#install) and have fun!

## More of Launch Week 2

*   [Day 1: Remote execution Smart cell](/blog/remote-execution-smart-cell-launch-week-2-day-1)
*   [Day 3: Introducing File Integration](/blog/introducing-file-integration-launch-week-2-day-3)
*   [Day 4: Integration with SnowFlake and Microsoft SQL Server](/blog/integration-with-snowflake-and-microsoft-sql-server-launch-week-2-day-4)
*   [Day 5: Vim and Emacs key bindings](/blog/vim-and-emacs-key-bindings-launch-week-2-day-5)
