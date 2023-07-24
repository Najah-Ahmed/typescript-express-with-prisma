# Nodejs Express with Typescript with Prisma as ORM

## Install

###### packages

`npm install -D @prisma/client
    concurrently
    dotenv
    rimraf
  `

`npm install  @prisma/client
    @types/express
    @types/node
    express
    prisma
  `

###### package.json Script

`"scripts": {
    "build": "rimraf dist && npx tsc",
    "dev": "concurrently \"npx tsc -w\" \" nodemon dist/app.js\" "
  },`

###### Commands

`npx tsc --init `

then make change disk
`"outDir": "./dist",`

` 
npx prisma init`
`
npx prisma migrate dev --name init`
