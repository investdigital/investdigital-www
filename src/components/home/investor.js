/**
 * Created by zhanxiaojing on 2017/12/09.
 */
import React,{ Component }from 'react';
import {getLocalValue} from '../common/language';
import {ROOT_URL} from '../../actions/types';
// import LazyLoad from 'react-lazyload';
import LazyLoad from 'react-lazy-load';

class Investor extends Component{
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
            <section className="investor g-pt-100 g-pb-70">
                <div className="container text-center g-max-width-75" style={{textAlign:'center'}}>
                    <h2 className="g-font-weight-400 nl-home-title g-font-size-24">{getLocalValue("investor_title")}</h2>
                    <div className="nl-underline g-mb-15">
                        <span className="nl-style"></span>
                    </div>
                    <p className="mb-0 g-line-height-1_3 g-mb-60 g-font-size-14"></p>
                </div>

                <div className="container">
                    <div className="row">
                        <div className=" col-sm-12 col-lg-3 g-py-20 text-center">
                            <LazyLoad width={"100%"}>
                                <img style={{margin:"0 auto"}} src={`${ROOT_URL}/public/img/investor1.jpg`} alt="1"/>
                            </LazyLoad>
                            <p className="g-pt-20  g-font-weight-400 g-font-size-18">{getLocalValue("investor_inB")}</p>
                        </div>
                        <div className="col-sm-12 col-lg-3 g-py-20 text-center">
                            <LazyLoad width={"100%"}>
                                <img style={{margin:"auto"}} src={`${ROOT_URL}/public/img/investor1-1.jpg`} alt="2"/>
                            </LazyLoad>
                            <p className="g-pt-20 g-font-weight-400 g-font-size-18">{getLocalValue("investor_Bix")}</p>
                        </div>
                        <div className="ol-sm-12 col-lg-3 g-py-20 text-center">
                            <LazyLoad width={"100%"}>
                                <img style={{margin:"auto"}} src={`${ROOT_URL}/public/img/investor1-2.jpg`} alt="3"/>
                            </LazyLoad>
                            <p className="g-pt-20 g-font-weight-400 g-font-size-18">{getLocalValue("investor_Sap")}</p>
                        </div>
                        <div className="col-sm-12 col-lg-3 g-py-20 text-center">
                            <LazyLoad width={"100%"}>
                                <img style={{margin:"auto"}} src={`${ROOT_URL}/public/img/investor1-3.jpg`} alt="4"/>
                            </LazyLoad>
                            <p className="g-pt-20 g-font-weight-400 g-font-size-18">{getLocalValue("investor_QUE")}</p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default Investor;