# Guide

```
1. Lakukan npm install, pastikan versi node.js yang digunakan adalah versi >= 14.17.0.
2. jalankan sequelize-cli dengan perintah: sequelize db:create. 
3. lalu jalankan sequelize-cli dengan perintah: sequelize db:migrate.
4. lalu jalankan sequelize-cli dengan perintah: sequelize db:seed:all.
5. lalu untuk menjalankan server, jalankan command: nodemon /bin/www.js
6. silahkan gunakan postman untuk menguji API.
```

## Endpoints :
- `POST http://localhost:3000/register`
  - request body:
  ```json
  {
    "email": <email>,
    "first_name": <first_name>,
    "last_name": <last_name>,
    "password": <password>
  }
  ```
- `POST http://localhost:3000/login`
  - request body:
  ```json
  {
    "email": <email>,
    "password": <password>
  }
  ```

- `GET http://localhost:3000/products?page=1` (pagination included, set parameter with key page=1)
  - header:
  ```json
  {
    "access_token": <token>
  }
  ```
  - params:
  ```json
  {
    "page": <page>,
    "limit": <limit> {optional}
  }
  ```

- `GET http://localhost:3000/products/:id`
  - header:
  ```json
  {
    "access_token": <token>
  }
  ```
  - params:
  ```json
  {
    "id": <id>
  }
  ```

- `POST http://localhost:3000/products`
  - header:
  ```json
  {
    "access_token": <token>
  }
  ```
  - request body:
  ```json
  {
    "kode_produk": <kode produk>,
    "nama_produk": <nama produk>,
    "qty": <quantity>,
    "image_produk": <image_produk>
  }
  ```
- `PUT http://localhost:3000/products/:id`
  - header:
  ```json
  {
    "access_token": <token>
  }
  ```
  - params:
  ```json
  {
    "id": <id>
  }
  ```
  - request body:
  ```json
  {
    "kode_produk": <kode produk>,
    "nama_produk": <nama produk>,
    "qty": <quantity>,
    "image_produk": <image_produk>
  }
  ```

- `DELETE http://localhost:3000/products/:id`
  - header:
  ```json
  {
    "access_token": <token>
  }
  ```
  - params:
  ```json
  {
    "id": <id>
  }
  ```

