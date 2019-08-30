# ------------BUILD
# docker build -t database-c-build .
# ------------RUN
# docker run --rm -p 5432:5432 --name database-c -h database-c -d database-c-build
# ------------INTERACT
# docker exec -it database-c "bash"
# ------------SIGN INTO DATABASE
# psql -U postgres -d benchmark_test

FROM postgres:latest

ENV POSTGRES_PASSWORD=secretpassword
ENV POSTGRES_USER=postgres
ENV POSTGRES_DB=benchmark_test
ENTRYPOINT [ "/execute-script.sh" ]

COPY ./execute-script.sh /execute-script.sh

EXPOSE 5432

RUN chmod +x /execute-script.sh