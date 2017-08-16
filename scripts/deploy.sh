#!/bin/bash

scp docker-compose.yml ubuntu@34.211.187.29:

ssh ubuntu@34.211.187.29 'docker-compose pull'
ssh ubuntu@34.211.187.29 'docker-compose build'
ssh ubuntu@34.211.187.29 'docker-compose up -d'
