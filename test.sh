#!/bin/bash

# execute the unit tests and report on console

echo 'Press any key to run the unit tests'

while read -n 1

do
echo
/usr/bin/java -jar JsTestDriver-1.3.3d.jar --tests all --testOutput testresults
echo
echo 'Press any key to run the unit tests'
done
