from fastapi import FastAPI, HTTPException, Body
from fastapi.middleware.cors import CORSMiddleware
from pymongo import MongoClient
import time
from bson import ObjectId  

app = FastAPI()

#Cross origin resource sharing дозволяє виконувати запити до сервера, який має інший домен, якщо ним не користуватись то браузер буде блокувати запити 
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

#підключення до бази бази даних, яка лежить на клоуд сервері 
mongo_client = MongoClient("mongodb+srv://MaxHumeniuk:max556644332211@cluster.jogtiso.mongodb.net/restaurants")

@app.on_event("startup")
async def startup_event():
    try:
        time.sleep(5)
        mongo_client.server_info()
        print("Connected to the database")
    except Exception as e:
        print(f"Error connecting to the database: {e}")


#Запити до бд для отримання колеції ресторанів за допомогою унікального айді 
@app.get("/api/places")
async def get_places():
    try:
        db = mongo_client.get_database()
        collection = db.get_collection("restaurantsCollection")
        places = list(collection.find({}))
        for place in places:
            place['_id'] = str(place['_id'])
        return places
    except Exception as e:
        print(f"Error fetching places: {e}")
        raise HTTPException(status_code=500, detail="Internal Server Error")


# Додавання нового ресторану до бази даних.
@app.post("/api/places/add")
async def add_place(name: str = Body(...), description: str = Body(...), imageUrl: str = Body(...), latitude: float = Body(...), longitude: float = Body(...)):
    try:
        db = mongo_client.get_database()
        collection = db.get_collection("restaurantsCollection")
        new_place = {
            "name": name,
            "description": description,
            "imageUrl": imageUrl,
            "latitude": latitude,
            "longitude": longitude
        }
        result = collection.insert_one(new_place)
        return {"id": str(result.inserted_id), "message": "Restaurant added successfully"}
    except Exception as e:
        print(f"Error adding place: {e}")
        raise HTTPException(status_code=500, detail="Internal Server Error")
    

@app.delete("/api/places/delete/{object_id}")
async def delete_place(object_id: str):
    try:
        db = mongo_client.get_database()
        collection = db.get_collection("restaurantsCollection")

        # Конвертуємо ObjectId у відповідний формат для MongoDB
        from bson import ObjectId
        object_id = ObjectId(object_id)

        # Видаляємо документ з бази даних за його ObjectId
        result = collection.delete_one({"_id": object_id})

        if result.deleted_count == 1:
            return {"message": "Document successfully deleted"}
        else:
            raise HTTPException(status_code=404, detail="Document not found")
    except Exception as e:
        print(f"Error deleting place: {e}")
        raise HTTPException(status_code=500, detail="Internal Server Error")
