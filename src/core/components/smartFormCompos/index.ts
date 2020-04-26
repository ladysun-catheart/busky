import factory from "./factory";
import Label from "./label";
import Input from "./Input";

const SmartInput = factory(Label, Input)

export {
    SmartInput
}