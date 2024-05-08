
FROM python:3.10.12-alpine AS python


RUN apk add --no-cache bash && \
    apk add --no-cache --virtual .build-deps gcc musl-dev && \
    pip install --no-cache-dir uvicorn fastapi pymongo bson requests pipdeptree asyncio && \
    apk del .build-deps

RUN pip install --no-cache-dir 'pymongo==3.12.0'


COPY . /app/backend/
WORKDIR /app/backend
EXPOSE 5000

# Команда для запуску серверу
CMD ["uvicorn", "server:app", "--host", "0.0.0.0", "--port", "5000", "--reload"]
