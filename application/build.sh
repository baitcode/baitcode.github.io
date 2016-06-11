#!/usr/bin/env bash

browserify -t [ babelify --presets [ es2015 react ] ] ./js/main.jsx -o ./build/bundle.js