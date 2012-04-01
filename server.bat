@echo off
set JAVA_HOME=c:\Program Files (x86)\Java\jdk1.6.0_22
set FIREFOX=C:\Program Files (x86)\Mozilla Firefox\firefox.exe
cmd /c ""%JAVA_HOME%\bin\java.exe" -jar JsTestDriver-1.3.3d.jar --port 4224 --browser "%FIREFOX%""
pause
