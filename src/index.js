import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const {MongoClient} = require('mongodb')

const client = new MongoClient('mongodb+srv://MaxHumeniuk:max556644332211@cluster.jogtiso.mongodb.net/Project 0')

const start = async () => {
  try {
      await client.connect()
      console.log("zaebis")
      await client.db().createCollection('restaurantsCollection')
      const restaurantsCollection = client.db().collection('restaurantsCollection')
  } catch (e) {
    console.log(e)
  }
}
start()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


