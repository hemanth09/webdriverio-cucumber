Feature: Find a mortgage rate
  As a new customer
  I want to find the mortgage rates available
  So that I can decide whether to switch my mortgage to Nationwide

  @mortgageFinder
  Scenario: Find mortgage rates
    Given I open the url "https://www.nationwide.co.uk"
    And I click on Mortgages
    And I click on New Mortgage Customer First time buyers
    And I click on our Mortgage Rates
    And Do you have a Nationwide mortgage I select No
    And What type of mortgage are you looking for I select “I’m changing lender”
    And I set property value to "300000"
    And I set deposit amount to "150,000"
    And I set mortgage term to "30"
    When I click "Find a mortgage rate" button
    Then I see the filters and search results populated
    When I apply filters of Mortgage type to “Fixed rate”
    And I apply filters of Product fee to “With Fee”
    Then I see the filters and search results updated
    And I verify the results with below following rates available
    |2yrsFixed     |2             |£502.70       |1.29%        |£999        |3.8% APRC    |£12,064.80 |
    |3yrsFixed     |3             |£520.56       |1.54%        |£999        |3.5% APRC    |£18,740.16 |
    |5yrsFixed     |5             |£520.56       |1.54%        |£999        |3.2% APRC    |£31,233.60 |
    |10yrsFixed    |10            |£580.27       |2.34%        |£999        |2.8% APRC    |£69,632.40	|
    When I click and apply for the "5 yr Fixed " product
    Then I should be directed to the "Start your Remortgage application"
