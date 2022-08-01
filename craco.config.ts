import { aliases } from "./src/config";

const path = require(`path`);

const SRC = `./src`;
const aliasesList = aliases(SRC);

const resolvedAliases = Object.fromEntries(
  Object.entries(aliasesList).map(([key, value]) => [
    key,
    path.resolve(__dirname, value),
  ])
);

module.exports = {
  webpack: {
    alias: resolvedAliases,
  },
};
