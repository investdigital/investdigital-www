/**
 * Created by lijun on 2018/1/25.
 */
import React,{ Component } from 'react';
import PrivacyBanner from './privacyBanner';
import PrivacyArticle from './privacyArticle';
class Privacy extends Component{
    componentDidMount() {
        this.node.scrollIntoView();
    }
    render(){
        return(
            <section id="about-section" className="g-bg-secondary g-pos-rel law-container" ref={node => this.node = node}>
                <PrivacyBanner/>
                <PrivacyArticle/>
            </section>
        )
    }
}
export default  Privacy;