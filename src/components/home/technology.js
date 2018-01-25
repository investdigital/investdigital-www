/**
 * Created by zhanxiaojing on 2017/12/09.
 */
import React,{ Component }from 'react';
import {ROOT_URL} from '../../actions/types';
import {getLocalValue} from '../common/language';
import LazyLoad from 'react-lazy-load';
class Technology extends Component{
    renderrow(item,index){
        return (
            <div className="col-sm-6 col-lg-3 application-item" key={index}>
                <article className="u-block-hover">
                    <figure className="g-overflow-hidden">
                        <LazyLoad height={"100%"} width={"100%"}>
                            <img className="img-fluid u-block-hover__main--zoom-v1" src={item.src} alt=""/>
                        </LazyLoad>
                    </figure>
                    <div className=" g-pa-20">
                        <h3 className="text-uppercase g-font-weight-700 g-font-size-14 text-center">{item.title}</h3>
                        <span className="g-font-size-12">{item.title2}</span>
                        <div className="nl-underline-sm g-mb-15" style={{lineHeight:"0"}}>
                            <span className="nl-style-sm"></span>
                        </div>
                        <p className="g-font-size-default g-font-size-12 mb-0 text-left"><i className="fa fa-circle nl-fa"></i> {item.p1}</p>
                    </div>
                </article>
            </div>
        )
    }
    render(){
        const listinfo = [
            /*{src:`${ROOT_URL}public/img/technology2.png`,title:"预言机服务——可信", title2:"首个EOS预言机服务的可信资产管理", p1:"InvestDigital致力于打造可信资管平台，也成为了EOS预言机服务的首个真实落地场景。InvestDigital通过EOS预言机机制实现链外业务流程和链内智能合约的结合，保障了资产管理数据的真实性和不可篡改以及交易过程可追溯"},
            {src:`${ROOT_URL}public/img/technology3.png`,title:"形式化验证——安全", title2:"首个采用形式化验证技术的投资平台", p1:"InvestDigital将使用形式化验证技术去检测和避免智能合约可能存在的漏洞。利用模型检测和定理证明等形式化验证技术手段，保证InvestDigital智能合约代码的正确性和安全性，最大程度上减少智能合约遭受攻击的可能性，保障投资人的资金安全。"},
            {src:`${ROOT_URL}public/img/technology4.png`,title:"匿名声誉评价——公平", title2:"首个支持匿名特性的声誉评价机制 ", p1:"InvestDigital通过声誉机制实现带有奖励和惩罚的激励来维护社区的良好环境。声誉系统的一大优势是基于可验证洗牌和关联环签名技术，在不泄露用户真实身份的前提下，完成匿名的声誉计算，提升用户的参与程度和忠诚度。" },*/
        ]
        for (let i = 2; i <=4; i++) {
            listinfo.push({src:`${ROOT_URL}/public/img/technology${i}.png`,
                title:getLocalValue("technology_section" + i + "_title"),
                title2:getLocalValue("technology_section" + i + "_desc"),
                p1:getLocalValue("technology_section" + i + "_content") });
        }
        return(
            <section id="application" className="g-pt-50">
                <div className="container text-center g-max-width-75" style={{textAlign:'center'}}>
                    <h2 className="g-font-weight-400 nl-home-title g-font-size-24 g-color-white">{getLocalValue("technology_title")}</h2>
                    <div className="nl-underline g-mb-15">
                        <span className="nl-style"></span>
                    </div>
                    <p className="mb-0 g-line-height-1_3 g-mb-100 g-font-size-14 g-color-white"></p>
                </div>
                <div className="container px-0">
                    <div className="row no-gutters">
                        <div className="col-sm-6 col-lg-3 application-item">
                            <article className="u-block-hover">
                                <figure className="g-overflow-hidden">
                                    <LazyLoad height={"100%"} width={"100%"}>
                                        <img className="img-fluid u-block-hover__main--zoom-v1" src={`${ROOT_URL}/public/img/technology1.png`} alt=""/>
                                    </LazyLoad>
                                </figure>
                                <div className=" g-pa-20">
                                    <h3 className="text-uppercase g-font-weight-700 g-font-size-14 text-center" >{getLocalValue("technology_section1_title")}</h3>
                                    <span className="g-font-size-12">{getLocalValue("technology_section1_desc")}</span>
                                    <div className="nl-underline-sm g-mb-15 " style={{lineHeight:"0"}}>
                                        <span className="nl-style-sm"></span>
                                    </div>
                                    <p className="g-font-size-default g-font-size-12 mb-0 text-left"><i className="fa fa-circle nl-fa"></i>
                                        {getLocalValue("technology_section1_content")}
                                    </p>
                                </div>
                            </article>
                        </div>
                        {listinfo.map(this.renderrow)}
                    </div>
                </div>
            </section>
        )
    }
}
export default  Technology;