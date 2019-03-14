#!/usr/bin/env bash

mv $(pwd)/build/index.html $(pwd)/build/home.html
cp $(pwd)/build/home.html $(pwd)/build/404.shtml
rm $(pwd)/build/index.html

scp -r $(pwd)/build/* wgu8ry0ccyvh@160.153.77.104:~/public_html
