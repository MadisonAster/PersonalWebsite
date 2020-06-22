FROM ubuntu:latest
WORKDIR /root
ENV LC_ALL C
ENV DEBIAN_FRONTEND noninteractive
ENV DEBCONF_NONINTERACTIVE_SEEN true


#RUN apt-get update && apt-get install -y y apt-utils
RUN apt-get update && apt-get install -y software-properties-common

#RUN apt-get update && apt-get install python3.6
RUN apt-get update && apt-get -y install cron


#RUN add-apt-repository -y ppa:mozillateam/firefox-next
#RUN apt-get update && apt-get install -y firefox && rm -rf /var/lib/apt/lists/*
#RUN firefox -CreateProfile "headless /moz-headless"  -headless
#ADD firefox/user.js /moz-headless/
#ADD firefox/index.html /root/
#EXPOSE 6000
#CMD ["firefox", "-p", "headless", "-headless", "--start-debugger-server", "6000", "file:///root/index.html"]


RUN echo "BlahBlahBlah"

#Fix Firefox database sync here


#RUN apt-get install openssl
RUN apt-get update && apt-get install -y ffmpeg
#RUN pip install BeautifulSoup
#RUN pip install requests
#RUN pip install rawgpy


RUN apt-get update 
RUN apt-get -y install cron
COPY crontest.sh /etc/cron.d/crontest.sh
RUN chmod 0744 /etc/cron.d/crontest.sh
RUN crontab /etc/cron.d/crontest.sh
RUN touch /var/log/cron.log
CMD cron && tail -f /var/log/cron.log

#RUN touch /cron_GoodReads.log
#RUN touch /cron_Rawg.log
#RUN touch /cron_GitHub.log
#RUN touch /cron_IMDB.log
#RUN touch /cron_CodeWars.log
#RUN touch /cron_LinkedIn.log
#RUN touch /cron_TV.log
#RUN touch /cron_Movies.log