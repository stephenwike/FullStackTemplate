# ------------BUILD
# docker build -t mssql-migrate-build .
# ------------RUN
# docker run -d --rm mssql-migrate-build

FROM mcr.microsoft.com/mssql-tools:latest
COPY . .
RUN chmod +x /migrate-script.sh
ENTRYPOINT [ "bash", "/migrate-script.sh" ]
