Feature: End to End Ecommerce validation

  app Regression
  Scenario: Ecommerce products delivery
    Given I open EcommercePage
    When I add items to Cart
    And Validate the total prices
    Then Select the country submit and verify Thank you message