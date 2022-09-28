Feature: Addition
        user wants to be told the sum of two numbers


Scenario Outline: Add two numbers
    Given User has entered <input_1> into the calculator
    And User has entered <input_2> into the calculator
    When User press <button>
    Then the result should be <output> on the screen

    Examples:
    | input_1 | input_2 | button | output |
    | 20      | 30      | add    | 50     |
    | 2       | 5       | add    | 7      |
    | 0       | 40      | add    | 40     |
