/**
 * Created by zhanxiaojing on 2017/12/09.
 */
import React,{ Component }from 'react';
import {connect} from 'react-redux';
import {ROOT_URL} from '../../actions/types';
import {getLocalValue} from '../common/language';

class VideoBottom extends Component{
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    componentDidMount() {
        const $ = window.$;
        let video1=document.getElementsByTagName("video")[1];
        video1.onclick=function(){
            if(video1.paused){
                video1.play();
            }else{
                video1.pause();
            }
        }
    }
    render(){
        return(
            <div style={{backgroundColor:"#FFFFFF", paddingTop:"100px"}}>
            <div className="container px-0 navP" >
                <div className="row">
                    <div className="col-sm-6 col-lg-6 pict">
                        <video classID={"example_video_1"} className={"video-js vjs-default-skin vjs-big-play-centered"} width="165" controls preload="auto" poster={`${ROOT_URL}/public/img/1513154766.mp4`} src={`${ROOT_URL}/public/img/1513154766.mp4`} data-setup="{example_option:true}" >
                            <source src={`${ROOT_URL}/public/img/1513154766.mp4`} type="video/mp4" />
                        </video>
                    </div>
                    <div className="col-sm-6 col-lg-6 det">
                        <h3>{getLocalValue("video_title")}</h3>
                        <div className="nl-underline g-mb-15">
                            <span className="nl-style" style={{float:"right"}}></span>
                        </div>
                        <div>
                            <ul>
                                <li className="g-pt-40">{getLocalValue("video_title_li1")}<span></span></li>
                                <li className="g-pt-40">{getLocalValue("video_title_li2")}<span></span></li>
                                <li className="g-pt-40">{getLocalValue("video_title_li3")}<span></span></li>
                                <li className="g-py-40">{getLocalValue("video_title_li4")}<span></span></li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
            </div>
        )
    }
}
export default VideoBottom;