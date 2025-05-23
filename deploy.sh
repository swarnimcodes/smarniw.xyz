#!/bin/env bash
zola build
sudo rsync -avz --delete public/ /var/www/smarniw/
