# Base image
FROM node:14

# Maintainer name
LABEL maintainer="educative@educative.io"
LABEL maintainer1="gparlakov@gmail.com"

# Install Google Chrome
RUN wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add -
#RUN sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list'
#RUN apt-get update && apt-get install -y google-chrome-stable
RUN apt-get update
ARG CHROME_VERSION="92.0.4515.107-1"
RUN wget --no-verbose -O /tmp/chrome.deb https://dl.google.com/linux/chrome/deb/pool/main/g/google-chrome-stable/google-chrome-stable_${CHROME_VERSION}_amd64.deb \
  && apt install -y -f /tmp/chrome.deb \
  && rm /tmp/chrome.deb

# Install chrome driver for jasmine browser runner
RUN wget https://chromedriver.storage.googleapis.com/91.0.4472.101/chromedriver_linux64.zip && unzip chromedriver_linux64.zip && mv chromedriver /usr/bin/chromedriver && chown root:root /usr/bin/chromedriver && chmod +x /usr/bin/chromedriver

# RUN npm install -g @angular/cli

# set the workdir to be the Educative directory
WORKDIR /usr/local/educative/unit-testing-course

ADD package.json ./package.json
# Installing Angular cli and node modules in angular directory
RUN cd /usr/local/educative/unit-testing-course && npm i

# No need for this - we always get the latest from /usercode/ - Copying angular folder from local directory to Educative directory
# COPY . .

ENTRYPOINT env && echo "------------set entry point, please----------"

EXPOSE 3000
EXPOSE 4200
EXPOSE 9876
EXPOSE 888
