/**
 * Created by fengxiaoli on 2017/12/28.
 */
import React,{ Component } from 'react';
import {getLocalValue} from '../common/language';
class Lawbanner extends Component{
    render(){
        return(
            <section id="lawbanner"  className="g-bg-cover g-bg-size-cover g-bg-white-gradient-opacity-v1--after">
                <div className="container text-center g-pos-rel g-z-index-1 g-pb-50">
                    <div className="row d-flex justify-content-center align-content-end flex-wrap g-min-height-500">
                        <div className="col-lg-10 mt-auto">
                            <div className="mb-5 text-left">
                                <div className="lawcenter g-color-white">
                                    <div className="g-color-white  text-center g-law-width">{getLocalValue("law_structure_title1")}</div>
                                </div>
                                <div className="lawcenter  g-mb-30">
                                    <p className="en-title">{getLocalValue("law_structure_title2")}</p>
                                </div>
                                <p className="lead g-color-white-opacity-0_6">{getLocalValue("law_structure_content1")}</p>
                                <p className="lead g-color-white-opacity-0_6">{getLocalValue("law_structure_content2")}</p>
                                <p className="lead g-color-white-opacity-0_6">{getLocalValue("law_structure_content3")}</p>
                                <p className="lead g-color-white-opacity-0_6">{getLocalValue("law_structure_content4")}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default  Lawbanner;
