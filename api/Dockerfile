# Create our image based on Python 3.8
FROM python:3.9

# Expose ports
EXPOSE 5000

# Environment variables
ENV PROJECT_DIR /app

# Tell Python to not generate .pyc
ENV PYTHONDONTWRITEBYTECODE 1

# Turn off buffering
ENV PYTHONUNBUFFERED 1

# Install requirements using pip
COPY requirements.txt ${PROJECT_DIR}/
RUN cd ${PROJECT_DIR} && python -m pip install -r requirements.txt

# Set working directory and add our Flask API files
WORKDIR ${PROJECT_DIR}
ADD . ${PROJECT_DIR}