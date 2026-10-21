#!/usr/bin/env bash
cd "$(dirname "$0")"
if ! command -v node >/dev/null 2>&1; then
  echo "Chưa cài Node.js. Hãy cài bản LTS tại https://nodejs.org"
  exit 1
fi
exec node server.js "$@"
