/**
 * Created by oxchain on 2017/9/4.
 */
import React,{ Component } from 'react';
import {getLocalValue} from '../common/language';
class Article extends Component{
    render(){
        return(
            <section className="container g-pt-100 g-pb-60">
                <div className="row justify-content-center">
                    <div className="col-lg-8 section-law">
                        <div className="g-mb-60 width-text">
                            <h2 className="g-color-black text-center g-mb-30 artile-title">{getLocalValue("law_section_title")}</h2>
                            <p>{getLocalValue("law_section_content1")}</p>
                            <p>{getLocalValue("law_section_content2")}</p>
                            <p>&#x3000;&#x3000;&#x3000;{getLocalValue("law_section_content3")}</p>
                            <p>&#x3000;&#x3000;&#x3000;{getLocalValue("law_section_content4")}</p>
                            <p>&#x3000;&#x3000;&#x3000;{getLocalValue("law_section_content5")}</p>
                            <p>&#x3000;&#x3000;&#x3000;{getLocalValue("law_section_content6")}</p>
                            <p>&#x3000;&#x3000;&#x3000;{getLocalValue("law_section_content7")}</p>
                            <p>&#x3000;&#x3000;&#x3000;{getLocalValue("law_section_content8")}</p>
                            <p>&#x3000;&#x3000;&#x3000;{getLocalValue("law_section_content9")}</p>
                            <p>&#x3000;&#x3000;&#x3000;{getLocalValue("law_section_content10")}</p>
                            <p>&#x3000;&#x3000;&#x3000;{getLocalValue("law_section_content11")}</p>
                            <p>&#x3000;&#x3000;&#x3000;{getLocalValue("law_section_content12")}</p>
                            <p>&#x3000;&#x3000;&#x3000;{getLocalValue("law_section_content13")}</p>
                        </div>
                    </div>
                </div>

                <div className="row justify-content-center" style={{marginTop:'4rem'}}>
                    <div className="col-lg-8 section-law">
                        <div className="g-mb-60 width-text">
                            <h2 className="g-color-black text-center g-mb-30 artile-title">{getLocalValue("risk_section_title")}</h2>
                            <p>{getLocalValue("risk_section_abstract")}</p>
                            <p>&#x3000;&#x3000;&#x3000; {getLocalValue("risk_section_title1")}</p>
                            <p> {getLocalValue("risk_section_content1")}</p>
                            <p> &#x3000;&#x3000;&#x3000; {getLocalValue("risk_section_title2")}</p>
                            <p> {getLocalValue("risk_section_content2")}</p>
                            <p> &#x3000;&#x3000;&#x3000; {getLocalValue("risk_section_title3")}</p>
                            <p> {getLocalValue("risk_section_content3")}</p>
                            <p>&#x3000;&#x3000;&#x3000; {getLocalValue("risk_section_title4")}</p>
                            <p> {getLocalValue("risk_section_content4")}</p>
                            <p> &#x3000;&#x3000;&#x3000; {getLocalValue("risk_section_title5")}</p>
                            <p> {getLocalValue("risk_section_content5")}</p>
                            <p> &#x3000;&#x3000;&#x3000; {getLocalValue("risk_section_title6")}</p>
                            <p> {getLocalValue("risk_section_content6")}</p>
                            <p> &#x3000;&#x3000;&#x3000; {getLocalValue("risk_section_title7")}</p>
                            <p> {getLocalValue("risk_section_content7")}</p>
                            <p> &#x3000;&#x3000;&#x3000; {getLocalValue("risk_section_title8")}</p>
                            <p> {getLocalValue("risk_section_content8")}</p>
                            <p> &#x3000;&#x3000;&#x3000; {getLocalValue("risk_section_title9")}</p>
                            <p> {getLocalValue("risk_section_content9")}</p>
                            <p> &#x3000;&#x3000;&#x3000; {getLocalValue("risk_section_title10")}</p>
                            <p> {getLocalValue("risk_section_content10")}</p>
                            <p> &#x3000;&#x3000;&#x3000; {getLocalValue("risk_section_title11")}</p>
                            <p> {getLocalValue("risk_section_content11")}</p>
                            <p> &#x3000;&#x3000;&#x3000; {getLocalValue("risk_section_title12")}</p>
                            <p> {getLocalValue("risk_section_content12")}</p>

                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default  Article;