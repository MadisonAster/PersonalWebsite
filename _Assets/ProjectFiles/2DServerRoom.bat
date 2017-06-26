for /l %%x in (1001, 1, 2000) do (
ffmpeg -i "C:/Portfolio/Website/_Assets/pngSequences/2DServerRoom_v01/2DServerRoom_v01.%%x.png" -c:v libx264 -b:v 2000k -pix_fmt yuv420p -y "C:/Portfolio/Website/_Assets/mp4Sequences/2DServerRoom_v01/2DServerRoom_v01.%%x.mp4"
)
PAUSE