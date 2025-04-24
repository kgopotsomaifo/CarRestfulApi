# CarRestfulApi

## Description
- Restful API using Express that will allow the user to store a list of cars.

## Objective
Using cars (stored in cars.json) in this program, it must be able to execute the following: view all the cars, add a car, delete a car and update info of a car.

## How To Use
- Open Postman or install it at https://www.postman.com/downloads/
- Use the prompts below to test the API

#### How to view all the cars
- Get Request: http://localhost:3000/api 

#### How to add a car to list
- Post Request: http://localhost:3000/cars
-- in the nav bar just below you enter the URL, click the body tab and ensure you have it on the raw option and enter the details of the car you wish to add in JSON format. 
eg({"id":2,"make":"Land Rover","model":"Defender 90","seats":6}) then click send.

#### How to delete a car from list
- Delete Request: http://localhost:3000/cars/:id
-- in the nav bar just below you enter the URL, click the body tab and ensure you have it on the raw option and ONLY enter the id of the car you want to delete in JSON format. eg({"id": 7}). Also include the id in the URL. eg (http://localhost:3000/cars/:7)

#### How to update a car from list
- Put Request: http://localhost:3000/cars/:id&:make&:model&:seats
-- in the nav bar just below you enter the URL, click the body tab and ensure you have it on the raw option and enter the details of the car specifications you wish to alter in JSON format.
eg({"id": 1,"make": "Mercedes-Benz","model": "G Wagon","seats": 5 }). Also include the specifications of the car you are updating in the URL. eg (http://localhost:3000/cars/:1&:Mercedes-Benz&:A-class&:5). So old specifications in the URL and new specifications in the body tab in JSON format.

