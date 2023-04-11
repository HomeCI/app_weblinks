FROM node:14-alpine AS builder
WORKDIR /app
COPY ./hcilinks_front .
RUN npm install --production
RUN npm run build

FROM nikolaik/python-nodejs:python3.11-nodejs14-alpine
WORKDIR /app

# Python
COPY ./hcilinks_back ./backend 
RUN pip install -r ./backend/requirements.txt
EXPOSE 5000

# Node
COPY --from=builder /app/build .
RUN npm install -g http-server
EXPOSE 80

# Entrypoint
COPY entrypoint.sh .
RUN chmod +x entrypoint.sh 

RUN apk update && \
    apk add --no-cache curl

ENTRYPOINT ["/bin/sh", "entrypoint.sh"]
