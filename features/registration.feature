Feature: Registration scenarios
  Background:
    Given I allow permissions

  Scenario: Registration with incorrect phone
    When I try to register with incorrect phone
    Then wrong phone number message is shown

  Scenario: Registration with incorrect email
    When I try to register with incorrect email
    Then registration is not possible

  Scenario: Registration with week password
    When I try to register with week password
    Then registration is not possible

  Scenario: Registration with empty creds
    When I try to register with empty creds
    Then registration is not possible
