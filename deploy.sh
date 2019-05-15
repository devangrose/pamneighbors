#!/usr/bin/env bash

#mv $(pwd)/build/index.html $(pwd)/build/home.html
#cp $(pwd)/build/home.html $(pwd)/build/404.shtml
#rm $(pwd)/build/index.html

#scp -r $(pwd)/build/* wgu8ry0ccyvh@160.153.77.104:~/public_html

zip -r $(pwd)/build_$(date +'%Y-%m-%d').zip $(pwd)/build
aws s3 cp $(pwd)/build_$(date +'%Y-%m-%d').zip s3://pamneighbors-backup/
rm $(pwd)/build_$(date +'%Y-%m-%d').zip
