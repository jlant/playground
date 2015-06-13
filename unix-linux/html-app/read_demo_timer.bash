#!/bin/bash

echo -n "Hurry and type something > "

if read -t 3 response; then
    echo "Great, you made it in time! Your response was: $response"
else
    echo ""
    echo "Sorry, you were too slow"
fi
