/**
 * Created by zhanxiaojing on 2017/12/09.
 */
import React,{ Component }from 'react';
import {ROOT_URL} from '../../actions/types';
import {getLocalValue} from '../common/language';
import { Modal} from 'antd';
import 'antd/dist/antd.css';
import { Link } from 'react-router-dom';

class Banner extends Component{
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            visible: false
        };
    }
    handleChange(){
        this.setState({
            show:!this.state.show
        })
    }
    componentDidMount() {
        const $ = window.$;
        // initialization of scroll animation
        $.HSCore.components.HSHeader.init($('#js-header'));
    }

    showModal() {
        this.setState({
            visible: true,
        });
    }
    handleCancel() {
        this.setState({
            visible: false,
        });
    }
    hideNotice() {
        let link = document.getElementById("bannerNotice");
        link.style.display = "none";
    }
    render(){
        return(
            <div>
                <div className="g-overflow-hidden banner">
                    <div className="banner-notice" id="bannerNotice">
                        <a href="javascript:;" id="bannerNoticeBtn" onClick={this.showModal.bind(this)}>{getLocalValue("banner_notice")}</a>
                        {/*<a href="javascript:;" onClick={this.hideNotice.bind(this)}>X</a>*/}
                        <Modal
                            title={null}
                            visible={this.state.visible}
                            onCancel={this.handleCancel.bind(this)}
                            width="60%"
                            footer={null}
                        >
                            <div style={{widht: "100%", height: "100%", padding: "30px", fontSize: "16px"}}>
                                <p style={{
                                    width: "100%",
                                    textAlign: "center",
                                    color: "#147AFF",
                                    fontSize: "20px",
                                    fontWeight: "bold",
                                    lineHeight: "20px",
                                    marginTop: "10px"
                                }}>
                                    {getLocalValue("notice_title")}
                                </p>
                                <hr/>
                                <p>{getLocalValue("notice_one")}</p>
                                <p style={{textIndent: "2em"}}>{getLocalValue("notice_two")}</p>
                                <p style={{textIndent: "2em"}}>{getLocalValue("notice_three")}</p>
                                <p style={{textIndent: "2em"}}>{getLocalValue("notice_four")}</p>
                                <p style={{textIndent: "2em"}}>{getLocalValue("notice_five")}</p>
                                <p style={{textAlign: "right"}}>{getLocalValue("notice_author")}</p>
                                <p style={{textAlign: "right"}}>{getLocalValue("notice_time")}</p>
                            </div>
                        </Modal>
                    </div>
                        <section className="g-flex-centered g-bg-pos-center g-bg-img-hero g-py-240" style={{backgroundImage:`url(${ROOT_URL}/public/img/banner.png)`, position: 'relative'}} data-calc-target="#js-header">
                            <div className="banner-con text-center g-color-white">
                                <div className="h4 d-inline-block  g-brd-2 g-font-size-40  g-font-weight-600  g-pb-5">{getLocalValue("about_title")}</div>
                                <div className="g-font-size-20">{getLocalValue("about_title2")}</div>
                                <div className="g-pt-20 banner-des">
                                    <div className="g-font-size-18 nl-main">{getLocalValue("about_why")}</div>
                                    <span className="nl-style-sm"></span>
                                    <div className="g-font-size-14">{getLocalValue("about_answer")}</div>
                                </div>
                                <div className="g-mt-20">
                                    <div className="select-design" onClick={this.handleChange.bind(this)} >
                                        <span>{getLocalValue("nav_Whitepaper")}<i className="fa fa-angle-down fa-2x pull-right" aria-hidden="true" style={{marginTop: '-4px'}}></i></span>
                                        <span className={this.state.show ? "hover" : "hidden"}><a href="/public/InvestDigital_Whitepaper_CN.pdf">白皮书</a></span>
                                        <span className={this.state.show ? "hover" : "hidden"}><a href="/public/InvestDigital_Whitepaper_EN.pdf">WHITE PAPER</a></span>
                                        <span className={this.state.show ? "hover" : "hidden"}><a href="/public/InvestDigital_Whitepaper_JP.pdf">白書</a></span>
                                        <span className={this.state.show ? "hover" : "hidden"}><a href="/public/InvestDigital_Whitepaper_KR.pdf">백서</a></span>
                                    </div>
                                </div>
                            </div>

                            <div className="container text-center g-z-index-1">
                                <div className="g-mb-50"
                                     data-animation="fadeInUp"
                                     data-animation-delay="200"
                                     data-animation-duration="1500">
                                    <a className="js-fancybox-media rounded-circle u-icon-v2 g-font-size-20 g-color-white g-bg-black g-brd-black g-bg-primary--hover g-brd-primary--hover g-text-underline--none--hover"
                                       data-open-effect="fadeIn"
                                       data-close-effect="fadeOut"
                                       data-open-speed="1000"
                                       data-close-speed="1000">
                                        <i className="g-pos-rel g-left-2 hs-icon hs-icon-play"></i>
                                    </a>
                                </div>
                                <div className="g-mb-25"
                                     data-animation="fadeInUp"
                                     data-animation-delay="500"
                                     data-animation-duration="1500">
                                    <h2 className="h4 d-inline-block g-brd-bottom g-brd-2 g-brd-black g-color-black g-font-weight-600 text-uppercase g-pb-5">Unify bootstrap template</h2>
                                </div>
                                <h3 className="g-color-black g-font-weight-700 g-font-size-40 g-font-size-55--md text-uppercase g-mb-40"
                                    data-animation="fadeInUp"
                                    data-animation-delay="800"
                                    data-animation-duration="1500">
                                    We are creative company
                                </h3>
                                <div
                                    data-animation="fadeInUp"
                                    data-animation-delay="1100"
                                    data-animation-duration="1500">
                                    <a className="btn btn-lg u-btn-outline-black g-font-weight-600 g-font-size-13 text-uppercase g-rounded-50 mx-2 g-px-25 g-py-15 g-mb-20" href="#">Discover More</a>
                                    <a className="btn btn-lg u-btn-primary g-font-weight-600 g-font-size-13 text-uppercase g-rounded-50 mx-2 g-px-25 g-py-15 g-mb-20" href="#">Purchase Now</a>
                                </div>
                            </div>
                        </section>
                </div>
            </div>

        )
    }
}
export default  Banner;
