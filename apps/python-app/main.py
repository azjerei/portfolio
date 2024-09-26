import requests

api_url = "http://localhost:4001/quote"
response = requests.get(api_url)

if (response.ok):
  quote = response.json()
  print(quote["quote"])
else:
  print("Failed to load quote!")