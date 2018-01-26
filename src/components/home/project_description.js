/**
 * Created by zhanxiaojing on 2017/12/27.
 */
import React,{ Component }from 'react';
import {connect} from 'react-redux';
import {ROOT_URL} from '../../actions/types';
import {getLocalValue} from '../common/language';

class ProjectDescription extends Component{
    rendeDescription(item,index){
        return (
            <div className="card g-brd-none rounded-0 g-mb-15" key={index}>
                <div id={`accordion-11-heading-0${index+1}`} className="u-accordion__header g-pa-0" role="tab">
                    <h5 className="mb-0">
                        <a className="d-block g-color-main g-text-underline--none--hover g-brd-around g-brd-gray-light-v4 g-rounded-5 g-pa-10-15" href={`#accordion-11-body-0${index+1}`} data-toggle="collapse" data-parent="#accordion-11" aria-expanded={`${index+1 ==1 ? "true" :''}`} aria-controls={`accordion-11-body-0${index+1}`}>
                            <span className="u-accordion__control-icon g-mr-10">
                              <i className="fa fa-angle-down"></i>
                              <i className="fa fa-angle-up"></i>
                            </span>{item.title}
                        </a>
                    </h5>
                </div>
                <div id={`accordion-11-body-0${index+1}`} className={`collapse ${index+1 ==1 ? "show" :''}`} role="tabpanel" aria-labelledby="accordion-11-heading-01" >
                    <div className="u-accordion__body g-color-gray-dark-v5">
                        {item.content}
                    </div>
                </div>
            </div>
        )
    }
    rendeDescription2(item,index){
        return (
            <div className="card g-brd-none rounded-0 g-mb-15" key={index}>
                <div id={`accordion-12-heading-0${index+1}`} className="u-accordion__header g-pa-0" role="tab">
                    <h5 className="mb-0">
                        <a className="d-block g-color-main g-text-underline--none--hover g-brd-around g-brd-gray-light-v4 g-rounded-5 g-pa-10-15" href={`#accordion-12-body-0${index+1}`} data-toggle="collapse" data-parent="#accordion-12" aria-expanded={`${index+1 ==1 ? "true" :''}`} aria-controls={`accordion-12-body-0${index+1}`}>
                            <span className="u-accordion__control-icon g-mr-10">
                              <i className="fa fa-angle-down"></i>
                              <i className="fa fa-angle-up"></i>
                            </span>
                            {item.title}
                        </a>
                    </h5>
                </div>
                <div id={`accordion-12-body-0${index+1}`} className={`collapse ${index+1 ==1 ? "show" :''}`} role="tabpanel" aria-labelledby="accordion-12-heading-01" >
                    <div className="u-accordion__body g-color-gray-dark-v5">
                        {item.content}
                    </div>
                </div>
            </div>
        )
    }
    render(){
        const descriptionItem = [], descriptionItem2 = [];
        for (let i = 1; i <=3; i++) {
            descriptionItem.push(
                {title:getLocalValue("description_section" + i + "_title"),
                    content:getLocalValue("description_section" + i + "_content")})
        }
        for (let i = 4; i <=6; i++) {
            descriptionItem2.push(
                {title:getLocalValue("description_section" + i + "_title"),
                    content:getLocalValue("description_section" + i + "_content")})
        }
        return(
            <div className="container g-pt-100 g-pb-70">
                <div className="navbar-nav g-font-weight-600 ml-auto">
                    <div className="" style={{textAlign: 'center'}}>
                        <h2 className="g-font-weight-400 g-font-size-24">{getLocalValue("description_title")}</h2>
                        <div className="nl-underline g-mb-30">
                            <span className="nl-style"></span>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <section className="g-py-30">
                            <div id="shortcode11">
                                <div className="shortcode-html">
                                    <div id="accordion-11" className="u-accordion u-accordion-bg-primary u-accordion-color-white" role="tablist" aria-multiselectable="true">
                                        {descriptionItem.map(this.rendeDescription)}
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                    <div className="col-md-6">
                        <section className="g-py-30">
                            <div id="shortcode12">
                                <div className="shortcode-html">
                                    <div id="accordion-12" className="u-accordion u-accordion-color-primary" role="tablist" aria-multiselectable="true">
                                        {descriptionItem2.map(this.rendeDescription2)}
                                    </div>
                                </div>
                            </div>

                        </section>

                    </div>
                </div>
            </div>


        )
    }
}
export default  ProjectDescription;