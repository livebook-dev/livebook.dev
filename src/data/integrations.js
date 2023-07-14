import elixirLogo from "../images/integrations/elixir/logo.svg";
import elixirPreview from "../images/integrations/elixir/preview.png";
import elixirCodeEditor from "../images/integrations/elixir/features/code-editor.png";
import elixirVisualRepresentationRunningSystem from "../images/integrations/elixir/features/visual-representation-running-system.png";
import elixirInteractiveUI from "../images/integrations/elixir/features/interactive-ui.png";
import elixirMix from "../images/integrations/elixir/features/mix.png";
import elixirHexPackages from "../images/integrations/elixir/features/hex-packages.png";
import elixirConnectRunningSystem from "../images/integrations/elixir/features/connect-running-system.png";
import elixirNerves from "../images/integrations/elixir/features/nerves.png";

import erlangLogo from "../images/integrations/erlang/logo.svg";
import erlangPreview from "../images/integrations/erlang/preview.png";

import sqlLogo from "../images/integrations/sql/logo.png";
import sqlPreview from "../images/integrations/sql/preview.png";

import hfLogo from "../images/integrations/hugging-face/logo.png";
import hfPreview from "../images/integrations/hugging-face/preview.png";
import hfTextToImage from "../images/integrations/hugging-face/features/text-to-image.png";
import hfImageClassification from "../images/integrations/hugging-face/features/image-classification.png";
import hfTextClassification from "../images/integrations/hugging-face/features/text-classification.png";
import hfTokenClassification from "../images/integrations/hugging-face/features/token-classification.png";
import hfZeroShotTextClassification from "../images/integrations/hugging-face/features/zero-shot-text-classification.png";
import hfFillMask from "../images/integrations/hugging-face/features/fill-mask.png";
import hfTextGeneration from "../images/integrations/hugging-face/features/text-generation.png";
import hfSpeechToText from "../images/integrations/hugging-face/features/speech-to-text.png";
import hfGeneratedCode from "../images/integrations/hugging-face/features/generated-code.png";
import hfSpaces from "../images/integrations/hugging-face/features/spaces.png";

import slackLogo from "../images/integrations/slack/logo.png";
import slackPreview from "../images/integrations/slack/preview.png";

import postgresqlLogo from "../images/integrations/postgresql/logo.svg";
import postgresqlPreview from "../images/integrations/postgresql/preview.png";

import mysqlLogo from "../images/integrations/mysql/logo.svg";
import mysqlPreview from "../images/integrations/mysql/preview.png";

import sqliteLogo from "../images/integrations/sqlite/logo.svg";
import sqlitePreview from "../images/integrations/sqlite/preview.png";

import bigqueryLogo from "../images/integrations/bigquery/logo.png";
import bigqueryPreview from "../images/integrations/bigquery/preview.png";

import athenaLogo from "../images/integrations/athena/logo.png";
import athenaPreview from "../images/integrations/athena/preview.png";

import vegaLiteLogo from "../images/integrations/vega-lite/logo.svg";
import vegaLitePreview from "../images/integrations/vega-lite/preview.png";
import vegaLiteChartSmartCell from "../images/integrations/vega-lite/features/chart-smart-cell.png";
import vegaLitePower from "../images/integrations/vega-lite/features/power.png";

import maplibreLogo from "../images/integrations/maplibre/logo.png";
import maplibrePreview from "../images/integrations/maplibre/preview.png";
import maplibreMapSmartCell from "../images/integrations/maplibre/features/map-smart-cell.png";
import maplibreAllPower from "../images/integrations/maplibre/features/all-power.png";

import mermaidLogo from "../images/integrations/mermaid/logo.jpg";
import mermaidPreview from "../images/integrations/mermaid/preview.png";

