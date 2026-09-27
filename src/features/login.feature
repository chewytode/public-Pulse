Feature: Login
  As a registered user
  I want to log in to Automation Exercise
  So that I can access my account

  Background:
    Given I am on the login page

  @smoke1
  Scenario: Successful login with valid credentials
    When I log in with valid credentials
    Then I should see "Logged in as" in the header

  Scenario: Login fails with an incorrect password
    When I log in with an incorrect password
    Then I should see the login error message
