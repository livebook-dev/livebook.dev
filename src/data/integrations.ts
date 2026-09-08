import type { ImageMetadata } from "astro";
import type { AstroComponentFactory } from "astro/runtime/server/index.js";

import elixirLogo from "../images/integrations/elixir/logo.svg";
import erlangLogo from "../images/integrations/erlang/logo.svg";
import sqlLogo from "../images/integrations/sql/logo.png";
import hfLogo from "../images/integrations/hugging-face/logo.png";
import slackLogo from "../images/integrations/slack/logo.png";
import postgresqlLogo from "../images/integrations/postgresql/logo.svg";
import mysqlLogo from "../images/integrations/mysql/logo.svg";
import sqlserverLogo from "../images/integrations/sqlserver/logo.png";
import sqliteLogo from "../images/integrations/sqlite/logo.svg";
import bigqueryLogo from "../images/integrations/bigquery/logo.png";
import snowflakeLogo from "../images/integrations/snowflake/logo.svg";
import vegaLiteLogo from "../images/integrations/vega-lite/logo.svg";
import maplibreLogo from "../images/integrations/maplibre/logo.png";
import mermaidLogo from "../images/integrations/mermaid/logo.jpg";
import cloudflareLogo from "../images/integrations/cloudflare/logo.png";
import googleIapLogo from "../images/integrations/google-iap/logo.webp";
import tailscaleLogo from "../images/integrations/tailscale/logo.svg";

import ElixirPreview from "../components/demos/integrations/ElixirPreview.astro";
import ElixirCodeEditor from "../components/demos/integrations/ElixirCodeEditor.astro";
import ElixirProcesses from "../components/demos/integrations/ElixirProcesses.astro";
import ElixirPipeline from "../components/demos/integrations/ElixirPipeline.astro";
import ElixirMix from "../components/demos/integrations/ElixirMix.astro";
import ElixirHexPackages from "../components/demos/integrations/ElixirHexPackages.astro";
import ElixirAttachedNode from "../components/demos/integrations/ElixirAttachedNode.astro";
import ElixirNerves from "../components/demos/integrations/ElixirNerves.astro";

import ErlangPreview from "../components/demos/integrations/ErlangPreview.astro";

import SqlPreview from "../components/demos/integrations/SqlPreview.astro";

import HuggingFacePreview from "../components/demos/integrations/HuggingFacePreview.astro";
import HfTextToImage from "../components/demos/integrations/HfTextToImage.astro";
import HfImageClassification from "../components/demos/integrations/HfImageClassification.astro";
import HfTextClassification from "../components/demos/integrations/HfTextClassification.astro";
import HfTokenClassification from "../components/demos/integrations/HfTokenClassification.astro";
import HfZeroShotClassification from "../components/demos/integrations/HfZeroShotClassification.astro";
import HfFillMask from "../components/demos/integrations/HfFillMask.astro";
import HfTextGeneration from "../components/demos/integrations/HfTextGeneration.astro";
import HfSpeechToText from "../components/demos/integrations/HfSpeechToText.astro";
import HfGeneratedCode from "../components/demos/integrations/HfGeneratedCode.astro";
import HfSpaces from "../components/demos/integrations/HfSpaces.astro";

import SlackPreview from "../components/demos/integrations/SlackPreview.astro";
import PostgresqlPreview from "../components/demos/integrations/PostgresqlPreview.astro";
import MysqlPreview from "../components/demos/integrations/MysqlPreview.astro";
import SqlserverPreview from "../components/demos/integrations/SqlserverPreview.astro";
import SqlitePreview from "../components/demos/integrations/SqlitePreview.astro";
import BigqueryPreview from "../components/demos/integrations/BigqueryPreview.astro";
import SnowflakePreview from "../components/demos/integrations/SnowflakePreview.astro";

import VegaLitePreview from "../components/demos/integrations/VegaLitePreview.astro";
import VegaLiteChartCell from "../components/demos/integrations/VegaLiteChartCell.astro";
import VegaLitePower from "../components/demos/integrations/VegaLitePower.astro";

