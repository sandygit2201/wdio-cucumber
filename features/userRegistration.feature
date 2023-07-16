Feature: Register user

    @user
    Scenario: Register new user
        Given open login page
        Then Fill User Name and Email
            | name  | abbccc           | 
            | email | abbccc@gmail.com |
            # name[0][0]  value[0][1]
            # email[1][0] value[1][1]
        # Then Fill Account information
        #     #  |title| mrs|
        #     | password | abcd1234 |
        # #  |dob-date| 30|
        # #  |dob-month| May|
        # #  |dob-year| 2019|
        # Then Fill Address information
        #     | firstName | aaa       |
        #     | lastName  | bbcc      |
        #     | address1  | 1-1-1-1-1 |
        #     | county    | Canada    |
        #     | state     | state1    |
        #     | city      | city1     |
        #     | zipcode   | 1234      |
        #     | mobile    | 88999     |
        # Then Create Account
