// In TypeScript, an enum, short for "enumeration," is a way to define a named set of constant values. Enums make it easier to work with sets of related values and provide a meaningful way to represent data.
enum Direction{
    up,down,left,right,
}
// by default up=0,down=1,left=2,right=3
let playerdirection: Direction = Direction.down;

// enum with assigned values
enum Color{
    red ="#FFOOOO",
    green ="#OOFFOO",
    blue = "#OOOOFF"
}
let backgrounndColor: Color.red;

/*
Advantages:
Readability: Enums provide a descriptive way to represent constant values, improving code readability.

Intellisense Support: IDEs can provide autocompletion and suggestions based on enum values, enhancing development efficiency.

Disadvantages:
Global Scope: Enums introduce values into the global scope, potentially leading to naming conflicts.

Numeric Enums: If not used carefully, numeric enums may result in unexpected behavior due to implicit conversions.

Where to Use:
Named Constants: When dealing with a set of related named constants, such as directions, colors, or status codes.

Improving Code Clarity: Enums can make code more self-documenting by providing meaningful names for values.

Where Not to Use:
Dynamic Values: If the set of values is dynamic or needs to be determined at runtime, enums may not be suitable.

Large Sets of Values: For large sets of values, consider whether an enum is the most appropriate choice, as it introduces all values into the global scope.
*/