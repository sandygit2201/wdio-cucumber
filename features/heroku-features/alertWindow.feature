Feature: alert windows

  
    Scenario: Handle js alert windows
        Given I am on the "javascript_alerts" page
        Then Handle js alert
  
    Scenario: Handle js promt windows
        Given I am on the "javascript_alerts" page
        Then Handle Confirm alert
    
    
    Scenario: Handle js promt windows
        Given I am on the "javascript_alerts" page
        Then Handle js prompt alert 

    @alert
    Scenario: Handle js promt windows
        Given I am on the "javascript_alerts" page
        Then Handle js prompt alert new    
