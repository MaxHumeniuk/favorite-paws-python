
FROM node:20.12.2-alpine AS node

COPY . /app/
WORKDIR /app/frontend


RUN npm install -g vite && \
    npm install -y tailwindcss postcss autoprefixer && \
    npm install -y react react-dom

EXPOSE 5173
    
# Команда для запуску серверу
CMD ["npm", "run", "dev", "--", "--port", "5173"]
