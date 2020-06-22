###############HEAD################
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
###################################


##############FIREFOX##############
#RUN add-apt-repository -y ppa:mozillateam/firefox-next
#RUN apt-get update && apt-get install -y firefox && rm -rf /var/lib/apt/lists/*
#RUN firefox -CreateProfile "headless /moz-headless"  -headless
#ADD firefox/user.js /moz-headless/
#ADD firefox/index.html /root/
#EXPOSE 6000
#CMD ["firefox", "-p", "headless", "-headless", "--start-debugger-server", "6000", "file:///root/index.html"]

#Fix Firefox database sync here
###################################


##########PYTHON LIBRARIES#########
#RUN apt-get install openssl
RUN apt-get update && apt-get install -y ffmpeg
RUN pip3 install beautifulsoup4
RUN pip3 install requests
RUN pip3 install rawgpy
###################################


############CRON JOBS##############
RUN apt-get update 
RUN apt-get -y install cron
COPY crontest.sh /etc/cron.d/crontest.sh
RUN chmod 0744 /etc/cron.d/crontest.sh
RUN crontab /etc/cron.d/crontest.sh
RUN touch /cron.log
CMD cron && tail -f /cron.log
###################################

