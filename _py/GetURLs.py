def GetFavoriteTVURL_Old():
    return 'http://www.primewire.ag/favorites/lolmuly'
def GetFavoriteMoviesURL_Old():
    return 'http://www.primewire.ag/watched/lolmuly'
def GetFavoriteTVURL(pages=8):
    url = 'https://www.imdb.com/list/ls098367816/?sort=list_order,asc&st_dt=&mode=detail&page=1'
    for pagenumber in range(1, pages):
        yield url[:-1]+str(pagenumber)
def GetFavoriteMoviesURL(pages=8):
    url = 'https://www.imdb.com/list/ls098333584/?sort=list_order,asc&st_dt=&mode=detail&page=1'
    for pagenumber in range(1, pages):
        yield url[:-1]+str(pagenumber)
def GetFavoriteBooksURL():
    return 'https://www.goodreads.com/review/list/50378844-lolmuly?page=1&shelf=read'
def GetFavoriteGamesURL():
    return 'https://rawg.io/@maddieawesome/games'
def GetFavoriteBookmarksURL():
    return ''
def GetIMDBURL():
    return 'http://www.imdb.com/name/nm4807696'
def GetGitHubURL():
    return 'http://github.com/MadisonAster'
def GetCodeWarsURL():
    return 'https://www.codewars.com/users/MadisonAster'
def GetLinkedInURL():
    return 'https://www.linkedin.com/in/madisonaster/'