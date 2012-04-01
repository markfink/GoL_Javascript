@echo off
set JAVA_HOME=c:\Program Files (x86)\Java\jdk1.6.0_22
:loop
cmd /c "%JAVA_HOME%\bin\java.exe" -jar JsTestDriver-1.3.3d.jar --tests all --testOutput testresults
pause
goto loop
