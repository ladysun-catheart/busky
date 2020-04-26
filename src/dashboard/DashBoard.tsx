import React from "react";
import FormSearch from "./formSearch";

interface Props {

}

class DashBoard extends React.Component<Props, any>{
    constructor(props: Props) {
        super(props);
    }

    render(): React.ReactNode {
        return (
            <div>
                <FormSearch />
            </div>
        );
    }
}

export default DashBoard