FROM node:20.10.0-alpine AS builder
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

FROM node:20.10.0-alpine
WORKDIR /app
RUN npm install -g serve
COPY --from=builder /app/build ./build
ENTRYPOINT ["serve", "-s", "build"]
