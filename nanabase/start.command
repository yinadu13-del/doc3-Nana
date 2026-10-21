#!/usr/bin/env bash
cd "$(dirname "$0")"
if ! command -v node >/dev/null 2>&1; then
  echo "Chưa cài Node.js. Hãy cài bản LTS tại https://nodejs.org"
  open https://nodejs.org
  read -n 1 -s -r -p "Nhấn phím bất kỳ để đóng..."
  exit 1
fi
(sleep 1.5 && open http://localhost:8080/admin/) &
node server.js
