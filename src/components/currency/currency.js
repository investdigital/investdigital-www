/**
 * Created by lijun on 2018/1/30.
 */
import React,{ Component } from 'react';
import {getLocalValue} from "../common/language";
class Currency extends Component{

    render(){
        return(
                <div className={"currency"} style={{marginTop:"-62px",position:"relative"}}>
                    <div className={"currencyTop"} style={{paddingTop:"140px",marginBottom:"200px"}}>
                        <div className={""} style={{textAlign:"center"}}>
                            <div>
                                <div style={{color:"#fff",fontSize:"1.5em"}}>{getLocalValue("currency_title1")}</div>
                                <div className={""} style={{marginTop:"10px",marginBottom:"100px", width:"106px",height:"2px",backgroundColor:"#167aff",display:"inline-block"}}></div>
                            </div>
                            <img src={getLocalValue("currency_image1")} width={"60%"} alt="1"/>
                        </div>
                    </div>
                    <div className={" currencyFooter "} style={{paddingTop:"50px",marginBottom:"30px"}}>
                        <div className={" "} style={{textAlign:"center"}}>
                            <div>
                                <div style={{color:"#fff",fontSize:"1.5em"}}>{getLocalValue("currency_title2")}</div>
                                <div className={""} style={{marginTop:"10px",marginBottom:"100px", width:"106px",height:"2px",backgroundColor:"#167aff",display:"inline-block"}}></div>
                            </div>
                                <img src={getLocalValue("currency_image2")} width={"40%"} alt="2"/>
                        </div>
                    </div>
                </div>
        )
    }
}
export default  Currency;