#!/bin/zsh

cd src/components

echo "create component..."

mkdir "$1" && cd "$1"

touch "$1.js"
touch "$1.css"

echo "done..."
