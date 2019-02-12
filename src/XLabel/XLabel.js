import React              from "react";
import { Component }      from "react";
import PropTypes          from "prop-types";
import { select }         from "d3-selection";
import { ScalesConsumer } from "../Context/";

class XLabel extends Component{
    static contextType = ScalesConsumer;

    static propTypes = {
        x_lab: PropTypes.string,
        y_lab: PropTypes.string
    }

    addXLabel(){
        const { dimensions, aes } = this.context;
        const x_lab               = this.props.x_lab || aes[0];

        // remove old text nodes before updating
        if(this.node.children.length > 0)
            select(this.node).selectAll("text").remove();

        select(this.node)
            .append("text")
            .attr("x", (dimensions.width/2))
            .attr("y", (dimensions.padding/2))
            .text(x_lab);
    }

    render(){
        const { dimensions } = this.context;

        return(
            <svg
                width={ dimensions.width }
                height={ dimensions.height*0.1 }
                ref={ node => this.node = node }
                style={{ gridColumn: "2" }}
            >
                <text></text>
            </svg>
        );
    }

    componentDidMount(){
        this.addXLabel();
    }

    componentDidUpdate(){
        this.addXLabel();
    }
}


export default XLabel;
