# Installs the current application on a Node Image.
FROM node:10.5

# The base node image sets a very verbose log level.
ENV NPM_CONFIG_LOGLEVEL warn
ENV NODE_ROOT /usr/app/

# 3. Add the current directory . into the path /usr/app in the image.
ADD . ${NODE_ROOT}
WORKDIR ${NODE_ROOT}
RUN chmod -R -f 777 ${NODE_ROOT}

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package.json ./

#RUN npm install



# Copy all local files into the image.
COPY . .

# Build for production.
#RUN npm run build --production

# Install all the packages
RUN npm install -g @angular/cli
RUN yarn install


# Uncomment this if you went with Option #2 in Step #2 (Windows Only)
# RUN npm rebuild node-sass --force
# The default port from ng serve (4200)
# and 49153 for Webpack Hot Module Reload
EXPOSE 4200 

