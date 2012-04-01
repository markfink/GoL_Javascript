#!/bin/bash

# start the Javascript test environment

FIREFOX="/usr/bin/firefox"
/usr/bin/java -jar JsTestDriver-1.3.3d.jar --port 4224 --browser $FIREFOX &

