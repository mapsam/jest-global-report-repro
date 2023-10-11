Reproducing an issue with Jest. When `globalTeardown` is set, and tests are run with `--outputFile=`, there is not resulting output file.

```sh
npx jest --outputFile=report.json

# Determining test suites to run...setup
#  PASS  ./index.test.js
#   ✓ hola mundo (1 ms)
#
# Test Suites: 1 passed, 1 total
# Tests:       1 passed, 1 total
# Snapshots:   0 total
# Time:        0.101 s, estimated 1 s
# Ran all test suites.
# teardown

ls # shows no report.json
```