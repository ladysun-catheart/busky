import React from "react";
import { SmartInput } from "../core/components";

interface Props {

}

class DashBoard extends React.Component<Props, any>{
    constructor(props: Props) {
        super(props);
    }

    render(): React.ReactNode {
        return <div><SmartInput/></div>;
    }
}

export default DashBoard