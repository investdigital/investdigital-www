import React,{ Component }from 'react';
import {ROOT_URL} from '../../actions/types';
import {getLocalValue} from '../common/language';
// import LazyLoad from 'react-lazyload';
import LazyLoad from 'react-lazy-load';
class Cornerstone extends Component{
    renderrow(item,index){
        return (
            <div className="col-lg-6 g-px-40 g-mb-50 g-mb-0--lg" key={index}>
                <div className="text-center">
                            <span className="d-inline-block  u-icon-size--xl rounded-circle g-mb-30">
                            <LazyLoad height={"100%"} width={"100%"}>
                                <img className="imgborder g-width-110" style={{height:"115px", boxShadow: "0 0 20px #ffffff"}} src={item.src} alt="" />
                            </LazyLoad>
                            </span>
                    <h3 className="h5 g-font-weight-600 g-font-size-18 text-uppercase mb-3 g-color-white" style={{marginTop: "20px"}}>{item.name}</h3>
                    <h3 className="h5 g-font-weight-600 g-font-size-16 text-uppercase mb-3" style={{color: "#167aff"}}>{item.desc}</h3>
                    <div className="mb-0 text-left g-font-size-14" style={{color: "#ffffff"}}>
                        <div style={{maxWidth: "350px",with: "100%", height: "100%", margin: "0 auto"}} className="text-left">
                            {item.info}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    render(){
        const consultantlist = [
            {
                src:`${ROOT_URL}/public/img/zenglinchuan.jpg`,
                name:getLocalValue("cornerstone_section1_name"),
                desc:getLocalValue("cornerstone_section1_desc"),
                info:getLocalValue("cornerstone_section1_info")
            },
            {
                src: `${ROOT_URL}/public/img/jizhoudong.jpg`,
                name: getLocalValue("cornerstone_section2_name"),
                desc: getLocalValue("cornerstone_section2_desc"),
                info: getLocalValue("cornerstone_section2_info")
            }
        ]
        return(
            <section className="g-py-50 g-pb-100" id="cornerstone">
                <div className="container text-center g-max-width-75" style={{textAlign:'center'}}>
                    <h2 className="g-font-weight-400 nl-home-title g-font-size-24 g-color-white">{getLocalValue("cornerstone_title")}</h2>
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
export default Cornerstone;