import MaplibrePreview from "../components/demos/integrations/MaplibrePreview.astro";
import MaplibreMapCell from "../components/demos/integrations/MaplibreMapCell.astro";
import MaplibrePower from "../components/demos/integrations/MaplibrePower.astro";

import MermaidPreview from "../components/demos/integrations/MermaidPreview.astro";

import CloudflarePreview from "../components/demos/integrations/CloudflarePreview.astro";
import CloudflareAuth from "../components/demos/integrations/CloudflareAuth.astro";

import GoogleIapPreview from "../components/demos/integrations/GoogleIapPreview.astro";
import GoogleIapAuth from "../components/demos/integrations/GoogleIapAuth.astro";

import TailscalePreview from "../components/demos/integrations/TailscalePreview.astro";
import TailscaleAuth from "../components/demos/integrations/TailscaleAuth.astro";

export type IntegrationCategory =
  | "Authentication"
  | "Data Warehouse"
  | "Database"
  | "Language"
  | "Machine Learning"
  | "Messaging"
  | "Visualization";

export interface IntegrationFeature {
  headline: string;
  /** May include HTML markup, rendered with set:html */
  description: string;
  /** Component from components/demos rendering the feature */
  demo: AstroComponentFactory;
}

export interface IntegrationCta {
  link: string;
  main: string;
  description: string;
}

export interface Integration {
  id: string;
  name: string;
  logo: ImageMetadata;
  category: IntegrationCategory;
  headline: string;
  /** May include HTML markup, rendered with set:html */
  description: string;
  /** Component from components/demos rendering the integration */
  demo: AstroComponentFactory;
  cta?: IntegrationCta;
  features?: IntegrationFeature[];
}

