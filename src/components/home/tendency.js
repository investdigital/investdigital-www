/**
 * Created by zhanxiaojing on 2017/12/20.
 */
import React,{ Component }from 'react';
import {connect} from 'react-redux';
import {getLocalValue} from '../common/language';

class Tendency extends Component{
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render(){
        return(
            <section className="container g-pt-100 g-pb-70 clearfix">
                <div className="container text-center g-max-width-75" style={{textAlign:'center'}}>
                    <h2 className="g-font-weight-400 nl-home-title g-font-size-24">{getLocalValue("tendency_title")}</h2>
                    <div className="nl-underline g-mb-15">
                        <span className="nl-style"></span>
                    </div>
                </div>
                <div className="container tendency">
                    <div className="col-sm-12 g-font-size-16">
                        <p className="text-center">{getLocalValue("tendency_des1")}</p>
                        <p className="text-center">{getLocalValue("tendency_des2")}</p>
                    </div>
                    <div className="g-pt-120 text-center tendency-btn">
                        <div className="col-sm-6 float-left">
                            <div className="tendency-btn1 g-px-20 g-py-10 g-mx-0--sm g-mx-100--md ">{getLocalValue("tendency_btn1")}</div>
                        </div>
                        <div className="col-sm-6 float-left">
                            <div className="tendency-btn2 g-px-20 g-py-10 g-mx-0--sm g-mx-100--md ">{getLocalValue("tendency_btn2")}</div>
                        </div>

                    </div>
                </div>
            </section>
        )
    }
}
export default Tendency;
