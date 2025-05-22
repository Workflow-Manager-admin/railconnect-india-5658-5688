#!/bin/bash
cd /home/kavia/workspace/code-generation/railconnect-india-5658-5688/railconnect_india
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

