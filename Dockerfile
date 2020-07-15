###############MAIN################
FROM ubuntu:latest
ENV LC_ALL C
ENV DEBIAN_FRONTEND noninteractive
ENV DEBCONF_NONINTERACTIVE_SEEN true
###################################


##########COMMON PACKAGES##########
RUN apt-get update && apt-get install -y software-properties-common
RUN apt-get update && apt-get -y install python3-pip
RUN apt-get update && apt-get -y install cron
RUN apt-get update && apt-get install -y ffmpeg
###################################


##########SETUP FIREFOX############
RUN add-apt-repository -y ppa:mozillateam/firefox-next
RUN apt-get update && apt-get install -y firefox && rm -rf /var/lib/apt/lists/*
RUN firefox -CreateProfile "headless /moz-headless"  -headless
COPY ./_config/_firefoxprofile/ /moz-headless
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
COPY _config /mnt/w/_config
COPY ./_py /mnt/w/_py
###################################


######LOAD CONFIG (FF & CRON)######
RUN python3 /mnt/w/_py/LoadConfig.py
###################################


##########RUN CRON JOBS############
RUN chmod 0744 /etc/cron.d/crontest.sh
RUN crontab /etc/cron.d/crontest.sh
#RUN chmod 0744 /etc/cron.d/cronjobs.sh
#RUN crontab /etc/cron.d/cronjobs.sh
###################################


########RUN FIREFOX && CRON########
CMD cron && firefox -P headless -headless >> /mnt/w/_logs/firefox.log 
###################################

