from fastapi import FastAPI, HTTPException, Body
from fastapi.middleware.cors import CORSMiddleware
from pymongo import MongoClient
from bson import ObjectId  

app = FastAPI()

# Cross origin resource sharing дозволяє виконувати запити до сервера, який має інший домен.
# Якщо ним не користуватись, то браузер буде блокувати запити.
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Підключення до бази даних, яка лежить на клоуд сервері 
mongo_client = MongoClient("mongodb+srv://oreo287787:ThtDzPv9JmzkNOWd@cluster1.gd61huh.mongodb.net/restaurants")

# Використання обробника подій життєвого циклу FastAPI для підключення до бази даних при старті додатку
@app.on_event("startup")
async def startup_event():
    try:
        # Опційно можна видалити затримку перед підключенням до бази даних
        # time.sleep(5)
        mongo_client.server_info()
        print("Connected to the database")
    except Exception as e:
        print(f"Error connecting to the database: {e}")

# Запити до бази даних для отримання колекції ресторанів за допомогою унікального айді 
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

# Пости для того, щоб додавати нові рестіки
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
    
# Ендпоінт для видалення компонента з бази даних 
@app.delete("/api/places/delete/{object_id}")
async def delete_place(object_id: str):
    try:
        db = mongo_client.get_database()
        collection = db.get_collection("restaurantsCollection")

        object_id = ObjectId(object_id)

        result = collection.delete_one({"_id": object_id})

        if result.deleted_count == 1:
            return {"message": "Document successfully deleted"}
        else:
            raise HTTPException(status_code=404, detail="Document not found")
    except Exception as e:
        print(f"Error deleting place: {e}")
        raise HTTPException(status_code=500, detail="Internal Server Error")
