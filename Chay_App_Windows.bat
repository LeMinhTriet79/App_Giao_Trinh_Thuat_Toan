@echo off
chcp 65001 >nul
title Bí kíp Thuật toán Java/.NET (MSDN 2005 Edition v2.0)
set CURRENT_DIR=%~dp0
set HTML_FILE=%CURRENT_DIR%index.html

where msedge >nul 2>nul
if %errorlevel% equ 0 (
    start "" msedge --app="file:///%HTML_FILE%" --window-size=1320,860
    exit /b 0
)

if exist "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe" (
    start "" "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe" --app="file:///%HTML_FILE%" --window-size=1320,860
    exit /b 0
)

where chrome >nul 2>nul
if %errorlevel% equ 0 (
    start "" chrome --app="file:///%HTML_FILE%" --window-size=1320,860
    exit /b 0
)

start "" "%HTML_FILE%"
exit /b 0
