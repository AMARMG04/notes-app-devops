#Phase 1
# FROM node:18
# WORKDIR /app
# COPY package*.json ./
# RUN npm install
# COPY . .
# EXPOSE 3000
# CMD ["npm", "start"]
 
#Phase 4 Multi Stage Build

# ---- Base Stage ----
FROM node:18-alpine AS base
WORKDIR /app
COPY package*.json ./
RUN npm install

# ---- Release Stage ----
FROM node:18-alpine
WORKDIR /app
COPY --from=base /app/node_modules ./node_modules
COPY . .
EXPOSE 3000
CMD ["npm", "start"]