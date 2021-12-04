module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "scope-enum": [2, "always", []],
    "type-enum": [2, "always", ["ci", "build", "feat", "fix", "docs", "style", "refactor", "test", "revert"]]
  }
}
