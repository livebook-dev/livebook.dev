---
title: "Integration with Snowflake and Microsoft SQL Server - Launch Week 2 - Day 4"
description: "Explore Livebook's new database integrations with Snowflake and Microsoft SQL Server. Learn how to connect and execute queries using the Database Connection and SQL Query Smart cells."
author: "Livebook Team"
date: 2023-10-12
tags: ["releases", "launch week"]
---

Welcome to the 4th day of Livebook Launch Week 2! 🎉

Today’s post is about our two new database integrations: Snowflake and SQL Server.

Together with those new ones, Livebook now comes with [built-in integrations for seven databases and data warehouses](/integrations/?type=database):

*   PostgreSQL
*   MySQL
*   SQL Server
*   SQLite
*   Google BigQuery
*   Amazon Athena
*   Snowflake

Let’s see how the new integrations work.

## Connecting to Snowflake

The Snowflake integration is available through the Database Connection Smart cell. All you need to do is configure the Smart cell with your connection credentials, and you’ll be ready to start executing queries.

Let’s see how that works.

<div class="embed">
  <iframe src="https://www.youtube.com/embed/P00ziSSXnEk?rel=0" title="Video" allowfullscreen loading="lazy"></iframe>
</div>

Under the hood, this is different from the other database integrations we already have. Livebook connects to Snowflake through ADBC (Arrow Database Connectivity), using the [ADBC hex package](https://github.com/elixir-explorer/adbc), which contains ADBC bindings for Elixir.

The Arrow format is highly efficient, and it’s also integrated with Explorer, so now you can easily [query a database and load the result into an Explorer dataframe](https://hexdocs.pm/explorer/Explorer.DataFrame.html#from_query/4).

Good news for those of us doing data analysis with Elixir and Livebook. 🎉

## Connecting to Microsoft SQL Server

Connecting to SQL Server is also super simple. All you need to do is add a new Database Connection Smart cell, select SQL Server, and fill in your database credentials.

Here’s how it works.

<div class="embed">
  <iframe src="https://www.youtube.com/embed/Cl8YhlMgVsk?rel=0" title="Video" allowfullscreen loading="lazy"></iframe>
</div>

This was a community contribution from [Simon McConnell](https://github.com/simonmcconnell). Curious fact: the [pull request](https://github.com/livebook-dev/kino_db/pull/65) contains less than 250 LOC! Cool, right?! 😎

## What now?

To start playing with those new features, [install the latest version of Livebook](/#install) and have fun!

## More of Launch Week 2

*   [Day 1: Remote execution Smart cell](/blog/remote-execution-smart-cell-launch-week-2-day-1)
*   [Day 2: Speech-to-text with Whisper: timestamping, streaming, and parallelism, oh-my!](/blog/speech-to-text-with-whisper-timestamping-streaming-and-parallelism-oh-my-launch-week-2-day-2)
*   [Day 3: Introducing File Integration](/blog/introducing-file-integration-launch-week-2-day-3)
*   [Day 5: Vim and Emacs key bindings](/blog/vim-and-emacs-key-bindings-launch-week-2-day-5)
