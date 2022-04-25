# Functional-NestJS
Functional Programming with NestJS, Prisma.  
immutable, pure, stateless.

## 1. Introduction
A production ready typescript backend repository utilized those libraries:
- [NestJS](https://nestjs.com) : A progressive Node.js framework
- [Prisma](https://www.prisma.io/) :  Next-generation Node.js and TypeScript ORM
- [eslint-plugin-functional](https://github.com/jonaskello/eslint-plugin-functional) disable mutation and promote functional programming lint.

## 2. Curriculum
### 2.1 Goal
- Developing a production-ready API with NestJS + Prisma.
- Learning functional-programming with Typescript.

## 3. Contents
|index  | Name                                    | start-branch                                                                                             |complete-branch
|-------|-----------------------------------------|----------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------
|0      |Setup and integraion Prisma with nestJS  |[start/integration-prisma](https://github.com/ltnscp9028/functional-nestjs/tree/start/integration/prisma) |[integration-prisma](https://github.com/ltnscp9028/functional-nestjs/tree/integration/prisma) 
|1      |REST API with type-safe validator        |[start/crud-APi](https://github.com/ltnscp9028/functional-nestjs/tree/start/crudAPI)                      |[crud-API](https://github.com/ltnscp9028/functional-nestjs/tree/crudAPI)
|2      |Handling Prisma Exception                |@TODO                                                                                                     |@TODO
|3      |Authorization                            |@TODO                                                                                                     |@TODO
|4      |Relation Data Structure                  |@TODO                                                                                                     |@TODO
|5      |Use functional in API                    |@TODO                                                                                                     |@TODO
|6      |Use functional in conditional type       |@TODO                                                                                                     |@TODO
|INF    |More Contents.                           |@TODO                                                                                                     |@TODO

* * *
### 3.1. Setup and integraion Prisma with nestJS
- 1. Initialize prisma
- 2. First prisma migration
- 3. Implement prisma service
- 4. Use prisma for /users api
- 5. Implement explicit prisma connect

### 3.2 REST API with type-safe validator
- 1. Implement user.validator
- 2. Implement: createUser
- 3. Implement: getOneUser
- 4. Implement: updateUser
- 5. Implement: deleteUser
- 6. Implement: transform string to number use globalPipe