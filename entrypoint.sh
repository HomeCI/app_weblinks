# Start Flask server in background
echo "*** STARTING BACKEND ***"
ls /app/backend
cd /app/backend && ./run.sh > >(tee -a app.log) 2> >(tee -a app.err >&2) &

echo "*** STARTING FRONTEND ***"
http-server -c-1 -a 0.0.0.0 -p 80 -d false
