import requests

# Потрібно ввести унікальний айді з базт даних монго
object_id = "662f53e1fc32b3be920dc923"

delete_url = f'http://localhost:5000/api/places/delete/{object_id}'


response = requests.delete(delete_url)

if response.status_code == 200:
    print("Документ успішно видалено")
else:
    print("Не вдалося видалити документ:", response.text)
