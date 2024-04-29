import requests

# Потрібно ввести унікальний айді з базт даних монго
object_id = "662f5bf9adf2d08a7c3d6c33"

delete_url = f'http://localhost:5000/api/places/delete/{object_id}'


response = requests.delete(delete_url)

if response.status_code == 200:
    print("Документ успішно видалено")
else:
    print("Не вдалося видалити документ:", response.text)
