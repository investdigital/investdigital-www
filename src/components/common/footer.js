import React,{ Component }from 'react';
import {Link} from 'react-router-dom';
import {ROOT_URL} from '../../actions/types'
import {getLocalValue} from './language';
import LazyLoad from 'react-lazy-load';

class Footer extends Component{
    render(){
        return(
            <div className="shortcode-html nl-footer">
                <footer className="g-bg-black-opacity-0_9 g-color-white-opacity-0_8 text-center g-pt-40 g-pb-20">
                    <div className="container">
                        <div className="d-block g-width-200 g-opacity-0_5 mx-auto g-mb-20" href="index.html">
                            <LazyLoad height={"100%"} width={"100%"}>
                                <img className="img-fluid" src={`${ROOT_URL}/public/img/logo.png`} alt="Logo"/>
                            </LazyLoad>
                            <div className="text-center nl-main">InvestDigital</div>
                        </div>

                        <ul className="list-unstyled mb-0">
                            <li className="list-inline-item g-mx-10">
                                <a className="g-color-white-opacity-0_8" href="#"><i className="fa fa-facebook fa-lg"></i></a>
                            </li>
                            <li className="list-inline-item g-mx-10">
                                <a className="g-color-white-opacity-0_8" href="#"><i className="fa fa-twitter fa-lg"></i></a>
                            </li>
                            <li className="list-inline-item g-mx-10">
                                <a className="g-color-white-opacity-0_8" href="#"><i className="fa fa-wechat fa-lg"></i></a>
                            </li>
                            <li className="list-inline-item g-mx-10">
                                <a className="g-color-white-opacity-0_8" href="#"><i className="fa fa-qq fa-lg"></i></a>
                            </li>
                        </ul>
                        <div style={{width: "100%", paddingTop: "3%"}}>
                           <div style={{width: "50%", display: "inline-block", textAlign: "right", paddingRight: "6%"}}>
                               <LazyLoad height={"100%"} width={"100%"}>
                                    <img src={`${ROOT_URL}/public/img/idc_qrcode.jpg`} style={{width: "110px"}}/>
                               </LazyLoad>
                               <br/>
                                InvestDigital小秘
                            </div>
                            <div style={{width: "50%", display: "inline-block", textAlign: "left", paddingLeft: "6%"}}>
                                <LazyLoad height={"100%"} width={"100%"}>
                                    <img src={`${ROOT_URL}/public/img/id_wechat.jpg`} style={{width: "110px", marginLeft: "3%"}}/>
                                </LazyLoad>
                                <br/>
                                InvestDigital微信公众号</div>
                            <small className="g-font-size-default ">
                                <Link className="g-color-white " to={`/law${getLocalValue("law_to_lang")}`}>{getLocalValue("footer_title2")}</Link></small>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}
export default  Footer;
