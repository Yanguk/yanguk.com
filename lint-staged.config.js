/**
 * @filename: lint-staged.config.js
 * @type {import('lint-staged').Configuration}
 */
export default {
  "*": ["bun run lint --write --unsafe", "bun run format"],
};
