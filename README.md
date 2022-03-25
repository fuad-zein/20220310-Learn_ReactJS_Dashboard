# Slicing Dashboard with React

## I. Install project `npm i`

To install dependencies this project app, using command by:

```
npm install
```

or

```
npm i
```

## II. Run project `npm start`

You can start code by run:

```
npm start
```

By default run at [http://localhost:3000/](http://localhost:3000/)

## III. Using by json-server to make fake-api

You can following this tutorial at [json-server](https://github.com/typicode/json-server)

You can run by:

```
json-server --watch db.json --port 4000
```

- Will be shown at the object of the dashboard = [http://localhost:4000/dashboard](http://localhost:4000/dashboard)
- And will be shown at the object of the order = [http://localhost:4000/order](http://localhost:4000/order)

**Value from my json-server:**

You can create folder by name = db.json.

```json
{
  "order": [
    {
      "id": 1,
      "customer": "Doni Setiawan",
      "income": "1121",
      "sold": "21213"
    },
    {
      "id": 2,
      "customer": "Rudi",
      "income": "2022",
      "sold": "211"
    }
  ],

  "dashboard": [
    {
      "id": 1,
      "goodsname": "samsung tv",
      "date": "2017-01-01",
      "price": 20000,
      "status": "delivered"
    },
    {
      "id": 2,
      "goodsname": "samsung hp",
      "date": "2017-02-01",
      "price": 30000,
      "status": "cancelled"
    }
  ]
}
```
