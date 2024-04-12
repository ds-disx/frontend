FROM node:18

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

RUN yarn build

EXPOSE 3000

CMD ["yarn", "start"]

# FROM node:18

# WORKDIR /app

# COPY package.json yarn.lock ./

# RUN yarn install

# COPY . .

# EXPOSE 3000

# CMD ["yarn", "dev"]