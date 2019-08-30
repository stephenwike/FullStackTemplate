FROM mcr.microsoft.com/mssql/server
EXPOSE 1433
ENV PATH=$PATH:/opt/mssql/bin:/opt/mssql-tools/bin
ENV SA_PASSWORD=d6j#Kl6pSJde7
ENV ACCEPT_EULA=Y
ENV MSSQL_PID=Developer

ENTRYPOINT [ "/migrate-script.sh" ]
COPY . .
RUN chmod +x /migrate-script.sh
