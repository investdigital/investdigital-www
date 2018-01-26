/**
 * Created by oxchain on 2017/9/4.
 */
import React,{ Component } from 'react';
import {getLocalValue} from '../common/language';
class PrivacyArticle extends Component{
    renderRow(src,index){
        return (
            <div key={index} className={"g-py-20"}>
                <h5 style={{fontWeight:"bold"}}>{src.title}</h5>
                <p className={"g-py-10"}>{src.news}</p>
            </div>
        )
    }
    render(){
        const article = [{
            title : getLocalValue("privacy_article_title1"),
            news : getLocalValue("privacy_article_content1")
        },{
            title : getLocalValue("privacy_article_title2"),
            news : getLocalValue("privacy_article_content2")
        },{
            title : getLocalValue("privacy_article_title3"),
            news : getLocalValue("privacy_article_content3")
        },{
            title : getLocalValue("privacy_article_title4"),
            news : getLocalValue("privacy_article_content4")
        },{
            title : getLocalValue("privacy_article_title5"),
            news : getLocalValue("privacy_article_content5")
        },{
            title : getLocalValue("privacy_article_title6"),
            news : getLocalValue("privacy_article_content6")
        },{
            title : getLocalValue("privacy_article_title7"),
            news : getLocalValue("privacy_article_content7")
        }];
        return(
            <section className="container g-pt-100 g-pb-60">
                <div className="row justify-content-center">
                    <div className="col-lg-8 section-law">
                        <div className="g-mb-60 width-text">
                            {article.map(this.renderRow)}
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default  PrivacyArticle;