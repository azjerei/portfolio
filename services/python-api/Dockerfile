FROM python:3.9
WORKDIR /app
COPY main.py .
RUN python -m venv .venv
RUN pip install Flask
RUN pip install -U flask_cors