FROM mcr.microsoft.com/mssql-tools:latest
ENTRYPOINT [ "bash", "/migrate-script.sh" ]
COPY . .
RUN chmod +x /migrate-script.sh
