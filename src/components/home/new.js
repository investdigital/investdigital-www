/**
 * Created by zhanxiaojing on 2017/12/09.
 */
import React,{ Component }from 'react';
import {getLocalValue} from '../common/language';
import {ROOT_URL} from '../../actions/types';

class New extends Component{
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        const $ = window.$;

        $('.masonry-grid').imagesLoaded().then(function () {
            $('.masonry-grid').masonry({
                columnWidth: '.masonry-grid-sizer',
                itemSelector: '.masonry-grid-item',
                percentPosition: true
            });
        });
    }
    render(){

        return(
            <div className="g-bg-secondary">
                <div className="container g-pt-100 g-pb-70">
                    <div className="container text-center g-max-width-75" style={{textAlign:'center'}}>
                        <h2 className="g-font-weight-400 nl-home-title g-font-size-24">{getLocalValue("news_title")}</h2>
                        <div className="nl-underline g-mb-15">
                            <span className="nl-style"></span>
                        </div>
                        <p className="mb-0 g-line-height-1_3 g-mb-80 hidden-sm-down g-font-size-14"></p>
                    </div>

                    <div className="masonry-grid row">
                        <div className="masonry-grid-sizer col-sm-1"></div>
                        <div className="masonry-grid-item col-sm-12 col-lg-8 g-mb-20">
                            <article className="row align-items-stretch no-gutters u-shadow-v21 u-shadow-v21--hover g-transition-0_3">
                                <div className="col-md-6 n-bg-white g-rounded-left-5">
                                    <div className="g-pa-60">
                                        <ul className="list-inline g-color-gray-dark-v4 g-font-weight-600 g-font-size-12">
                                            <li className="list-inline-item mr-0">{getLocalValue("news_section1_time1")}</li>
                                            <li className="list-inline-item mx-2">&#183;</li>
                                            <li className="list-inline-item">{getLocalValue("news_section1_time2")}</li>
                                        </ul>

                                        <h2 className="h5 g-color-black g-font-weight-600 mb-4 new_and">
                                            <a className="u-link-v5 g-cursor-pointer " href="http://www.chainfor.com/news/show/2807.html">{getLocalValue("news_section1_title")}</a>
                                        </h2>
                                        {/*<p className="g-color-gray-dark-v4 g-line-height-1_8 mb-4 new_p">{getLocalValue("news_section1_content")}</p>*/}
                                        <div className="g-color-gray-dark-v4 g-line-height-1_8 mb-4 new_p">
                                            {getLocalValue("news_section1_content")}
                                        </div>
                                        <ul className="list-inline g-font-size-12 mb-0">
                                            <li className="list-inline-item g-mb-10">
                                                <a className="u-tags-v1 new-btn g-color-white--hover g-rounded-50 g-py-4 g-px-15" href="http://www.chainfor.com/news/show/2807.html">{getLocalValue("news_section1_btn")}</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-6 g-bg-pos-center g-min-height-300 g-rounded-right-5 new_photo" data-bg-img-src={`${ROOT_URL}/public/img/news1.png`} style={{backgroundColor:"#dcdcdc"}}></div>
                            </article>
                        </div>

                        <div className="masonry-grid-item col-sm-6 col-lg-4 g-mb-20">
                            <article className="u-shadow-v21 u-shadow-v21--hover g-transition-0_3">

                                <img className="img-fluid w-100 g-rounded-top-5" src={`${ROOT_URL}/public/img/news4.png`} alt="Image Description"/>
                                    <div className="n-bg-white g-pa-30 g-rounded-bottom-5">
                                        <ul className="list-inline g-color-gray-dark-v4 g-font-weight-600 g-font-size-12 g-py-20">
                                            <li className="list-inline-item mr-0">{getLocalValue("news_section2_time1")}</li>
                                            <li className="list-inline-item mx-2">&#183;</li>
                                            <li className="list-inline-item">{getLocalValue("news_section2_time2")}</li>
                                        </ul>

                                        <h2 className="h5 g-color-black g-font-weight-600 mb-4 new_and">
                                            <a className="u-link-v5 g-cursor-pointer" href="https://baijiahao.baidu.com/s?id=1588655137004249880&wfr=spider&for=pc">{getLocalValue("news_section2_title")}</a>
                                        </h2>

                                        <ul className="list-inline g-font-size-12 mb-0">
                                            <li className="list-inline-item g-mb-10">
                                                <a className="u-tags-v1 new-btn g-color-white--hover g-rounded-50 g-py-4 g-px-15" href="https://baijiahao.baidu.com/s?id=1588655137004249880&wfr=spider&for=pc">{getLocalValue("news_section1_btn")}</a>
                                            </li>
                                        </ul>
                                    </div>
                            </article>
                        </div>

                        <div className="masonry-grid-item col-sm-6 col-lg-4 g-mb-20">
                            <article className="u-shadow-v21 u-shadow-v21--hover g-transition-0_3">

                                <img className="img-fluid w-100 g-rounded-top-5" src={`${ROOT_URL}/public/img/news3.png`} alt="Image Description"/>
                                    <div className="n-bg-white g-pa-30 g-rounded-bottom-5">
                                        <ul className="list-inline g-color-gray-dark-v4 g-font-weight-600 g-font-size-12 g-py-20">
                                            <li className="list-inline-item mr-0">{getLocalValue("news_section3_time1")}</li>
                                            <li className="list-inline-item mx-2">&#183;</li>
                                            <li className="list-inline-item">{getLocalValue("news_section3_time2")}</li>
                                        </ul>

                                        <h2 className="h5 g-color-black g-font-weight-600 mb-4 new_and">
                                            <a className="u-link-v5 g-cursor-pointer" href="http://www.diyicaijingwang.cn/xinwenzixun/2018/0110/93383.html">{getLocalValue("news_section3_title")}</a>
                                        </h2>

                                        <ul className="list-inline g-font-size-12 mb-0">
                                            <li className="list-inline-item g-mb-10">
                                                <a className="u-tags-v1 new-btn g-color-white--hover g-rounded-50 g-py-4 g-px-15" href="http://www.diyicaijingwang.cn/xinwenzixun/2018/0110/93383.html">{getLocalValue("news_section1_btn")}</a>
                                            </li>
                                        </ul>
                                    </div>
                            </article>
                        </div>

                        <div className="masonry-grid-item col-sm-6 col-lg-4 g-mb-20">
                            <article className="u-shadow-v21 u-shadow-v21--hover g-transition-0_3 text-center g-rounded-5 g-pa-30 new-center">
                                <span className="h5 g-font-weight-600">{getLocalValue("news_center")}</span>
                            </article>
                        </div>

                        <div className="masonry-grid-item col-sm-12 col-lg-8 g-mb-20">
                            <article className="row align-items-stretch no-gutters u-shadow-v21 u-shadow-v21--hover g-transition-0_3">
                                <div className="col-md-6 n-bg-white g-rounded-left-5">
                                    <div className="g-pa-60">
                                        <ul className="list-inline g-color-gray-dark-v4 g-font-weight-600 g-font-size-12">
                                            <li className="list-inline-item mr-0">{getLocalValue("news_section4_time1")}</li>
                                            <li className="list-inline-item mx-2">&#183;</li>
                                            <li className="list-inline-item">{getLocalValue("news_section4_time2")}</li>
                                        </ul>

                                        <h2 className="h5 g-color-black g-font-weight-600 mb-4 new_and">
                                            <a className="u-link-v5 g-cursor-pointer" href="http://www.caijing.com.cn/20180102/4387807.shtml">{getLocalValue("news_section4_title")}</a>
                                        </h2>
                                        <p className="g-color-gray-dark-v4 g-line-height-1_8 mb-4 new_p">{getLocalValue("news_section4_content")}</p>

                                        <ul className="list-inline g-font-size-12 mb-0">
                                            <li className="list-inline-item g-mb-10">
                                                <a className="new-btn u-tags-v1  g-color-white--hover g-rounded-50 g-py-4 g-px-15" href="http://www.caijing.com.cn/20180102/4387807.shtml">{getLocalValue("news_section1_btn")}</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-6 new_photo g-bg-pos-center g-min-height-300 g-rounded-right-5" data-bg-img-src={`${ROOT_URL}/public/img/news2.png`} style={{backgroundColor:"#dcdcdc"}}></div>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default New;