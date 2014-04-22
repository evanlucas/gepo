#!/bin/bash

rm -rf lib-cov
jscoverage lib lib-cov
GEPO_COV=1 mocha -R html-cov test.js > coverage.html
GEPO_COV=1 mocha -R json-cov test.js > coverage.json
jostle coverage.json
