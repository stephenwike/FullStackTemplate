#!/bin/bash

# build mssql docker container
docker build -t sql ./mssql

# run sql container
docker run -p 1433:1433 --name database-b -h database-b -v sqlvolume:/var/opt/mssq -d --rm sql

# build sqlcmd container
docker build -t sqlcmd ./sql-tools

# run sqlcmd container to migrate database
docker run --network devtools_default --rm sqlcmd