Feature: Multpilication
        user wants to be told the product of two numbers


Scenario Outline: Multiply two numbers
    Given User has entered <input_1> into the calculator
    And User has entered <input_2> into the calculator
    When User presses <button>
    Then the result should be <output> on the screen

    Examples:
    | input_1 | input_2 | button | output |
    | 20      | 10      | mul    | 200    |
    | 12      | 5       | mul    | 84     |
   
