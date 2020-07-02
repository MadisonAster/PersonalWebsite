# Resume++
A Kubernetes resume template for professional software engineers.

## Setup
See [_setup/README.md](_setup/README.md)

## Major Features
- [ ] Declaritive resource provisioning
- [x] Hands off administration
- [x] Simple LAMP folder structure
- [x] Automatic folder scanning
- [x] Automatic menu creation
- [x] Stateless pagination
- [x] Separation of concerns
  - [x] resume-service
  - [x] datascraper-service
- [x] Profile page iFrames
  - [x] GitHub
  - [x] CodeWars
  - [x] IMDB
  - [ ] LinkedIn
- [x] Favorites lists scraping
  - [x] IMDB
  - [x] GoodReads
  - [x] Rawg.io
- [x] Customizable projects blog
- [x] Customizable Three.js background
- [x] Automated bookmarks synchronization
- [x] Automated skills tracking pipeline
- [ ] Automated PDF resume generation via javascript

## Future Features

- [ ] A Database
- [ ] Django interface for creating blog content
- [ ] Django interface for creating snapshot pages
- [ ] Django interface for adding favorites lists
- [ ] Secure P2P networking protocol
- [ ] Django interface for friend's lists
- [ ] Django interface for private messaging
- [ ] Django interface for activity feed
- [ ] Mouse presence
- [ ] Aggregated friends lists
- [ ] Resume++ homepage
- [ ] Resume++ configuration portal
- [ ] More hosting options
- [ ] Instructional videos

## RoadMap

- [x] Check logs
- [x] Fix Security certificate
- [x] Get Demo Maze Working
- [x] Replace textures
- [x] Get scroll working
- [x] Spawn in center of maze
- [x] Add distance fog
- [x] Add glow
- [x] Add Char light with specular
- [x] Add CoolWalls list
- [x] Renamed Links to Favorites
- [x] Cleaned up Favorites a bit
- [x] Scroll to top on menu click
- [x] Fixed Video player loading size
- [x] Add basic left wall tracing
- [x] Added tabs for good reads and rawg.io
- [x] Rewrite About Headline
- [x] Fix IMDB
- [x] Add CodeWars
- [x] Fix Full Screen
- [x] Fix Phone Camera
- [x] Fix Edge animation rate
- [x] Copy Favorites to IMDB account
- [x] Create rawg account
- [x] Make source public
- [x] Move Contact data into About
- [x] Containerize Javascript
- [x] Fix Maze Light
- [x] Fix DemoReel resize issue
- [x] Fix maze autonav triggering on load
- [x] Add GitHub history state
- [x] Specify menu order
- [x] Fix GitHub commit years
- [x] Install python3 on server for ssl
- [x] Fix Snapshots script on server
- [x] Fix Firefox 1080p VSVideos
- [x] Disable performance heavy features for mobile
- [x] Fix mobile text scaling
- [x] Combine DemoReel into Projects
- [x] Fix Movie favorites
- [x] Fix TV favorites
- [x] Add GoodReads
- [x] Add rawg.io
- [x] Fix favorites thumbnail layout
- [x] Rewrite About Me
- [x] Clean up bookmarks folder
- [x] Update skills list
- [x] Add Firefox Bookmarks data
- [x] Add Firefox Bookmarks tree
- [x] Remove font awesome
- [x] Fix Bookmarks Menu priority
- [x] Fix Bookmarks Menu hidden skills
- [x] Fix Favorites Page mobile scaling
- [x] Arrest New Tab race condition
- [x] Fix Backups
- [x] Add PHP Container
- [x] Fix PHP compatability
- [x] Add Firefox container
- [x] Add Compose file
- [x] Fix Live Development environment
- [x] Write PersonalWebsite README

- [ ] Add Kind layer
- [ ] AWS deployment
- [ ] Separate Firefox Container
- [ ] Create Screenshots Container
- [ ] Create Mailer Daemon Container
- [ ] Change PHP container to nginx

- [ ] Improve loading times 
  - Use php to fill current page.
  - For each queued page, use javascript to make php request for content.php in folder. 
  - Set innerHtml once request is received and queue position is called, this should start contents loading.
  - Notify queue when complete
  - Queue: (Don't include current page)
    0 Background
    1 About
    2 Bookmarks
    3 Profiles/GitHub
    4 Profiles/IMDB
    5 Profiles/CodeWars
    6 Projects
    7 Favorites/Games
    8 Favorites/Books
    9 Favorites/TV
    10 Favorites/Movies

- [ ] Connect Skills tree links to positional Favorites tab links
- [ ] Fix favorites popup content layout
- [ ] Install firefox on server or gain access to mozilla data endpoint
- [ ] Enable firefox cron job

- [ ] Add wall tracing line
- [ ] Add right wall tracing
- [ ] Add CoolWalls folder scan
- [ ] Add CoolWalls async loading
- [ ] Debug Maze

- [ ] Write list of interview questions

- [ ] Update seo tags
- [ ] Combine resume/cv
- [ ] Add Bookshelf project
- [ ] Add Toyota Project

- [ ] Overhaul video player
- [ ] Video ScrubBrush
- [ ] DeepGL

- [ ] HOLD - Check Safari animation rates
- [ ] HOLD - Add LinkedIn
- [ ] HOLD - Snow Particles
- [ ] HOLD - Fix Contact form




**This project is currently under heavy development, and I don't suggest trying it out yourself yet**