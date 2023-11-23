import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "https://learn.microsoft.com/en-us/training/",
  match: "https://learn.microsoft.com/en-us/training/**",
  maxPagesToCrawl: 50,
  outputFileName: "output.json",
};
