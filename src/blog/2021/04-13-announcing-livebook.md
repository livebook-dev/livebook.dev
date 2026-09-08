---
title: "Announcing Livebook"
description: "We are glad to announce Livebook, an open source web application for writing interactive and collaborative code notebooks in Elixir and implemented with Phoenix LiveView. Livebook is an important step in our journey to enable the Erlang VM and its ecosystem to be suitable for numerical and scientific computing."
date: 2021-04-13
tags: ["releases"]
---

We are glad to announce [Livebook](https://github.com/livebook-dev/livebook), an open source web application for writing interactive and collaborative code notebooks in Elixir and implemented with Phoenix LiveView. Livebook is an important step in our journey to enable the Erlang VM and its ecosystem to be suitable for numerical and scientific computing.

José Valim has recorded a screencast that highlights some Livebook features, which you can watch below. It also showcases [the Axon library](https://github.com/elixir-nx/axon/), for building Neural Networks in Elixir, as well as some improvements coming in Elixir v1.12:

<div class="embed">
  <iframe src="https://www.youtube.com/embed/RKvqc-UEe34?rel=0" title="Video" allowfullscreen loading="lazy"></iframe>
</div>

## Features

If you can’t yet watch the video, here is a summary of Livebook features:

*   A deployable web app built with [Phoenix LiveView](https://github.com/phoenixframework/phoenix_live_view) where users can create, fork, and run multiple notebooks.

*   Each notebook is made of multiple sections: each section is made of Markdown and Elixir cells. Code in Elixir cells can be evaluated on demand. Mathematical formulas are also supported via [KaTeX](https://katex.org/).

*   Persistence: notebooks can be persisted to disk through the `.livemd` format, which is a subset of Markdown. This means your notebooks can be saved for later, easily shared, and they also play well with version control.

*   Sequential evaluation: code cells run in a specific order, guaranteeing future users of the same Livebook see the same output. If you re-execute a previous cell, following cells are marked as stale to make it clear they depend on outdated notebook state.

*   Custom runtimes: when executing Elixir code, you can either start a fresh Elixir process, connect to an existing node, or run it inside an existing Elixir project, with access to all of its modules and dependencies. This means Livebook can be a great tool to provide live documentation for existing projects.

*   Explicit dependencies: if your notebook has dependencies, they are explicitly listed and installed with the help of the `Mix.install/2` command in Elixir v1.12+.

*   Collaborative features allow multiple users to work on the same notebook at once. Collaboration works either in single-node or multi-node deployments - without a need for additional tooling.
