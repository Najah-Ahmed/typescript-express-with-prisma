# Nodejs Express with Typescript with Prisma as ORM

## Install

###### packages

`npm install -D 
    typescript
    concurrently
    dotenv
    rimraf
  `

`npm install
    @prisma/client
    @types/express
    @types/node
    express
    prisma
  `

###### Commands

`npx tsc --init `

then make change disk
`"outDir": "./dist",`

###### package.json Script

`"scripts": {
    "build": "rimraf dist && npx tsc",
    "dev": "concurrently \"npx tsc -w\" \" nodemon dist/app.js\" "
  },`
` 
npx prisma init`
`
npx prisma migrate dev --name init`

##### All Endpoints

### Books Api

###Get all Books
GET http://localhost:4009/api/user/

###Get sigle user
GET http://localhost:4009/api/user/1

### Create user

POST http://localhost:4009/api/user/
content-type: application/json

{
"username": "fuaad",
"email": "fufooe@d.com",
"password":"helsdelo"
}

### Update user

PUT http://localhost:4009/api/user/5
content-type: application/json

{
"username": "fuaad",
"email": "fufooe@app.com",
"password":"helsdelo"
}

### Delete user

DELETE http://localhost:4009/api/user/6

### Books Api

###Get all Books
GET http://localhost:4009/api/book/

###Get sigle book
GET http://localhost:4009/api/book/1

### Create book

POST http://localhost:4009/api/book/
content-type: application/json

{
"bookTitle":"holla finder minor1 book",
"authorID":3,
"year":2000
}

### Update book

PUT http://localhost:4009/api/book/5
content-type: application/json

{
"bookTitle":"holla finder minor1 book",
"authorID":5,
"year":2000
}

### Delete user

DELETE http://localhost:4009/api/book/6
