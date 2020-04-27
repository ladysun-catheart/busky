import factory, {HocFactoryProps} from "./factory";
import Label from "./label";
import Input from "./Input";
import React from "react";

const SmartInput: React.FC<HocFactoryProps> = factory(Label, Input)

export {
    SmartInput
}