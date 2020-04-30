import React from "react";
import FormSearch from "./formSearch";
import Title from "./title/title";

interface Props {

}

class DashBoard extends React.Component<Props, any>{
    constructor(props: Props) {
        super(props);
    }

    render(): React.ReactNode {
        return (
            <div>
                <div style={{marginBottom: '2rem'}}>
                    <Title />
                </div>
                <div>
                    <FormSearch />
                </div>
            </div>
        );
    }
}

export default DashBoard