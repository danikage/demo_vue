@echo off

:: Harvest path is C:\Program Files (x86)\CA\SharedComponents\PEC\bin
:: Node.js path is C:\Program Files (x86)\nodejs
:: Let's replace Harvest's path with Node.js's path
:: set PATH=%PATH:C:\Program Files (x86)\CA\SharedComponents\PEC\bin;=%;C:\Program Files (x86)\nodejs;

:: Start a command prompt. But the environment variable change in previous
:: line will make sure that this new command prompt will run Node.js's node.exe
:: rather than Harvest SCM's node.exe.

::start %ComSpec%
:: start PowerShell
start PowerShell -NoExit -Command "cd ./"

:: Done! Now put this in a directory where you have other personal scripts,
:: and make sure this is in your PATH. And now whenever you want to run Node.js
:: instead of command prompt you just hit Windows + R > "nodecmd".