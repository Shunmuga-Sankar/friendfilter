import React from "react";

class ChildClass extends React.Component {

    childMethod = () => {
        this.props.tempMethod();
    }

    render() {
        return (
            <>
                <div>Its child class</div>
                <button onClick={this.childMethod}>Call parent method</button>
            </>
        )
    }
}

export default ChildClass;