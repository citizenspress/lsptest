import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: "c6fbe233-0cd9-4bee-81c3-6e2892323445", // Get this from tina.io
  token: "b15bd9014d5bb530ffbb4f926af813fc5f1962f7", // Get this from tina.io
  build: {
    outputFolder: "admin",
    publicFolder: "static",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "static",
    },
  },
  schema: {
    collections: [
      {
        label: "English",
        name: "english",
        path: "content/english",
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          {
            type: "string",
            name: "title",
            label: "title",
          },
          {
            type: "string",
            name: "slug",
            label: "slug",
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "description",
          },
          {
            type: "string",
            name: "summary",
            label: "summary",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "datetime",
            name: "date",
            label: "date",
          },
          {
            type: "string",
            name: "translationKey",
            label: "translationKey",
          },
          {
            type: "boolean",
            name: "toc",
            label: "table of contents",
          },
        ],
      },
      {
        label: "French",
        name: "french",
        path: "content/french",
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
        ],
      },
      {
        label: "Pages",
        name: "pages",
        path: "content",
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
        ],
      },
    ],
  },
});
