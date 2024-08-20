# Mini-Peer-Fives

## The Problem Statement

Mini Peerfives allows users to reward other people with peerfives (P5) points.


### Steps after cloning the repo

- `cd src`
- Add .env file in the "src" directory
- Add MongoDB connection string with variable name "DATABASE_URL"
- `npm i`
- `npx prisma generate` 
- `npm start`

### Completed

#### Backend

- Entities/Models
    - User
        - ID - string
        - Name - string
    - RewardHistory
        - Datetime stamp
        - Points - number
        -  Given by (User ID) - string
        - Given to (User ID) - string
- REST APIs
    - User - Create, edit
    - P5 (Points given) - Create, read, delete
    - Reward (Points received) - Read


