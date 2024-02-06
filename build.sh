#!/bin/bash

docker-compose up --build -d

cd frontend || exit

docker build -t frontend .

docker run --publish 3000:3000 frontend
