/**
 * Created by zhanxiaojing on 2017/12/09.
 */
import React,{ Component }from 'react';
import {ROOT_URL} from '../../actions/types';
import {getLocalValue} from '../common/language';

class Ourteams extends Component {
    constructor(props) {
        super(props);
        this.renderrow = this.renderrow.bind(this);
    }
    componentDidMount() {
        const $ = window.$;
        // initialization of HSScrollNav
        $.HSCore.components.HSScrollNav.init($('#js-scroll-nav'), {
            duration: 700,
            easing: 'easeOutExpo'
        });
    }

    renderrow(src, index) {
        return (
            <div className="col-6 col-lg-3 g-px-25 g-mb-50" key={index}>
                <div className="text-center">
                    <img className="u-shadow-v29 g-width-110  rounded-circle mb-5" style={{height: '110px'}}
                         src={src.src} alt="Image Description"/>
                    <h4 className="h5 g-font-weight-600 mb-1">{src.name}</h4>
                    <span className="d-block text-left ">{src.info}</span>
                </div>
            </div>
        )
    }

    render() {
        const imgLinks = [
            {
                src: `${ROOT_URL}public/img/Daniele Bernardi.png`,
                name: getLocalValue("team_section1_name"),
                info: getLocalValue("team_section1_desc")
            },
            {
                src: `${ROOT_URL}public/img/Hugo Gong.png`,
                name: getLocalValue("team_section2_name"),
                info: getLocalValue("team_section2_desc")
            },
            {
                src: `${ROOT_URL}public/img/Riaz Ahmad.png`,
                name: getLocalValue("team_section3_name"),
                info: getLocalValue("team_section3_desc")
            },
            {
                src: `${ROOT_URL}public/img/zhaohui.jpg`,
                name: getLocalValue("team_section4_name"),
                info: getLocalValue("team_section4_desc")
            },
            {
                src: `${ROOT_URL}public/img/zhangli.png`,
                name: getLocalValue("team_section5_name"),
                info: getLocalValue("team_section5_desc")
            },
            {
                src: `${ROOT_URL}public/img/wangqianfeng.png`,
                name: getLocalValue("team_section6_name"),
                info: getLocalValue("team_section6_desc")
            },
            {
                src: `${ROOT_URL}public/img/tangcong.png`,
                name: getLocalValue("team_section7_name"),
                info: getLocalValue("team_section7_desc")
            },
            {
                src: `${ROOT_URL}public/img/menghongwei.png`,
                name: getLocalValue("team_section8_name"),
                info: getLocalValue("team_section8_desc")
            },
            {
                src: `${ROOT_URL}public/img/huchengjian.png`,
                name: getLocalValue("team_section9_name"),
                info: getLocalValue("team_section9_desc")
            },
            {
                src: `${ROOT_URL}public/img/liuhan.png`,
                name: getLocalValue("team_section10_name"),
                info: getLocalValue("team_section10_desc")
            },
            {
                src: `${ROOT_URL}public/img/zhangpeiyu.png`,
                name: getLocalValue("team_section11_name"),
                info: getLocalValue("team_section11_desc")
            },
        ]
        return (
            <div className="ourteam" id="ourteam" name="ourteam">
                <div className="container g-py-100">
                    <div className="navbar-nav g-font-weight-600 ml-auto">
                        <div className="" style={{textAlign: 'center'}}>
                            <h2 className="g-font-weight-400 g-font-size-24">{getLocalValue("team_title")}</h2>
                            <div className="nl-underline g-mb-30">
                                <span className="nl-style"></span>
                            </div>
                        </div>
                    </div>
                    <div className="row g-mx-minus-25 g-mb-40">
                        {imgLinks.map(this.renderrow)}
                    </div>
                </div>
            </div>
        )
    }
}
export default  Ourteams;