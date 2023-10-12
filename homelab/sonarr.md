docker run -d \
  --name=sonarr \
  -e PUID=1001 \
  -e PGID=1001 \
  -e TZ=Australia/Sydney \
  -p 8989:8989 \
  -v /app/sonarr/config:/config \
  -v /mnt/truenas/tvshows:/tv \
  -v /app/deluge/data:/data \
  --restart unless-stopped \
  lscr.io/linuxserver/sonarr:latest
