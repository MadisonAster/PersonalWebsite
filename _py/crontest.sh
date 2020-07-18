01 * * * * python3 /mnt/w/_py/GoodReads.py {GoodReads_UserNumber} {GoodReads_ApiKey} >> /mnt/w/_logs/cron_GoodReads.log
02 * * * * python3 /mnt/w/_py/Rawg.py {Rawg_UserName} >> /mnt/w/_logs/cron_Rawg.log
03 * * * * python3 /mnt/w/_py/TakeSnapshots.py GetGitHub {GitHub_SnapshotURL} GitHub/snapshot >> /mnt/w/_logs/cron_GitHub.log
04 * * * * python3 /mnt/w/_py/TakeSnapshots.py GetIMDB {IMDB_SnapshotURL} IMDB/snapshot >> /mnt/w/_logs/cron_IMDB.log
05 * * * * python3 /mnt/w/_py/TakeSnapshots.py GetCodeWars {CodeWars_SnapshotURL} CodeWars/snapshot >> /mnt/w/_logs/cron_CodeWars.log
#06 * * * * python3 /mnt/w/_py/TakeSnapshots.py GetLinkedIn {LinkedIn_SnapshotURL} GetLinkedIn/snapshot >> /mnt/w/_logs/cron_LinkedIn.log
07 * * * * python3 /mnt/w/_py/IMDB.py {FavoriteTV_ListURL} Favorites/TV/snapshot/ >> /mnt/w/_logs/cron_TV.log
08 * * * * python3 /mnt/w/_py/IMDB.py {FavoriteMovies_ListURL} Favorites/Movies/snapshot/ >> /mnt/w/_logs/cron_Movies.log

18 * * * * firefox -P headless -headless --first-startup >> /mnt/w/_logs/firefox.log 
23 * * * * pkill -f firefox
24 * * * * python3 /mnt/w/_py/Firefox.py /moz-headless Favorites/Bookmarks/snapshot/ >> /mnt/w/_logs/cron_Bookmarks.log
# An empty line is required at the end of this file, line endings must be unix style (LF Only)
