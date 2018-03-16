/**
 * Created by zhanxiaojing on 2017/12/09.
 */
import React,{ Component }from 'react';
import {ROOT_URL} from '../../actions/types';
import {getLocalValue} from '../common/language';
import { Modal} from 'antd';
import 'antd/dist/antd.css';
class BannerNew extends Component{
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            visible: false
        };
        this.showModal=this.showModal.bind(this)
    }
    componentDidMount() {
        const $ = window.$;
        // $("#iohk").css("min-height",window.innerHeight)
        $("#iohk").height(window.innerHeight);
        $(window).resize(function() { $("#iohk").height(window.innerHeight); });
        $.ajaxSetup({
            cache: true
        });
        if($("#io_intro").hasClass('ready')){
            $.getScript( `${ROOT_URL}/public/js/gpu/GPUFluid-1.3.js`, function( data, textStatus, jqxhr ) {
                $("#io_intro .preloader").remove();
                $(".banner-con").removeClass('opa0');
                $.getScript( `${ROOT_URL}/public/js/gpu/three761.min.js`, function( data, textStatus, jqxhr ) {
                    $.getScript( `${ROOT_URL}/public/js/gpu/home.js`, function( data, textStatus, jqxhr ) {
                        io_intro();
                        $.ajaxSetup({
                            cache: false
                        });
                    });
                });
            });
        }
        if(!$("body").hasClass('transin')){
            $("body").addClass('transin');
        }
    }
    handleChange(){
        this.setState({
            show:!this.state.show
        })
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

    render(){
        return(
            <div id="iohk" className="bg-black" style={{marginTop:"-60px"}}>
                <div className="banner-notice" id="bannerNotice">
                    <a href="javascript:;" id="bannerNoticeBtn" onClick={this.showModal}>{getLocalValue("banner_notice")}</a>
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
                <div id="page" className="home">
                    <div id="main-body ">
                        <div id="middle" className="middle">
                            <div id="main" className="container-fluid">
                                <div className="intro box bigger">
                                    <div className="">
                                        <div id="entry" className="out" style={{"position":"ralative"}}>
                                            <div className="g-py-210--md g-py-120 opa0 banner-con text-center g-color-white">
                                                <div className="h4 d-inline-block  g-brd-2 g-font-size-40  g-font-weight-600  g-pb-5">{getLocalValue("about_title")}</div>
                                                <div className="g-font-size-20" style={{"fontWeight": "500"}}>{getLocalValue("about_title2")}</div>
                                                <div className="g-pt-20 banner-des" style={{"fontWeight": "500"}}>
                                                    <div className="g-font-size-18 nl-main">{getLocalValue("about_why")}</div>
                                                    <span className="nl-style-sm"></span>
                                                    <div className="g-font-size-14">{getLocalValue("about_answer")}</div>
                                                </div>
                                                <div className="buttons g-mt-60 g-color-white container " style={{"fontWeight": "500"}}>
                                                    <div className="g-mt-20">
                                                        <div className="select-design btn-default" onClick={this.handleChange.bind(this)} >
                                                            <span>{getLocalValue("nav_Whitepaper")}<i className="fa fa-angle-down fa-2x pull-right" aria-hidden="true" style={{marginTop: '-4px'}}></i></span>
                                                            <span className={this.state.show ? "hover" : "hidden"}><a href="https://investdigital.info/public/InvestDigital_Whitepaper_CN.pdf">白皮书</a></span>
                                                            <span className={this.state.show ? "hover" : "hidden"}><a href="https://investdigital.info/public/InvestDigital_Whitepaper_EN.pdf">WHITE PAPER</a></span>
                                                            <span className={this.state.show ? "hover" : "hidden"}><a href="https://investdigital.info/public/InvestDigital_Whitepaper_JP.pdf">白書</a></span>
                                                            <span className={this.state.show ? "hover" : "hidden"}><a href="https://investdigital.info/public/InvestDigital_Whitepaper_KR.pdf">백서</a></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div id="io_intro" className="ready waiting">
                                            <div className="text-center preloader" style={{padding:"150px 0"}}>
                                                <svg width="120px" height="120px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" className="uil-ring-alt">
                                                    <rect x="0" y="0" width="100" height="100" fill="none" className="bk"></rect>
                                                    <circle cx="50" cy="50" r="40" stroke="#222222" fill="none" strokeWidth="10" strokeLinecap="round"></circle>
                                                    <circle cx="50" cy="50" r="40" stroke="#167aff" fill="none" strokeWidth="6" strokeLinecap="round">
                                                        <animate attributeName="stroke-dashoffset" dur="2s" repeatCount="indefinite" from="0" to="502"></animate>
                                                        <animate attributeName="stroke-dasharray" dur="2s" repeatCount="indefinite" values="150.6 100.4;1 250;150.6 100.4"></animate>
                                                    </circle>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
export default  BannerNew;
