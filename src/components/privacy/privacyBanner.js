/**
 * Created by fengxiaoli on 2017/12/28.
 */
import React,{ Component } from 'react';
import {getLocalValue} from '../common/language';
class PrivacyBanner extends Component{
    render(){
        return(
            <section id="privacybanner"  className="g-bg-cover g-bg-size-cover g-bg-white-gradient-opacity-v1--after">
                <div className="container text-center g-pos-rel g-z-index-1 g-pb-50">
                    <div className="row d-flex justify-content-center align-content-end flex-wrap g-min-height-500">
                        <div className="col-lg-10" style={{paddingTop:"200px"}}>
                            <div className="mb-5 text-left">
                                <div className="lawcenter g-color-white">
                                    <div className="g-color-white  text-center privacywidth"  style={{paddingBottom:"10px"}}>{getLocalValue("footer_title3")}</div>
                                </div>
                                <div className="lawcenter  g-mb-30" style={{paddingTop:"10px"}}>
                                    <p className="en-title" style={{color:"white"}}>{getLocalValue("privacy_banner_title1")}</p>
                                </div>
                                <p className="lead g-color-white-opacity-0_6">{getLocalValue("privacy_banner_content1")}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default  PrivacyBanner;
