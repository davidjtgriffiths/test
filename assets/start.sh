#!/bin/bash
set -e

# Generate nginx.conf from template (Coolify recommends this)
node /assets/scripts/prestart.mjs /assets/nginx.template.conf /etc/nginx.conf

# Run supervisord (manages php-fpm, nginx, queue, SSR, etc.)
exec supervisord -c /etc/supervisord.conf -n
