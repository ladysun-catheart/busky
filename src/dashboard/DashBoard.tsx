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
                <h1 style={{
                    padding: '.5rem 1rem',
                    margin: '0',
                    fontSize: '3rem',
                    fontFamily: 'Arial, Helvetica, sans-serif',
                    backgroundColor: 'antiquewhite',
                    borderRadius: '0 0 4rem 0',
                    marginBottom: '2rem'
                }}>Busky</h1>
                <FormSearch />
            </div>
        );
    }
}

export default DashBoard