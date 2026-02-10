# mycalorietracker
Dashboard for a calorie tracking website. Primarily designed as a small project to learn Docker, Node.js and GitHub actions.

<p align=center>
  <img width="790.8" height="593.4" src="https://github.com/user-attachments/assets/32f3858a-09a1-43ae-b9bc-9facbdc5131c" />
</p>

## Features
- Frontend that interacts with an API to load data
- Database for persistent data storage
- Clean and responsive user interface
- Fully containerised using Docker
- Automated creation of new Docker images using GitHub actions

## Setup
1. Ensure you have [docker installed](https://www.docker.com/get-started/).
2. Download [compose.yaml](https://github.com/calorietools/mycalorietracker/blob/20a36f263d84fe137d106ec8684e1bcb47566bc4/compose.yaml) from this repo.
3. Run the ```docker compose up``` command in the same directory as the compose file.

You should now be able to access the website on port 80. By default the API runs on port 8100 and the database on 5432.

## API Reference
### /api/v1/caloriestats
Type: GET <br/>
Description: retrieve the total number of calories consumed and burnt. <br/>
Inputs: 

| Parameter | Purpose | Type | Example |
| ------------- | ------------- | ------------- | ------------- |
| id  | Specify the user id to load data for  | Integer  | 1234567  |
| date  | Specify the date to get calorie stats for  | String  | "2025-06-15"  |

Sample Output:
```
[
  {"totalfoodcalorie":"532"},
  {"totalexercisecalorie":"1248"},
  {"caloriegoal":2500}
]
```
### /api/v1/food
Type: GET <br/>
Description: retrieve all the foods consumed by a user on the specified day. <br/>
Inputs: 

| Parameter | Purpose | Type | Example |
| ------------- | ------------- | ------------- | ------------- |
| id  | Specify the user id to load data for  | Integer  | 1234567  |
| date  | Specify the date to get food list for  | String  | "2025-06-15"  |

Sample Output:
```
[
  {"id":1,"foodtype":"breakfast","foodname":"food 1","caloriecount":120,"userid":57981,"diarydate":"2025-12-14T00:00:00.000Z"},
  {"id":2,"foodtype":"breakfast","foodname":"food 2","caloriecount":73,"userid":57981,"diarydate":"2025-12-14T00:00:00.000Z"},
  {"id":3,"foodtype":"lunch","foodname":"food 3","caloriecount":75,"userid":57981,"diarydate":"2025-12-14T00:00:00.000Z"},
  {"id":4,"foodtype":"lunch","foodname":"food 4","caloriecount":98,"userid":57981,"diarydate":"2025-12-14T00:00:00.000Z"},
  {"id":5,"foodtype":"dinner","foodname":"food 5","caloriecount":166,"userid":57981,"diarydate":"2025-12-14T00:00:00.000Z"}
]
```

### /api/v1/exercise
Type: GET <br/>
Description: retrieve all the exercises carried out by a user on the specified day. <br/>
Inputs: 

| Parameter | Purpose | Type | Example |
| ------------- | ------------- | ------------- | ------------- |
| id  | Specify the user id to load data for  | Integer  | 1234567  |
| date  | Specify the date to get exercise list for  | String  | "2025-06-15"  |

Sample Output:
```
[
  {"id":1,"exercisetype":"directions_walk","exercisename":"Walk 1","caloriecount":265,"userid":57981,"diarydate":"2025-12-14T00:00:00.000Z"},
  {"id":2,"exercisetype":"hiking","exercisename":"Hike 2","caloriecount":587,"userid":57981,"diarydate":"2025-12-14T00:00:00.000Z"},
  {"id":3,"exercisetype":"pool","exercisename":"Swim 3","caloriecount":396,"userid":57981,"diarydate":"2025-12-14T00:00:00.000Z"}
]
```

### /api/v1/profile
Type: GET <br/>
Description: retrieve profile information for a particular user. <br/>
Inputs: 

| Parameter | Purpose | Type | Example |
| ------------- | ------------- | ------------- | ------------- |
| id  | Specify the user id to load data for  | Integer  | 1234567  |

Sample Output:
```
[
  {"id":1},
  {"FirstName":"firstname"},
  {"LastName":"lastname"},
  {"Email":"email@example.com"},
  {"Age":56},
  {"UserWeight":45},
  {"CalorieGoal":4500},
]
```

## Credits
- [node-postgres by Brian Carlson](https://github.com/brianc/node-postgres)
- ["Writing a Dockerfile | Docker Docs" by Docker, Inc.](https://docs.docker.com/get-started/docker-concepts/building-images/writing-a-dockerfile/)
- ["Node.js Express.js" by W3 Schools](https://www.w3schools.com/nodejs/nodejs_express.asp)
