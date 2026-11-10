
import requests

url = "http://127.0.0.1:8001/webhook"

data = {
    "job_id": 123,
    "status": "success"
}

response = requests.post(url, json=data)

print(response.json())
