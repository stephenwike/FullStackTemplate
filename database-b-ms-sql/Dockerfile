# ------------BUILD
# docker build -t database-b-build .
# ------------RUN
# docker run -p 1433:1433 --name database-b -h database-b -v C:/Users/swikusb/Desktop/Learning/FullStackTemplate/database-b-ms-sql/mssql:/var/opt/mssql -d database-b-build
# ------------INTERACT
# docker exec -it database-b "bash"
# ------------SIGN INTO DATABASE
# sqlcmd -S localhost -U SA -P "d6j#Kl6pSJde7"

FROM mcr.microsoft.com/mssql/server AS MSSQL_PID
EXPOSE 1433
ENV PATH=$PATH:/opt/mssql/bin:/opt/mssql-tools/bin
ENV SA_PASSWORD=d6j#Kl6pSJde7
ENV ACCEPT_EULA=Y
ENV MSSQL_PID=Developer