const integrations: Integration[] = [
  {
    id: "elixir",
    name: "Elixir",
    logo: elixirLogo,
    category: "Language",
    headline: "Use Elixir directly in Livebook",
    description:
      "Livebook has an interactive environment to code in Elixir. You can use it to learn Elixir, explore Elixir packages, prototypes, scripts, and interactive data apps.",
    demo: ElixirPreview,
    cta: {
      link: "https://github.com/livebook-dev/livebook/blob/main/docs/use_cases.md",
      main: "Learn more",
      description: "Elixir & Livebook",
    },
    features: [
      {
        headline: "Elixir Code Editor",
        description:
          "Livebook's Elixir code editor supports autocompletion, inline documentation, code formatting, and more.",
        demo: ElixirCodeEditor,
      },
      {
        headline: "Visual Representation of the running system",
        description:
          "Livebook can render visual representations of supervision trees and message-passing between Elixir processes. <a href='https://hexdocs.pm/kino/Kino.Process.html#seq_trace/2' class='underline'>Learn how to do this.</a>",
        demo: ElixirProcesses,
      },
      {
        headline:
          "Interactive UI to visualize, debug and edit Elixir pipelines",
        description:
          "Livebook has an interactive widget that lets you see the result of an Elixir pipeline, enable/disable pipeline steps, and re-order them through drag and drop. <a href='https://github.com/livebook-dev/livebook/blob/main/lib/livebook/notebook/learn/kino/intro_to_kino.livemd#dbg' class='underline'>Learn how to do this.</a>",
        demo: ElixirPipeline,
      },
      {
        headline: "Run a notebook within the context of a Mix project",
        description:
          "It's super easy to <a href='https://github.com/livebook-dev/livebook/blob/main/docs/use_cases.md#documentation-with-mixinstall' class='underline'>run code of a Mix project inside Livebook</a>. This can be useful for interactive development or for experimenting with your project's code.",
        demo: ElixirMix,
      },
      {
        headline: "Add Hex packages as dependencies of your notebook",
        description:
          "Livebook makes it easy to use Hex packages inside your notebooks. The integrated package management also makes your notebooks easier to be used and reproduced by others.",
        demo: ElixirHexPackages,
      },
      {
        headline: "Connect to a running Elixir system directly in Livebook",
        description:
          "You can easily <a href='https://fly.io/docs/elixir/advanced-guides/connect-livebook-to-your-app/' class='underline'>connect to a running Elixir node</a>. Useful for production environment diagnostics, remote debugging, and automation.",
        demo: ElixirAttachedNode,
      },
      {
        headline: "Develop on embedded devices with Livebook and Nerves",
        description:
          "<a href='https://github.com/livebook-dev/nerves_livebook' class='underline'>Nerves Livebook</a> enables you to try out  <a href='https://nerves-project.org/' class='underline'>Nerves</a> on real hardware without needing to build anything. You'll be able to run code in Livebook and work through Nerves tutorials from the comfort of your browser.",
        demo: ElixirNerves,
      },
    ],
  },
  {
    id: "erlang",
    name: "Erlang",
    logo: erlangLogo,
    category: "Language",
    headline: "Use Erlang directly in Livebook",
    description:
      "Livebook has an interactive enviroment to code in Erlang. And you can write Elixir and Erlang in the same notebook, interoperating. If you define a function or a variable inside one language, you can easily use it in the other.",
    demo: ErlangPreview,
  },
  {
    id: "sql",
    name: "SQL",
    logo: sqlLogo,
    category: "Language",
    headline: "Write and execute SQL queries directly in Livebook",
    description:
      "Use Livebook's SQL Query Smart cell to quickly get data from <a href='/integrations.html?type=database' class='underline'>multiple sources</a>. You can also dynamically inject values into your queries with input from your code or a text field filled in by your notebook user.",
    demo: SqlPreview,
  },
  {
    id: "hugging-face",
    name: "Hugging Face",
    logo: hfLogo,
    category: "Machine Learning",
    headline: "Run Machine Learning models from Hugging Face in three clicks",
    description:
      "Use Livebook's Neural Network Smart cell to download and run Machine Learning models from Hugging Face without a single line of code. Customize the generated code to your needs.",
    demo: HuggingFacePreview,
    cta: {
      link: "https://www.youtube.com/watch?v=uyVRPEXOqzw",
      main: "How to",
      description: "Build an ML app",
    },
    features: [
      {
        headline: "Text to image",
        description: "Generate images using the Stable Diffusion model.",
        demo: HfTextToImage,
      },
      {
        headline: "Image classification",
        description:
          "Classify images using models like ResNet, ConvNeXT, ViT, and DeiT.",
        demo: HfImageClassification,
      },
      {
        headline: "Text classification",
        description:
          "Classify text using models like RoBERTa, DistilRoBERTa, and FinBERT.",
        demo: HfTextClassification,
      },
      {
        headline: "Token classification",
        description:
          "Understand the structure of a text via named-entity recognition.",
        demo: HfTokenClassification,
      },
      {
        headline: "Zero-shot text classification",
        description:
          "Classify text using your own labels with models like BART and XLM-RoBERTa multilingual.",
        demo: HfZeroShotClassification,
      },
      {
        headline: "Fill-mask",
        description: "Predict which words should replaces masks inside text.",
        demo: HfFillMask,
      },
      {
        headline: "Text generation",
        description:
          "Generate text using models like GPT2, DistilGPT2, and BART.",
        demo: HfTextGeneration,
      },
      {
        headline: "Speech-to-text",
        description: "Generate text from audio using the Whisper model.",
        demo: HfSpeechToText,
      },
      {
        headline: "Use the generated code inside your app",
        description:
          "You can see the code generated by the Smart cell to understand how a model works and <a href='https://youtu.be/g3oyh3g1AtQ?t=403' class='underline'>embed it directly into your Elixir app</a>.",
        demo: HfGeneratedCode,
      },
      {
        headline: "Run Livebook inside Hugging Face Spaces",
        description:
          "You can <a href='https://news.livebook.dev/livebook-inside-hugging-face-spaces-3LQaRi' class='underline'>run Livebook in Hugging Face Spaces</a> and leverage their GPU offerings to train and run Machine Learning models faster and more efficiently.",
        demo: HfSpaces,
      },
    ],
  },
  {
    id: "slack",
    name: "Slack",
    logo: slackLogo,
    category: "Messaging",
    headline: "Send messages to Slack directly from Livebook",
    description:
      "Send messages to your Slack using Livebook's Slack Message Smart cell.",
    demo: SlackPreview,
  },
  {
    id: "postgresql",
    name: "PostgreSQL",
    logo: postgresqlLogo,
    category: "Database",
    headline: "Connect to PostgreSQL directly from Livebook",
    description:
      "Connect to your PostgreSQL database using Livebook's Database Connection Smart cell. Use Livebook Secrets to store your database password securely. Write and run queries directly from Livebook.",
    demo: PostgresqlPreview,
  },
  {
    id: "mysql",
    name: "MySQL",
    logo: mysqlLogo,
    category: "Database",
    headline: "Connect to MySQL directly from Livebook",
    description:
      "Connect to your MySQL database using Livebook's Database Connection Smart cell. Use Livebook Secrets to store your database password securely. Write and run queries directly from Livebook.",
    demo: MysqlPreview,
  },
  {
    id: "sqlserver",
    name: "Microsoft SQL Server",
    logo: sqlserverLogo,
    category: "Database",
    headline: "Connect to Microsoft SQL Server directly from Livebook",
    description:
      "Connect to your Microsoft SQL Server database using Livebook's Database Connection Smart cell. Use Livebook Secrets to store your database password securely. Write and run queries directly from Livebook.",
    demo: SqlserverPreview,
    cta: {
      link: "https://www.youtube.com/watch?v=Cl8YhlMgVsk",
      main: "Watch the tutorial",
      description: "SQL Server & Livebook",
    },
  },
  {
    id: "sqlite",
    name: "SQLite",
    logo: sqliteLogo,
    category: "Database",
    headline: "Connect to SQLite directly from Livebook",
    description:
      "Connect to your SQLite database using Livebook's Database Connection Smart cell. Write and run queries directly from Livebook.",
    demo: SqlitePreview,
  },
  {
    id: "google-bigquery",
    name: "Google BigQuery",
    logo: bigqueryLogo,
    category: "Data Warehouse",
    headline: "Connect to Google BigQuery directly from Livebook",
    description:
      "Connect to your Google BigQuery data warehouse using Livebook's Database Connection Smart cell. Write and run queries directly from Livebook.",
    demo: BigqueryPreview,
    cta: {
      link: "https://news.livebook.dev/how-to-query-and-visualize-data-from-google-bigquery-using-livebook-3o2leU",
      main: "Read the tutorial",
      description: "Big Query & Livebook",
    },
  },
  {
    id: "snowflake",
    name: "Snowflake",
    logo: snowflakeLogo,
    category: "Data Warehouse",
    headline: "Connect to Snowflake directly from Livebook",
    description:
      "Connect to your Snowflake using Livebook's Database Connection Smart cell. Data exchange happens via the high-performance Apache Arrow format. Write and run queries directly from Livebook.",
    demo: SnowflakePreview,
    cta: {
      link: "https://www.youtube.com/watch?v=P00ziSSXnEk",
      main: "Watch the tutorial",
      description: "Snowflake & Livebook",
    },
  },
  {
    id: "vega-lite",
    name: "VegaLite",
    logo: vegaLiteLogo,
    category: "Visualization",
    headline: "Plot charts using Vega-Lite",
    description:
      "Build and visualize charts using Livebook's native integration with <a href='https://vega.github.io/vega-lite/' class='underline pointer'>Vega-Lite.</a>",
    demo: VegaLitePreview,
    cta: {
      link: "https://github.com/livebook-dev/livebook/blob/main/lib/livebook/notebook/learn/intro_to_vega_lite.livemd",
      main: "Learn more",
      description: "Vega-Lite & Livebook",
    },
    features: [
      {
        headline: "Chart Smart cell",
        description:
          "The Chart Smart cell provides a user-friendly interface for building charts. It includes various chart types like point, bar, line, and boxplot. It also makes it easier to bin, aggregate and color-code your data.",
        demo: VegaLiteChartCell,
      },
      {
        headline: "All the power from Vega-Lite",
        description:
          "When the Smart cell is not enough, Livebook offers a tiny API layer that gives you full access to all of Vega-Lite's features and makes it easier to build all sorts of Vega-Lite charts.",
        demo: VegaLitePower,
      },
    ],
  },
  {
    id: "maplibre",
    name: "MapLibre",
    logo: maplibreLogo,
    category: "Visualization",
    headline: "Plot Maps using MapLibre",
    description:
      "Build and visualize charts using Livebook's native integration with <a href='https://maplibre.org/' class='underline'>MapLibre.</a>",
    demo: MaplibrePreview,
    cta: {
      link: "https://github.com/livebook-dev/livebook/blob/main/lib/livebook/notebook/learn/intro_to_maplibre.livemd",
      main: "Learn more",
      description: "MapLibre & Livebook",
    },
    features: [
      {
        headline: "Map Smart cell",
        description:
          "The Map Smart Cell provides a user-friendly interface for building map visualizations. You can create maps using either latitude and longitude or geocoding. In addition, the ability to have multiple layers in a single map allows for even more advanced visualizations.",
        demo: MaplibreMapCell,
      },
      {
        headline: "All the power from MapLibre",
        description:
          "When the Smart cell is not enough, Livebook offers a tiny API layer that gives you full access to all of MapLibre's features and makes it easier to build all sorts of MapLibre maps.",
        demo: MaplibrePower,
      },
    ],
  },
  {
    id: "mermaid",
    name: "Mermaid",
    logo: mermaidLogo,
    category: "Visualization",
    headline: "Build diagrams using Mermaid",
    description:
      "Build and visualize diagrams using Livebook's native integration with <a href='https://mermaid.js.org/' class='underline'>Mermaid</a>.",
    demo: MermaidPreview,
  },
  {
    id: "cloudflare",
    name: "Cloudflare Zero Trust",
    logo: cloudflareLogo,
    category: "Authentication",
    headline: "Authenticate with Cloudflare Zero Trust",
    description:
      "Use Cloudflare Zero Trust to ensure that only authorized users can access your Livebook instance and deployed apps.",
    demo: CloudflarePreview,
    cta: {
      link: "https://hexdocs.pm/livebook/cloudflare.html",
      main: "How to",
      description: "Cloudflare & Livebook",
    },
    features: [
      {
        headline: "Livebook + Cloudflare Zero Trust",
        description:
          "Run Livebook behind Cloudflare Zero Trust to protect notebooks and deployed apps with your organization's access policies.",
        demo: CloudflareAuth,
      },
    ],
  },
  {
    id: "google-iap",
    name: "Google IAP",
    logo: googleIapLogo,
    category: "Authentication",
    headline: "Authenticate with Google Identity-Aware Proxy",
    description:
      "Use Google Identity-Aware Proxy (IAP) to ensure that only authorized users can access your Livebook instance and deployed apps.",
    demo: GoogleIapPreview,
    cta: {
      link: "https://hexdocs.pm/livebook/google_iap.html",
      main: "How to",
      description: "Google IAP & Livebook",
    },
    features: [
      {
        headline: "Livebook + Google IAP",
        description:
          "Run Livebook behind Google IAP to protect notebooks and deployed apps with identity-aware access controls.",
        demo: GoogleIapAuth,
      },
    ],
  },
  {
    id: "tailscale",
    name: "Tailscale",
    logo: tailscaleLogo,
    category: "Authentication",
    headline: "Authenticate with Tailscale",
    description:
      "Use Tailscale to ensure that only authorized users can access your Livebook instance and deployed apps.",
    demo: TailscalePreview,
    cta: {
      link: "https://hexdocs.pm/livebook/tailscale.html",
      main: "How to",
      description: "Tailscale & Livebook",
    },
    features: [
      {
        headline: "Livebook + Tailscale",
        description:
          "Run Livebook on your Tailnet to keep notebooks and deployed apps private to trusted users and devices.",
        demo: TailscaleAuth,
      },
    ],
  },
];

export default integrations;
