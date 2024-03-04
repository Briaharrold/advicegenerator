## Unions 
What is a Union?
    Unions allow you to declare a variable that could be more than one type or more than one value
    Example:let myVariable: string | boolean;
            let myString: "Isaiah"| "Jessie";

## Generics
What are Generics
        Generics provide variables to types. When declaring a string array you can use string[],
        but if you wanted to use the build in array interface array<> you can insert it's type 
        between the alligators Array<string>

        We will be using Generics for built in functions and types, such as the useState<> and it's type SetActionState<>
        Examp: let [name, setName] = useState<string>("")

        You can also use Generics like perameters when creating interfaces
        Example: interface IStuff<Generic>{stuff: <Generic>}
