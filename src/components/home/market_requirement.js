/**
 * Created by zhanxiaojing on 2017/12/20.
 */
import React,{ Component }from 'react';
import {connect} from 'react-redux';
import {ROOT_URL} from '../../actions/types';
import {getLocalValue} from '../common/language';
import LazyLoad from 'react-lazy-load';

class MarketRequirement extends Component{
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    renderList1(item,index){
        return(
            <li className="g-pb-30" key={index}>
                <p className="role-name1">{item.title}</p>
                <p className="g-font-size-14">{item.content}</p>
            </li>
        );
    }
    renderList2(item,index){
        return(
            <li className="g-pb-30" key={index}>
                <p className="role-name2">{item.title}</p>
                <p className="g-font-size-14">{item.content}</p>
            </li>
        );
    }
    renderMiddle(item, index){
        return(
            <li className="g-py-10" key={index}>
                <LazyLoad height={0} width={104}>
                    <img className="g-width-30" style={{float:"left"}} src={item.src} alt=""/>
                </LazyLoad>
                    <span className="g-pl-10">{item.content}</span>

            </li>
        );
    }
    render(){
        const listinfo1 = [];
        const listinfo2 = [];
        const listinfo3 = [];
        for (let i = 1; i <=3; i++) {
            listinfo1.push({
                title:getLocalValue("market_requirement_matter_title" + i),
                content:getLocalValue("market_requirement_matter_solution" + i),
                });
        }
        for (let i = 4; i <=6; i++) {
            listinfo2.push({
                title:getLocalValue("market_requirement_matter_title" + i),
                content:getLocalValue("market_requirement_matter_solution" + i),
            });
        }
        for (let i = 1; i <=3; i++) {
            listinfo3.push({
                src:`${ROOT_URL}/public/img/market${i}.png`,
                content:getLocalValue("market_requirement_center" + i),
            });
        }

        return(
            <div className="market">
                <section className="container g-pt-100 g-pb-70">
                    <div className="container text-center g-max-width-75" style={{textAlign:'center'}}>
                        <h2 className="g-font-weight-400 nl-home-title g-font-size-24">{getLocalValue("market_requirement_title")}</h2>
                        <div className="nl-underline g-mb-15">
                            <span className="nl-style"></span>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row clearfix text-center">
                            <div className="col-sm-12 g-font-size-16">
                                <div className="col-sm-12 col-md-6 float-left">
                                    <LazyLoad height={70}>
                                        <img className="g-height-70 g-mb-5"  src={`${ROOT_URL}/public/img/role1.png`} alt=""/>
                                    </LazyLoad>
                                    <div className="role-name1">{getLocalValue("market_requirement_role1")}</div>
                                    <p className="text-center g-my-20 g-pa-20 role-des g-font-size-14">{getLocalValue("market_requirement_role1_des")}</p>
                                </div>
                                <div className="col-sm-12 col-md-6 float-left">
                                    <LazyLoad height={70}>
                                        <img className="g-height-70 g-mb-5"  src={`${ROOT_URL}/public/img/role2.png`} alt=""/>
                                    </LazyLoad>
                                    <div className="role-name2">{getLocalValue("market_requirement_role2")}</div>
                                    <p className="text-center g-my-20 g-pa-20 role-des g-font-size-14">{getLocalValue("market_requirement_role2_des")}</p>
                                </div>
                            </div>
                            <div className="col-sm-12 g-font-size-16 g-mt-40">
                                <div className="float-left col-md-4 col-sm-12 text-right g-py-20">
                                    <ul>
                                        {listinfo1.map(this.renderList1)}
                                    </ul>
                                </div>
                                <div className="float-left col-md-4 col-sm-12 g-py-20">
                                    <div className="market-circle">
                                        <div className="layout middle">
                                            <ul>
                                                {listinfo3.map(this.renderMiddle)}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="float-left col-md-4 col-sm-12 text-left g-py-20">
                                    <ul>
                                        {listinfo2.map(this.renderList2)}
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
            </div>

        )
    }
}
export default MarketRequirement;