#!/bin/sh
while true; do
    echo "Running Python server..."
    python app.py
    if [ $? -eq 0 ]; then
        echo "Python script finished successfully."
    else
        echo "[ERROR] Python script failed. Retrying in 5 seconds..."
        PID=$(lsof -t -i :5000)
        # Si se encuentra un proceso, matarlo
        if [[ ! -z "$PID" ]]
        then
            echo "[INFO] Matando proceso en el puerto 5000: $PID"
            kill $PID
        fi
        sleep 5
    fi
done