const integrations = [
  {
    id: "elixir",
    name: "Elixir",
    logo: elixirLogo,
    category: "Language",
    headline: "Use Elixir directly in Livebook",
    description:
      "Livebook has an interactive environment to code in Elixir. You can use it to learn Elixir, explore Elixir packages, prototypes, scripts, and interactive data apps.",
    image: elixirPreview,
    cta: {
      link: "https://github.com/livebook-dev/livebook/blob/main/lib/livebook/notebook/learn/intro_to_livebook.livemd#elixir-integration",
      main: "Learn more",
      description: "Elixir & Livebook",
    },
    features: [
      {
        headline: "Elixir Code Editor",
        description:
          "Livebook's Elixir code editor supports autocompletion, inline documentation, code formatting, and more.",
        image: elixirCodeEditor,
      },
      {
        headline: "Visual Representation of the running system",
        description:
          "Livebook can render visual representations of supervision trees and message-passing between Elixir processes. <a href='https://hexdocs.pm/kino/Kino.Process.html#seq_trace/2' class='underline'>Learn how to do this.</a>",
        image: elixirVisualRepresentationRunningSystem,
      },
      {
        headline:
          "Interactive UI to visualize, debug and edit Elixir pipelines",
        description:
          "Livebook has an interactive widget that lets you see the result of an Elixir pipeline, enable/disable pipeline steps, and re-order them through drag and drop. <a href='https://github.com/livebook-dev/livebook/blob/main/lib/livebook/notebook/learn/kino/intro_to_kino.livemd#dbg' class='underline'>Learn how to do this.</a>",
        image: elixirInteractiveUI,
      },
      {
        headline: "Run a notebook within the context of a Mix project",
        description:
          "It's super easy to <a href='https://github.com/livebook-dev/livebook/blob/main/lib/livebook/notebook/learn/intro_to_livebook.livemd#mix-projects' class='underline'>run code of a Mix project inside Livebook</a>. This can be useful for interactive development or for experimenting with your project's code.",
        image: elixirMix,
      },
      {
        headline: "Add Hex packages as dependencies of your notebook",
        description:
          "Livebook makes it easy to use Hex packages inside your notebooks. The integrated package management also makes your notebooks easier to be used and reproduced by others.",
        image: elixirHexPackages,
      },
      {
        headline: "Connect to a running Elixir system directly in Livebook",
        description:
          "You can easily <a href='https://fly.io/docs/elixir/advanced-guides/connect-livebook-to-your-app/' class='underline'>connect to a running Elixir node</a>. Useful for production environment diagnostics, remote debugging, and automation.",
        image: elixirConnectRunningSystem,
      },
      {
        headline: "Develop on embedded devices with Livebook and Nerves",
        description:
          "<a href='https://github.com/livebook-dev/nerves_livebook' class='underline'>Nerves Livebook</a> enables you to try out  <a href='https://nerves-project.org/' class='underline'>Nerves</a> on real hardware without needing to build anything. You'll be able to run code in Livebook and work through Nerves tutorials from the comfort of your browser.",
        image: elixirNerves,
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
    image: erlangPreview,
  },
  {
    id: "sql",
    name: "SQL",
    logo: sqlLogo,
    category: "Language",
    headline: "Write and execute SQL queries directly in Livebook",
    description:
      "Use Livebook's SQL Query Smart cell to quickly get data from <a href='/integrations.html?type=database' class='underline'>multiple sources</a>. You can also dynamically inject values into your queries with input from your code or a text field filled in by your notebook user.",
    image: sqlPreview,
  },
  {
    id: "hugging-face",
    name: "Hugging Face",
    logo: hfLogo,
    category: "Machine Learning",
    headline: "Run Machine Learning models from Hugging Face in three clicks",
    description:
      "Use Livebook's Neural Network Smart cell to download and run Machine Learning models from Hugging Face without a single line of code. Customize the generated code to your needs.",
    image: hfPreview,
    cta: {
      link: "https://news.livebook.dev/announcing-bumblebee-gpt2-stable-diffusion-and-more-in-elixir-3Op73O",
      main: "Learn more",
      description: "ML with Elixir & Livebook",
    },
    features: [
      {
        headline: "Text to image",
        description: "Generate images using the Stable Diffusion model.",
        image: hfTextToImage,
      },
      {
        headline: "Image classification",
        description:
          "Classify images using models like ResNet, ConvNeXT, ViT, and DeiT.",
        image: hfImageClassification,
      },
      {
        headline: "Text classification",
        description:
          "Classify text using models like RoBERTa, DistilRoBERTa, and FinBERT.",
        image: hfTextClassification,
      },
      {
        headline: "Token classification",
        description:
          "Understand the structure of a text via named-entity recognition.",
        image: hfTokenClassification,
      },
      {
        headline: "Zero-shot text classification",
        description:
          "Classify text using your own labels with models like BART and XLM-RoBERTa multilingual.",
        image: hfZeroShotTextClassification,
      },
      {
        headline: "Fill-mask",
        description: "Predict which words should replaces masks inside text.",
        image: hfFillMask,
      },
      {
        headline: "Text generation",
        description:
          "Generate text using models like GPT2, DistilGPT2, and BART.",
        image: hfTextGeneration,
      },
      {
        headline: "Speech-to-text",
        description: "Generate text from audio using the Whisper model.",
        image: hfSpeechToText,
      },
      {
        headline: "Use the generated code inside your app",
        description:
          "You can see the code generated by the Smart cell to understand how a model works and <a href='https://youtu.be/g3oyh3g1AtQ?t=403' class='underline'>embed it directly into your Elixir app</a>.",
        image: hfGeneratedCode,
      },
      {
        headline: "Run Livebook inside Hugging Face Spaces",
        description:
          "You can <a href='https://news.livebook.dev/livebook-inside-hugging-face-spaces-3LQaRi' class='underline'>run Livebook in Hugging Face Spaces</a> and leverage their GPU offerings to train and run Machine Learning models faster and more efficiently.",
        image: hfSpaces,
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
    image: slackPreview,
  },
  {
    id: "postgresql",
    name: "PostgreSQL",
    logo: postgresqlLogo,
    category: "Database",
    headline: "Connect to PostgreSQL directly from Livebook",
    description:
      "Connect to your PostgreSQL database using Livebook's Database Connection Smart cell. Use Livebook Secrets to store your database password securely. Write and run queries directly from Livebook.",
    image: postgresqlPreview,
  },
  {
    id: "mysql",
    name: "MySQL",
    logo: mysqlLogo,
    category: "Database",
    headline: "Connect to MySQL directly from Livebook",
    description:
      "Connect to your MySQL database using Livebook's Database Connection Smart cell. Use Livebook Secrets to store your database password securely. Write and run queries directly from Livebook.",
    image: mysqlPreview,
  },
  {
    id: "sqlite",
    name: "SQLite",
    logo: sqliteLogo,
    category: "Database",
    headline: "Connect to SQLite directly from Livebook",
    description:
      "Connect to your SQLite database using Livebook's Database Connection Smart cell. Write and run queries directly from Livebook.",
    image: sqlitePreview,
  },
  {
    id: "google-bigquery",
    name: "Google BigQuery",
    logo: bigqueryLogo,
    category: "Data Warehouse",
    headline: "Connect to Google BigQuery directly from Livebook",
    description:
      "Connect to your Google BigQuery data warehouse using Livebook's Database Connection Smart cell. Write and run queries directly from Livebook.",
    image: bigqueryPreview,
    cta: {
      link: "https://news.livebook.dev/how-to-query-and-visualize-data-from-google-bigquery-using-livebook-3o2leU",
      main: "Read the tutorial",
      description: "Big Query & Livebook",
    },
  },
  {
    id: "amazon-athena",
    name: "Amazon Athena",
    logo: athenaLogo,
    category: "Data Warehouse",
    headline: "Connect to Amazon Athena directly from Livebook",
    description:
      "Connect to your AWS Athena using Livebook's Database Connection Smart cell. Use Livebook Secrets to store your AWS access key securely. Write and run queries directly from Livebook.",
    image: athenaPreview,
    cta: {
      link: "https://news.livebook.dev/how-to-query-and-visualize-data-from-amazon-athena-using-livebook-4dfQ5y",
      main: "Read the tutorial",
      description: "Athena & Livebook",
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
    image: vegaLitePreview,
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
        image: vegaLiteChartSmartCell,
      },
      {
        headline: "All the power from Vega-Lite",
        description:
          "When the Smart cell is not enough, Livebook offers a tiny API layer that gives you full access to all of Vega-Lite's features and makes it easier to build all sorts of Vega-Lite charts.",
        image: vegaLitePower,
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
    image: maplibrePreview,
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
        image: maplibreMapSmartCell,
      },
      {
        headline: "All the power from MapLibre",
        description:
          "When the Smart cell is not enough, Livebook offers a tiny API layer that gives you full access to all of MapLibre's features and makes it easier to build all sorts of MapLibre maps.",
        image: maplibreAllPower,
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
    image: mermaidPreview,
  },
];

export default integrations;
