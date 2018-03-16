import React,{ Component } from 'react';

import Product from './product';
// import  Banner from './banner';
import  BannerNew from './banner_new';
import Technology from './technology';
import New from './new';
import Ourteams from "./ourteams";
import Circuit from './circuit';
import Consultant from './consultant';
import Investor from './investor';
import Cornerstone from './cornerstone';
import VideoBottom from './videoBottom';
import Banner from './banner';
import Video from './video';
import Tendency from './tendency';
import MarketRequirement from './market_requirement';
import Goal from './goal';
import Partner from './partner';
import ProjectDescription from './project_description';
import CrowdFunding from './crowd_funding';
import {getLocalValue} from '../common/language';

class Home extends Component{
    constructor(props) {
        super(props);
        this.state = {
            flag:true
        };
    }
    componentDidMount() {
        this.node.scrollIntoView();
        var userAgentInfo = navigator.userAgent;
        var Agents = ["Android", "iPhone",
            "SymbianOS", "Windows Phone",
            "iPad", "iPod"];
        for (var v = 0; v < Agents.length; v++) {
            if (userAgentInfo.indexOf(Agents[v]) > 0) {
               this.setState({
                   flag:false
               })
            }
        }
    }
    render(){
        return(
            <section id="about-section" className="g-bg-secondary g-pos-rel" ref={node => this.node = node}>
                {this.state.flag ?  <BannerNew/> : <Banner/>}
                <Tendency/>
                <MarketRequirement/>
                <Goal/>
                <Product/>
                <Technology/>
                <Video/>
                <VideoBottom/>
                <Investor/>
                <Cornerstone />
                <Partner/>
                {/*<CrowdFunding/>*/}
                {/*<ProjectDescription/>*/}
                <New/>
                <Circuit/>
                <Ourteams/>
                <Consultant/>
            </section>
        )
    }
}
export default  Home;
