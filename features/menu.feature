Feature: Menu scenarios
  Background:
    Given I allow permissions

  Scenario: Adding store
    When I add store
    Then I see the name of shop

  Scenario: Deleting store
    When I delete store
    Then I'm notified, that no shop is selected