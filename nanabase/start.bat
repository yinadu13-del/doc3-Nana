@echo off
chcp 65001 >nul
title NanaBase
cd /d "%~dp0"
where node >nul 2>nul
if errorlevel 1 (
  echo.
  echo  Chua cai Node.js. Hay tai ban LTS tai https://nodejs.org roi chay lai file nay.
  echo.
  start https://nodejs.org
  pause
  exit /b 1
)
start "" /b cmd /c "timeout /t 2 /nobreak >nul & start http://localhost:8080/admin/"
node server.js
echo.
echo  NanaBase da dung.
pause
