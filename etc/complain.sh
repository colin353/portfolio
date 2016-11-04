#!/bin/bash

# This script runs all of the complain functions,
# like `go test`, `go vet`, `golint`, and `go fmt`.

set -e

echo "Testing go code..."
go test ./models

echo "Vetting..."
go vet ./models

echo "Linting..."
$GOPATH/bin/golint --set_exit_status ./models

echo "Formatting..."
gofmt -w ./

echo "Checking flow types..."
flow check app/main.js
flow coverage app/main.js

echo "Checking for linter errors..."
eslint -c app/.eslint.json app/main.js

echo "Running jest..."
cd app/ && npm run test

echo
echo
echo "         ------------"
echo "        |            |"
echo "        |    PASS    |"
echo "        |            |"
echo "         ------------"
echo
echo