import requests

url = 'http://localhost:5000/api/places/add'
data = {
    "id": 36,
    "name": "Гаряча картошка",
    "description": "Такса це порода собаки ",
    "imageUrl": "https://img.freepik.com/free-photo/beautiful-pet-portrait-of-dog_23-2149218450.jpg",
    "latitude": 123.456,  
    "longitude": 789.012  
}

response = requests.post(url, json=data)

if response.status_code == 200:
    print("Додано! Успішно обновлена база даних")
else:
    print("Не додано:(", response.text)
