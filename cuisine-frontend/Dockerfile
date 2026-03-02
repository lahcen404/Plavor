FROM node:20-alpine
WORKDIR /app
RUN npm install -g @angular/cli
# This allows the container to stay running for development
CMD ["ng", "serve", "--host", "0.0.0.0", "--poll", "2000"]