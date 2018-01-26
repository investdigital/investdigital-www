/**
 * Created by fengxiaoli on 2017/12/28.
 */
import React,{ Component } from 'react';
import Lawbanner from './lawbanner';
import Article from './article';
class Law extends Component{
    componentDidMount() {
        this.node.scrollIntoView();
    }
    render(){
        return(
            <section id="about-section" className="g-bg-secondary g-pos-rel law-container" ref={node => this.node = node}>
                <Lawbanner/>
                <Article/>
            </section>
        )
    }
}
export default  Law;