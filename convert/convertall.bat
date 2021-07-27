@echo off
for /F "usebackq delims=" %%A in (`dir /B ^| findstr /V base16tocss.py ^| findstr /V .css ^| findstr /V .bat ^| findstr /V .sh ^| tr "\r\n" " "`) do python base16tocss.py %%A
