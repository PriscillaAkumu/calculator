Feature: Subtraction
        user wants to be told the difference of two numbers


Scenario Outline: Subtract two numbers
    Given User has entered <input_1> into the calculator
    And User has entered <input_2> into the calculator
    When User press <button>
    Then the result should be <output> on the screen

    Examples:
    | input_1 | input_2 | button | output |
    | 20      | 10      | sub    | 10     |
    | 12      | 5       | sub    | 7      |
   
