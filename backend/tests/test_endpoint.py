import pytest
from fastapi.testclient import TestClient
from pymongo import MongoClient
from backend.server import app, mongo_client
from backend.server import get_places

client = TestClient(app)

def test_setup_teardown():
    test_mongo_client = MongoClient("mongodb+srv://MaxHumeniuk:max556644332211@cluster.jogtiso.mongodb.net/restaurants")
    test_db = test_mongo_client.get_database()
    test_collection = test_db.get_collection("restaurantsCollection")
    assert test_collection is not None, "Failed to connect to the test database"
    app.dependency_overrides[mongo_client] = test_mongo_client
    test_mongo_client.close()
    app.dependency_overrides.clear()


def test_get_places():
    response = client.get("/api/places")
    assert response.status_code == 200
    assert isinstance(response.json(), list)
    for place in response.json():
        assert "_id" in place
        assert isinstance(place["_id"], str)

def test_get_places_fields():
    response = client.get("/api/places")
    assert response.status_code == 200
    for place in response.json():
        assert "name" in place
        assert isinstance(place["name"], str)
        assert "description" in place
        assert isinstance(place["description"], str)
        assert "imageUrl" in place
        assert isinstance(place["imageUrl"], str)
        assert "latitude" in place
        assert isinstance(place["latitude"], float)
        assert "longitude" in place
        assert isinstance(place["longitude"], float)


