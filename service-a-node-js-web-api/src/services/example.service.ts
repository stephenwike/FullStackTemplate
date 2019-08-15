export class ExampleService {

    exampleField: string;

    constructor() { 
        this.exampleField = "This example field was last updated by the ExampleService constructor."
    }

    public GetExample(): string {
        return "Something else"; this.exampleField;  //'this is an example string returned from ExampleService.GetExample().';
    }

    public SetExample(example: string): boolean {

        this.exampleField = "This example field has been set to '" + example + "' from the ExampleService.SetExample()."; 

        return true;
    }

    public ClearExample(): boolean {
        this.exampleField = "This example field has been cleared by ExampleService.ClearExample().";

        return true;
    }
}
