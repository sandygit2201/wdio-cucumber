@user
Feature: Register user
    Scenario: Register new user
        Given open login page
        Given Add test story 'user registration'
        Then Fill random User Name and Email and move to next page
        Then Fill Account information
            | title    | mrs      |
            | dobDate  | 30       |
            | password | abcd1234 |
            | dobMonth | May      |
            | dobYear  | 2019     |
        Then Fill Address information
            | firstName | aaa       |
            | lastName  | bbcc      |
            | address1  | 1-1-1-1-1 |
            | county    | Canada    |
            | state     | state1    |
            | city      | city1     |
            | zipcode   | 1234      |
            | mobile    | 88999     |
        Then Create Account


    Scenario: retrive user credentials
        Given login with user credentials 
        



