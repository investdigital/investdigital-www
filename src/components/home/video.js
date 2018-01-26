/**
 * Created by zhanxiaojing on 2017/12/09.
 */
import React,{ Component }from 'react';
import {connect} from 'react-redux';
import {ROOT_URL} from '../../actions/types';
import {getLocalValue} from '../common/language';

class Video extends Component{
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    componentDidMount() {
        const $ = window.$;
        // initialization of popups
        $.HSCore.components.HSPopup.init('.js-fancybox');
    }
    render(){
        return(
            <section className="container-fluid px-0">
                <div className="dzsparallaxer auto-init height-is-based-on-content use-loading mode-scroll loaded dzsprx-readyall g-bg-cover g-bg-black-opacity-0_6--after" data-options='{direction: "fromtop", animation_duration: 25, direction: "reverse"}'>
                    <div className="text-center g-pos-rel g-z-index-1 " style={{width:"100%",height:"auto",backgroundColor:"#FFF",fontSize:0}}>
                        <div id="mask"></div>
                            <video id="example_video_1" style={{display:"block",fontSize:0, marginBottom:"-100px"}} width="100%"  preload="auto" data-setup="{example_option:true}" poster={`${ROOT_URL}/public/img/bgVideo.mp4`} playsInline="webkit-playsinline" loop="loop" autoPlay="autoPlay"  src={`${ROOT_URL}/public/img/bgVideo.mp4`}  >
                                <source src={`${ROOT_URL}/public/img/bgVideo.mp4`} type="video/mp4" />
                            </video>
                        <div className={"na"}>
                            <a className="js-fancybox d-block" title="Single Image" href="https://player.youku.com/embed/XMzE5NTA1ODI5Mg==">
                                <span className="u-icon-v3 u-icon-size--lg  g-color-black g-color-primary--hover g-font-size-20 g-rounded-50x g-cursor-pointer">
                                    <i className="g-pos-rel g-left-2 fa fa-play"></i></span>
                            </a>
                            <span className="d-block g-color-white g-font-size-20 text-uppercase g-letter-spacing-5">{getLocalValue("video_watch")}</span>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default Video;
