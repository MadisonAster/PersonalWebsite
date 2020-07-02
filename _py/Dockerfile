###############MAIN################
FROM ubuntu:latest
WORKDIR /mnt/w/
ENV LC_ALL C
ENV DEBIAN_FRONTEND noninteractive
ENV DEBCONF_NONINTERACTIVE_SEEN true
###################################


##########COMMON PACKAGES##########
#RUN apt-get update && apt-get install -y y apt-utils
RUN apt-get update && apt-get install -y software-properties-common
#RUN apt-get update && apt-get -y install python3.6
RUN apt-get update && apt-get -y install python3-pip
RUN apt-get update && apt-get -y install cron
RUN apt-get update && apt-get install -y ffmpeg
#RUN apt-get update &&  apt-get install openssl
###################################


##########SETUP FIREFOX############
RUN add-apt-repository -y ppa:mozillateam/firefox-next
RUN apt-get update && apt-get install -y firefox && rm -rf /var/lib/apt/lists/*
RUN firefox -CreateProfile "headless /moz-headless"  -headless
COPY ./_firefoxprofile/ /moz-headless
###################################


##########PYTHON LIBRARIES#########
RUN pip3 install beautifulsoup4
RUN pip3 install lxml
RUN pip3 install html5lib
RUN pip3 install requests
RUN pip3 install rawgpy
RUN pip3 install pyyaml
###################################


######CREATE PROJECT STRUCTURE#####
COPY . /_py

RUN mkdir -p /Favorites/Books/snapshot
RUN mkdir -p /Favorites/TV/snapshot
RUN mkdir -p /Favorites/Movies/snapshot
RUN mkdir -p /Favorites/Games/snapshot
RUN mkdir -p /Favorites/Bookmarks/snapshot
RUN mkdir -p /IMDB/snapshot
RUN mkdir -p /GitHub/snapshot
RUN mkdir -p /CodeWars/snapshot
RUN mkdir -p /LinkedIn/snapshot
###################################


######LOAD CONFIG (FF & CRON)######
RUN python3 /_py/LoadConfig.py
###################################


##########RUN CRON JOBS############
#RUN chmod 0744 /etc/cron.d/crontest.sh
#RUN crontab /etc/cron.d/crontest.sh
RUN chmod 0744 /etc/cron.d/cronjobs.sh
RUN crontab /etc/cron.d/cronjobs.sh
###################################


########RUN FIREFOX && CRON########
#CMD firefox -P headless -headless >> /_logs/firefox.log
#CMD cron && tail -f /_logs/cron.log
CMD cron && firefox -P headless -headless >> /_logs/firefox.log 
###################################

