Feature: Division
        user wants to be told the quotient of two numbers


Scenario Outline: Divide two numbers
    Given User has entered <input_1> into the calculator
    And User has entered <input_2> into the calculator
    When User presses <button>
    Then the result should be <output> on the screen

    Examples:
    | input_1 | input_2 | button | output |
    | 20      | 10      | div    | 2      |
    | 6       | 2       | div    | 3      |
   
