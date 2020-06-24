###############MAIN################
FROM ubuntu:latest
WORKDIR /
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


##########PYTHON LIBRARIES#########
RUN pip3 install beautifulsoup4
RUN pip3 install lxml
RUN pip3 install html5lib
RUN pip3 install requests
RUN pip3 install rawgpy

RUN python3 LoadConfig.py
###################################


##############FIREFOX##############
RUN add-apt-repository -y ppa:mozillateam/firefox-next
RUN apt-get update && apt-get install -y firefox && rm -rf /var/lib/apt/lists/*
RUN firefox -CreateProfile "headless /moz-headless"  -headless
#ADD firefox/prefs.js /moz-headless/

COPY FirefoxPrefs.js /moz-headless/prefs.js
COPY ./config/firefoxprofile/ /moz-headless

#EXPOSE 6000
#CMD ["firefox", "-P", "headless", "-headless", "--start-debugger-server", "6000", "file:///root/index.html"]
CMD ["firefox", "-P", "headless", "-headless"]
###################################


############CRON JOBS##############
COPY crontest.sh /etc/cron.d/crontest.sh
RUN chmod 0744 /etc/cron.d/crontest.sh
RUN crontab /etc/cron.d/crontest.sh
RUN touch /cron.log
CMD cron && tail -f /cron.log
###################################


######CREATE PROJECT STRUCTURE#####
RUN mkdir -p /Favorites/Books/snapshot
RUN mkdir -p /Favorites/TV/snapshot
RUN mkdir -p /Favorites/Movies/snapshot
RUN mkdir -p /Favorites/Games/snapshot
RUN mkdir -p /Favorites/Bookmarks/snapshot
RUN mkdir -p /IMDB/snapshot
RUN mkdir -p /GitHub/snapshot
RUN mkdir -p /Codewars/snapshot
RUN mkdir -p /LinkedIn/snapshot

COPY . /_py
###################################

