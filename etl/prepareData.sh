#!/bin/bash
wget -O ml-latest-small-filtered.zip https://github.com/Fir3st/hybrid-recommender-app/raw/master/data/filtered/ml-latest-small-filtered.zip
unzip ml-latest-small-filtered.zip
sort -t , -nk1 < "ml-latest-small-filtered/ratings.csv" > ml-latest-small-filtered/ratings-sorted.csv
