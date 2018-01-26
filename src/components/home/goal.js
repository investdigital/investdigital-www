/**
 * Created by zhanxiaojing on 2017/12/20.
 */
import React,{ Component }from 'react';
import {getLocalValue} from '../common/language';

class Goal extends Component{
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <section className="g-pt-100 g-pb-70 goal g-color-white">
                <div className="container text-center g-max-width-75" style={{textAlign:'center'}}>
                    <h2 className="g-font-weight-400 nl-home-title g-font-size-24" style={{color: "#ffffff"}}>{getLocalValue("goal_title")}</h2>
                    <div className="nl-underline g-mb-15">
                        <span className="nl-style"></span>
                    </div>
                </div>
                <div className="container">
                    <div className="col-sm-12 g-font-size-16">
                        <p className="text-center g-font-size-14" style={{width:"60%", margin:"auto"}}>{getLocalValue("goal_content")}</p>
                    </div>
                </div>
            </section>
        )
    }
}
export default Goal;