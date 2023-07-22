Feature: alert windows

  @dev @stage @sanity @prod
    Scenario: Handle js alert windows
        Given I am on the "javascript_alerts" page
        Then Handle js alert
  
   @prod
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
