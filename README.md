# react-framer-motion-demo

A basic demo of how to use Framer Motion.

This repo is also for demonstrating automated release notes using Conventional Commits.

## Install

_Requirements: NodeJS, NPM_

1. Clone repo locally.
2. Execute `npm install` to load in all dependencies.
3. Execute `npm run start` to view app locally.

## Instructions for implementing Automated Release Notes

#### 1. (If not already created) Initialize new NPM config:
Execute: `npm init`

#### 2. Install and configure packages:
Execute: `npm i -D husky @commitlint/{config-conventional,cli,prompt} commitizen cz-conventional-changelog standard-version`

#### 3. Add a new file in the root of your project called *commitlint.config.js*, with this content:
```
// commitlint.config.js
module.exports = {extends: ['@commitlint/config-conventional']};
```

#### 4. Add these two lines to the `scripts` portion of your *package.json*:
```
"commit": "./node_modules/.bin/git-cz",
"release": "standard-version"
```

#### 5. Append husky config at end of *package.json*: 
```
  "husky": {
    "hooks": {
      "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
    }
  },
```

#### 6. Append commitizen config at end of *package.json*, to use Conventional Commits rules:
```
  "config": {
    "commitizen": {
      "path": "./node_modules/cz-conventional-changelog"
    }
  },
```
      
#### 7. Finally, append `standard-version` config at end of *package.json*:
_This controls which headers are visible/hidden from generated CHANGELOG.md_
```
  "standard-version": {
    "types": [
      { "type": "chore", "section": "Others", "hidden": false },
      { "type": "revert", "section": "Reverts", "hidden": false },
      { "type": "fix", "section": "Bug Fixes", "hidden": false },
      { "type": "feat", "section": "Features", "hidden": false },
      { "type": "docs", "section": "Docs", "hidden": false },
      { "type": "style", "section": "Styling", "hidden": false },
      { "type": "refactor", "section": "Code Refactoring", "hidden": false },
      { "type": "perf", "section": "Performance Improvements", "hidden": false },
      { "type": "test", "section": "Tests", "hidden": false },
      { "type": "build", "section": "Build System", "hidden": false },
      { "type": "ci", "section": "CI", "hidden": false }
    ]
  }
``` 

#### TEST: With all those packages and configurations installed you're ready to go! Let's go through the commands and make sure everything works.

- Test failed commit message

First let's ensure commit linting is functional. Make a change in your code, then committing with a (now invalid message format), like: "saving changes". You should see an error.

- Commit proper message with tool

Now, let's do a proper commit by using our new command line tool: `npm run commit`

#### FINISH: Generate initial release notes
Alright, commit linting is working, you've got a fresh new commit in your repo's history waiting to be effortlessly printed onto release notes using the new command, `npm run release`. 
 - Since this is the first release using this tool, append the command with `-- --first-release`, so it looks like `npm run release -- --first-release`. 
 - If you want to try out the commands first before having any changes committed, attach `--dry-run` onto the command, it will look like: `npm run release -- --first-release --dry-run`.
 - Upon completion, `standard-version` even gives you the Git command to copy+paste for pushing your shiny new CHANGELOG.md, bumped version numbers, and tagged release. 
