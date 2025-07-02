#!/bin/bash
output="llm.txt"
rm -f "$output"

# list all files
files=$(find . -type f ! -path "./.git/*" | sort)
for f in $files; do
  if [[ $f == ./public/images/* ]]; then
    echo "Image: $f" >> "$output"
  else
    echo "===== START $f =====" >> "$output"
    cat "$f" >> "$output"
    echo "===== END $f =====" >> "$output"
  fi
  echo "" >> "$output"
done
