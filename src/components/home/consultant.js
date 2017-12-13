/**
 * Created by zhanxiaojing on 2017/12/09.
 */
import React,{ Component }from 'react';
import {ROOT_URL} from '../../actions/types';
import {getLocalValue} from '../common/language';

class Consultant extends Component{
    renderrow(item,index){
        return (
            <div className="col-lg-4 g-px-40 g-mb-50 g-mb-0--lg" key={index}>
                <div className="text-center">
                            <span className="d-inline-block  u-icon-size--xl rounded-circle g-mb-30">
                              <img className="imgborder g-width-110" style={{height:"115px"}} src={item.src} alt=""/>
                            </span>
                    <h3 className="h5 g-color-gray-dark-v2 g-font-weight-600 g-font-size-16 text-uppercase mb-3">{item.name}</h3>
                    <p className="mb-0 text-left g-font-size-12">{item.info}</p>
                </div>
            </div>
        )
    }
    render(){
        const consultantlist = [
            {src:`${ROOT_URL}public/img/OracleChain.png`,name:getLocalValue("ourteam_section1_name"),info:getLocalValue("ourteam_section1_desc")},
            {src:`${ROOT_URL}public/img/Ennan Zhai.png`,name:getLocalValue("ourteam_section2_name"),info:getLocalValue("ourteam_section2_desc")},
            {src:`${ROOT_URL}public/img/chenyu.png`,name:getLocalValue("ourteam_section4_name"),info:getLocalValue("ourteam_section4_desc")}
        ]
        return(
            <section className="g-py-50 g-pb-100">
                <div className="container text-center g-max-width-75" style={{textAlign:'center'}}>
                    <h2 className="g-font-weight-400 nl-home-title g-font-size-24">{getLocalValue("ourteam_title")}</h2>
                    <div className="nl-underline g-mb-15">
                        <span className="nl-style"></span>
                    </div>
                </div>
                <div className="container">
                    <div className="row no-gutters">
                        {consultantlist.map(this.renderrow)}
                    </div>
                </div>
            </section>
        )
    }
}
export default  Consultant;