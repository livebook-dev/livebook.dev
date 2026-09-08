---
title: "Livebook inside Hugging Face Spaces"
description: "This blog post announces the integration of Livebook and Hugging Face Spaces."
date: 2023-02-15
tags: ["announcements"]
---

We are thrilled to introduce Livebook on Hugging Face Spaces! 🎉

Each [Hugging Face Space environment](https://huggingface.co/docs/hub/spaces-overview#hardware-resources) offers up to 16GB of RAM and 2 CPU cores for free.

If you’re unfamiliar with Hugging Face (HF), it’s a platform for building, sharing, and collaborating on machine learning applications.

This is our second [integration with Hugging Face](/integrations/hugging-face); [the first](/blog/announcing-bumblebee-gpt2-stable-diffusion-and-more-in-elixir) was through Bumblebee, which brings pre-trained neural network models from Hugging Face to the Elixir community.

We’ve been collaborating with HF to make using Livebook on Spaces a breeze. If you have a Hugging Face account, simply click the one-click deployment button below:

[![](../../images/blog/2023-02-15-livebook-inside-hugging-face-spaces/deploy-to-spaces-button.png)](http://huggingface.co/new-space?template=livebook-dev/livebook)

Alternatively, follow the step-by-step tutorial to [install Livebook in a Hugging Face Space](https://huggingface.co/docs/hub/spaces-sdks-docker-livebook).

## Livebook with GPU acceleration on Hugging Face Spaces

One of the great features of HF Spaces is its ease of upgrading to hardware with GPU accelerators. This is particularly useful for Machine Learning applications, which can be highly parallelized and computationally intensive.

Check out this video to see how easy it is to run Stable Diffusion with Livebook on top of a Hugging Face Space powered by a GPU:

<div class="embed">
  <iframe src="https://www.youtube.com/embed/WJqTQNfJLHY?rel=0" title="Video" allowfullscreen loading="lazy"></iframe>
</div>

Ready to give it a try for yourself? Start experimenting with Livebook on Hugging Face Spaces now.
