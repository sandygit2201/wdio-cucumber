Feature: multiple elements
    Scenario: verify multiple elements
        Given I am on the "add_remove_elements/" page
        Then Add an element
        Then Add an element
        Then Add an element
        Then Add an element
        Then Pause for 5 sec
        Then Delete all elements
        Then Pause for 5 sec