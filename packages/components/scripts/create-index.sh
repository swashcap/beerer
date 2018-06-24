#!/bin/sh
set -e

# Generate src/index.js based on files in src/components/**/*.js

find src/components -type f -name '*.js' \
  | sort \
  | sed -E "s/^src(.*)\/([A-Za-z]+)\.js$/export { default as \2 } from '.\\1\/\2'/" > src/index.js
