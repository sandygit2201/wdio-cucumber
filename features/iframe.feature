
 @heroku
Feature: working with iframes

    @heroku @iframe
    Scenario: working with iframe
        Given I am on the "iframe" page
        Then Type Text in iframe
    @heroku @smoke 
    Scenario: nested iframe
        Given I am on the "nested_frames" page
        Then Get text from middle iframe
    @exclude @regression
    Scenario: Get data from nested iframe on the bottm on internet heroku exmaple
        Given I am on the "nested_frames" page
        Then Get text from right iframe


