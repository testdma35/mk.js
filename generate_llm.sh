#!/bin/bash
output="llm.txt"
base_url="https://raw.githubusercontent.com/testdma35/mk.js/refs/heads/codex/convert-files-to-plain-text-and-extract-image-urls"
rm -f "$output"

# list all files
files=$(find . -type f ! -path "./.git/*" | sort)
for f in $files; do
  if [[ $f == ./public/images/* ]]; then
    echo "Image: $base_url/${f#./}" >> "$output"
  else
    echo "===== START $f =====" >> "$output"
    cat "$f" >> "$output"
    echo "===== END $f =====" >> "$output"
  fi
  echo "" >> "$output"
done
