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
    And I set property value to “300000”
    And I set deposit amount to “150,000”
    And I set mortgage term to “30”
    When I click "Find a mortgage rate" button
    Then I apply filter Mortgage type to “Fixed rate”
