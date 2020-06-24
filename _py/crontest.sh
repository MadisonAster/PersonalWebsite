#54 * * * * python3 /_py/GoodReads.py {GoodReads_UserNumber} {GoodReads_ApiKey} >> /cron_GoodReads.log
#55 * * * * python3 /_py/Rawg.py {Rawg_UserName} >> /cron_Rawg.log
07 * * * * python3 /_py/TakeSnapshots.py GetGitHub {GitHub_SnapshotURL} GitHub/snapshot >> /cron_GitHub.log
08 * * * * python3 /_py/TakeSnapshots.py GetIMDB {IMDB_SnapshotURL} IMDB/snapshot >> /cron_IMDB.log
09 * * * * python3 /_py/TakeSnapshots.py GetCodeWars {CodeWars_SnapshotURL} CodeWars/snapshot >> /cron_CodeWars.log
#6 * * * * python3 /_py/TakeSnapshots.py GetLinkedIn {LinkedIn_SnapshotURL} GetLinkedIn/snapshot >> /cron_LinkedIn.log
#59 * * * * python3 /_py/IMDB.py {FavoriteTV_ListURL} Favorites/TV/snapshot/ >> /cron_TV.log
#60 * * * * python3 /_py/IMDB.py {FavoriteMovies_ListURL} Favorites/Movies/snapshot/ >> /cron_Movies.log
#61 * * * * python3 /_py/Firefox.py /moz-headless Favorites/Bookmarks/snapshot/ >> /cron_Bookmarks.log
# An empty line is required at the end of this file, line endings must be unix style (LF Only)
