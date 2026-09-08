---
title: "Livebook is sponsoring SpawnFest again"
description: "Join Spawnfest, the 48-hour BEAM-based app contest, build a Livebook App and have fun."
author: "Livebook Team"
date: 2023-08-16
tags: ["announcements"]
---

We’re happy to announce that we’re sponsoring [Spawnfest](https://spawnfest.org/?ref=livebook) for the second time!

SpawnFest is an annual 48-hour online software development contest in which teams worldwide get one weekend to create the best BEAM-based applications they can.

We are collaborating with them again to create a bracket of the event dedicated to Livebook projects. Last year, most of the entries involved Kino and Smart Cells, but this year we are changing things up. Our Spawnfest bracket this year will focus on **Livebook Apps**.

Livebook Apps is a [feature we launched earlier this year](/blog/deploy-notebooks-as-apps-quality-of-life-upgrades-launch-week-1-day-1) that enables you to turn your notebook into an interactive web application.

## What you can build with Livebook Apps

Since Livebook is a general-purpose tool, there aren’t many constraints on what you can build with Livebook Apps. So, it’s up to your imagination. But here are some examples to give you some inspiration.

### A multi-user real-time app

Livebook comes with real-time collaboration out of the box. You can use that power in your Livebook apps as well.

Here’s a video showing how to build a chat app.

<div class="embed">
  <iframe src="https://www.youtube.com/embed/q7T6ue7cw1Q?rel=0&start=181" title="Video" allowfullscreen loading="lazy"></iframe>
</div>

### A machine learning app

Livebook [integrates with Hugging Face](/integrations/hugging-face/) to bring you pre-trained models and helps you to use them with just a few clicks.

Here’s a video showing how to build an app that uses the Whisper machine learning model to transcribe audio messages in a chat.

<div class="embed">
  <iframe src="https://www.youtube.com/embed/uyVRPEXOqzw?rel=0&start=57" title="Video" allowfullscreen loading="lazy"></iframe>
</div>

### A data visualization app

Livebook [integrates with Vegalite](/integrations/vega-lite/) and [Maplibre](/integrations/maplibre/) to make it super easy to build lots of different kinds of data visualization.

Here’s an example of an app that plots a chart with the number of stars a Github project got over time.

<div class="embed">
  <iframe src="https://www.youtube.com/embed/opH-3K1Z9sQ?rel=0" title="Video" allowfullscreen loading="lazy"></iframe>
</div>

This app is deployed, so you can [try it live](https://hugobarauna-livebook.hf.space/apps/github-stars/76zaly3wjkfo67p5iqmxaicmum5a5ampdpsmywft). And here is the [source code](https://huggingface.co/spaces/hugobarauna/livebook/blob/main/public-apps/github_stars.livemd).

### A workflow automation app

One month ago, we expanded Livebook Apps with a feature called [Multi-Session Livebook Apps](/blog/whats-new-in-livebook-0-10-introducing-multi-session-livebook-apps). We believe that this new feature is excellent for the automation of technical and business workflows.

You can think of it as a way to transform a script into a UI and share that with others by just sharing an URL.

Here’s a video showing how to build an app that gets data from Github’s API, generates a report, and sends it to a Slack channel.

<div class="embed">
  <iframe src="https://www.youtube.com/embed/dSjryA1iFng?rel=0&start=130" title="Video" allowfullscreen loading="lazy"></iframe>
</div>

## How to deploy a Livebook App

Livebook Apps run inside a Livebook instance. So, you can run them in any Livebook installation, be it in the localhost or the cloud.

One of the easiest ways to install Livebook in the cloud is using Docker. Let’s see two examples of deploying a Livebook App this way.

### How to deploy a Livebook App to [Fly.io](http://fly.io/)

First, make sure you have [Fly’s command-line installed](https://fly.io/docs/hands-on/install-flyctl/) on your machine.

Now, clone the following template repo:

```sh
git clone https://github.com/hugobarauna/livebook-apps-on-fly-template.git my-livebook-apps
```

Add a file with the source code of your Liveobok App to the `public-apps/` directory of your repository.

Then, follow Fly’s instructions to [Deploy via Dockerfile](https://fly.io/docs/languages-and-frameworks/dockerfile/).

After that, Livebook and your Livebook App will be running inside Fly.

Here’s a video showing how that works.

<div class="embed">
  <iframe src="https://www.youtube.com/embed/z-hkN12VFyo?rel=0" title="Video" allowfullscreen loading="lazy"></iframe>
</div>

### How to deploy a Livebook App to Hugging Face

To deploy a Livebook App to Hugging Face, we’ll use Hugging Face Docker Spaces.

First, install Livebook on Hugging Face by [following these instructions](https://huggingface.co/docs/hub/spaces-sdks-docker-livebook#your-first-livebook-space).

Second, add a file with the source code of your Liveobok App to the `public-apps/` directory of your Space and make a commit.

After that, Hugging Face will rebuild your Space, and your Livebook app will be deployed.

Here’s a video showing how that works.

<div class="embed">
  <iframe src="https://www.youtube.com/embed/_wMh7CxUjsc?rel=0" title="Video" allowfullscreen loading="lazy"></iframe>
</div>

## How to participate in Spawnfest

Participation in SpawnFest is 100% free of charge. To register, [go to their website](https://spawnfest.org/) and follow the instructions.

We’re looking forward to seeing what you will build with Livebook Apps!
