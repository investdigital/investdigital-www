import React,{ Component } from 'react';

import Product from './product';
import  Banner from './banner';
import Technology from './technology';
import Ourteams from "./ourteams";
import Circuit from './circuit'
import Consultant from './consultant'
import {getLocalValue} from '../common/language';

class Home extends Component{
    componentDidMount() {
        this.node.scrollIntoView();
    }
    render(){
        return(
            <section id="about-section" className="g-bg-secondary g-pos-rel" ref={node => this.node = node}>
                <Banner/>
                <Product/>
                <Technology/>
                <Circuit/>
                <Ourteams/>
                <Consultant/>
            </section>
        )
    }
}
export default  Home;