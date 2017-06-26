for /l %%x in (1001, 1, 2000) do (
C:/Users/Thomas/Downloads/libwebp-0.4.1-windows-x64/bin/cwebp.exe -preset photo -q 10 -m 6 "C:/Portfolio/Website/_Assets/pngSequences/2DServerRoom_v01/2DServerRoom_v01.%%x.png" -o "C:/Portfolio/Website/_Assets/webpSequences/2DServerRoom_v01/2DServerRoom_v01.%%x.webp"
)
PAUSE