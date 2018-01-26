/**
 * Created by zhanxiaojing on 2017/12/27.
 */
import React,{ Component }from 'react';
import {getLocalValue} from '../common/language';

class CrowdFunding extends Component{
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        const $ = window.$;
        // initialization of HSScrollNav
        $.HSCore.components.HSScrollNav.init($('#js-scroll-nav'), {
            duration: 700,
            easing: 'easeOutExpo'
        });
    }

    showBannerNotice() {
        let bannerNoticeBtn = document.getElementById("bannerNoticeBtn");
        bannerNoticeBtn.click();
    }

    render(){

        return(
            <section id="crowd-funding" className="crowd-funding g-pt-100 g-pb-70">
                <div className="container text-center g-max-width-75" style={{textAlign:'center'}}>
                    <h2 className="g-font-weight-400 nl-home-title g-font-size-24 g-color-white">{getLocalValue("crowd_funding_title")}</h2>
                    <div className="nl-underline g-mb-15">
                        <span className="nl-style"></span>
                    </div>
                    <div className="g-color-white text-center g-font-size-12 g-mb-20" style={{maxWidth:"890px",margin:"auto"}}>{getLocalValue("crowd_funding_title_tip")}</div>
                </div>

                <div className="container">
                    <div className="row g-font-weight-400" >
                        <div className="col-sm-12">
                            <div className="crowd-section1">
                                <div className="crowd-section2 g-color-white clearfix g-font-size-14">
                                    <div className="col-md-6 float-left">
                                        <div>{getLocalValue("crowd_funding_section1_name1")}{getLocalValue("crowd_funding_section1_item1")}</div>
                                        <div>{getLocalValue("crowd_funding_section1_name2")}{getLocalValue("crowd_funding_section1_item2")}</div>
                                        <div>{getLocalValue("crowd_funding_section1_name3")}{getLocalValue("crowd_funding_section1_item3")}</div>
                                        <div>{getLocalValue("crowd_funding_section1_name4")}{getLocalValue("crowd_funding_section1_item4")}</div>
                                    </div>
                                    <div className="col-md-6 float-left">
                                        <div>{getLocalValue("crowd_funding_section1_name5")}{getLocalValue("crowd_funding_section1_item5")}</div>
                                        <div>{getLocalValue("crowd_funding_section1_name6")}{getLocalValue("crowd_funding_section1_item6")}</div>
                                        <div>{getLocalValue("crowd_funding_section1_name7")}{getLocalValue("crowd_funding_section1_item7")}</div>
                                        <div>{getLocalValue("crowd_funding_section1_name8")}{getLocalValue("crowd_funding_section1_item8")}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 g-color-white g-my-50 text-center">
                            <div className="crowd-desc">
                                {getLocalValue("crowd_funding_desc")}
                            </div>
                            <button className="crowd-btn" onClick={this.showBannerNotice.bind(this)}>{getLocalValue("crowd_funding_btn")}</button>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default CrowdFunding;