---
title: "Welcoming Tigris as a new sponsor of Livebook!"
description: "See how Tigris's S3-compatible storage and automatic caching enhance UX/DX, demonstrated via a Livebook demo."
date: 2024-03-26
tags: ["announcements"]
---

We're thrilled to announce [Tigris](https://www.tigrisdata.com/) as the latest Livebook sponsor!

Tigris is a globally distributed S3-compatible object storage service that provides low latency anywhere in the world.

We've prepared a short demo showcasing the Tigris API through Livebook (of course 😉) to highlight its capabilities.

## Quick intro to Tigris

You'll find Tigris intuitive if you're familiar with other object storage services like AWS S3. Here's an example of saving an object to a Tigris bucket:

```elixir
ExAws.S3.put_object("my_tigris_bucket_name", "cat.jpeg", image)
|> ExAws.request!()
```

Notice we're using an AWS S3 client. Thanks to Tigris's S3-API compatibility, transitioning your code requires minimal changes.

Let's say the object is uploaded to a public bucket; to retrieve it, it's just a simple HTTP GET:

```elixir
object_url = "https://fly.storage.tigris.dev/my_tigris_bucket_name/cat.jpeg"
Req.get!(object_url)
```

Simple, right? Now for the real game-changer…

Imagine uploading a file from São Paulo (Brazil). The object is stored automatically in the nearest Tigris region, GRU (São Paulo).

When a user in Mumbai (India) requests the object, it's initially served from GRU. However, Tigris automatically caches the object in the region closest to the request's origin, significantly improving subsequent access times — all without extra configuration!

Here are some real numbers for that example:

| Request | Response | Response time (milliseconds) |
| --- | --- | --- |
| gru (São Paulo)   | gru (São Paulo) | 3.018 |
| bom (Mumbai) | gru (São Paulo)   | 1207.364 |
| bom (Mumbai) | sin (Singapore) | 141.98 |
| bom (Mumbai) | sin (Singapore) | 134.972 |
| bos (Boston) | gru (São Paulo)   | 1393.971 |
| bos (Boston) | iad (Washington, D.C.) | 29.399 |
| bos (Boston) | iad (Washington, D.C.) | 21.344 |

Tigris combines object storage with CDN capabilities. That means great UX for end-users and great DX for developers.

Let's look at a demo notebook that showcases this.

## Demo

In our demo, we use [Livebook's integration with MapLibre](/integrations/maplibre/) to plot the HTTP request and response locations on a map. We also log the response times in a [table](https://hexdocs.pm/kino/Kino.DataTable.html).

Additionally, we leveraged the [Livebook Apps feature](/blog/deploy-notebooks-as-apps-quality-of-life-upgrades-launch-week-1-day-1) to visualize the notebook as an app.

Here's the result:

<div class="embed">
  <iframe src="https://www.youtube.com/embed/h3dmauuXAhc?rel=0" title="Video" allowfullscreen loading="lazy"></iframe>
</div>

## Wrap-up

Tigris brings some cool innovations to the object storage space. For example, here's [how you could use it as a global key-value store from Elixir](https://fly.io/phoenix-files/what-if-s3-could-be-a-fast-globally-synced-key-value-database-that-s-tigris/?utm_source=thinkingelixir&utm_medium=shownotes).

If you want to try using Tigris with Elixir, they have [official Elixir support](https://www.tigrisdata.com/docs/sdks/s3/aws-elixir-sdk/).
