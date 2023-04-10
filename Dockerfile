FROM node:14-alpine AS builder
WORKDIR /app
COPY ./hcilinks .
RUN npm install --production
RUN npm run build

FROM node:14-alpine
WORKDIR /app
COPY --from=builder /app/build .
RUN npm install -g http-server
EXPOSE 80
CMD ["http-server", "-p", "80"]
