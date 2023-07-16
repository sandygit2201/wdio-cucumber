Feature: Multiple windows
   @multipleWindows
    Scenario: Handle multiple windows
        Given I am on the "windows" page
        And switch to new window
        And switch to parent window
        And create new and Swith to that window