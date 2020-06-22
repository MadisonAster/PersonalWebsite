FROM ubuntu:latest
ENV LC_ALL C
ENV DEBIAN_FRONTEND noninteractive
ENV DEBCONF_NONINTERACTIVE_SEEN true




RUN apt-get update && apt-get install -y software-properties-common
RUN add-apt-repository -y ppa:mozillateam/firefox-next
RUN apt-get update && apt-get install -y firefox \
  && rm -rf /var/lib/apt/lists/*

RUN firefox -CreateProfile "headless /moz-headless"  -headless

ADD firefox/user.js /moz-headless/


WORKDIR /root

ADD firefox/index.html /root/

EXPOSE 6000

CMD ["firefox", "-p", "headless", "-headless", "--start-debugger-server", "6000", "file:///root/index.html"]

RUN echo "BlahBlahBlah"

#Fix Firefox database sync here

#RUN apt-get install python 3.6.8
#RUN apt-get install openssl
#RUN apt-get install ffmpeg
#RUN pip install BeautifulSoup
#RUN pip install requests
#RUN pip install rawgpy

#ADD cronjobs.sh

RUN apt-get update && apt-get -y install cron

COPY cronjobs.sh /etc/cron.d/cronjobs.sh
RUN chmod 0644 /etc/cron.d/cronjobs.sh
RUN crontab /etc/cron.d/cronjobs.sh

RUN touch /var/log/cron.log
CMD cron && tail -f /var/log/cron.log

#RUN touch /var/log/cron_GoodReads.log
#RUN touch /var/log/cron_Rawg.log
#RUN touch /var/log/cron_GitHub.log
#RUN touch /var/log/cron_IMDB.log
#RUN touch /var/log/cron_CodeWars.log
#RUN touch /var/log/cron_LinkedIn.log
#RUN touch /var/log/cron_TV.log
#RUN touch /var/log/cron_Movies.log