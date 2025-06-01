# Step 1: Build Next.js
FROM node:18-alpine AS builder

WORKDIR /app

COPY . .

RUN npm install --legacy-peer-deps
RUN npm run build

# Step 2: Run only build result
FROM node:18-alpine

WORKDIR /app

COPY --from=builder /app ./

RUN npm install --legacy-peer-deps --omit=dev

EXPOSE 3000

CMD ["npm", "start"]
