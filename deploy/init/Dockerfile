FROM elasticsearch:2.4.4

# Need python to load sample data into Elasticsearch
RUN apt-get update
RUN apt-get install python -y
RUN apt-get install python-pip -y
RUN pip install elasticsearch

# Copy files to container
# If you get an error, there may be a huge /etl/ml-latest-small-filtered dir you need to delete first.
COPY etl /etl
COPY deploy/init /code

RUN chown -R elasticsearch:elasticsearch /code
RUN chown -R elasticsearch:elasticsearch /etl

RUN ls /etl
WORKDIR /etl
RUN rm -rf /etl/ml-latest-small-filtered
RUN ./prepareData.sh

WORKDIR /
RUN python /etl/rehashTmdbToMl.py /etl/tmdb.json /etl/ml_tmdb.json

CMD /code/init.sh
