/**
 * Created by zhanxiaojing on 2017/12/09.
 */
import React,{ Component }from 'react';
import {connect} from 'react-redux';
import {ROOT_URL} from '../../actions/types';
import {getLocalValue} from '../common/language';
import LazyLoad from 'react-lazy-load';
class Product extends Component{
    rendeProduct(item,index){
        return (
            <div className="col-lg-4 g-mb-50" key={index}>
                <div className="media g-mb-15">
                    <div className="d-flex mr-4">
                        <span className="g-color-primary g-font-size-30">
                          <i className="icon-education-087 u-line-icon-pro">
                              <LazyLoad height={30} width={30}>
                                <img style={{width:"30px",height:"30px"}} src={item.src} alt=""/>
                              </LazyLoad>
                          </i>
                        </span>
                    </div>
                    <div className="media-body">
                        <h3 className="h5 g-color-black g-font-weight-600 mb-20">{item.title}</h3>
                        <p className="g-color-gray-dark-v4">{item.content}</p>
                    </div>
                </div>
            </div>
        )
    }
    render(){
        const productItem = [
            /*{title:"量化投资开发者工具", src:`${ROOT_URL}public/img/product1.png`, content:"InvestDigital提供策略编写、回测框架与实盘交易工具，帮助量化交易者不断完善自己的算法"},
            {title:"数字货币投资交流社区", src:`${ROOT_URL}public/img/product2.png`, content:"基于用户间Follow功能的数字货币投资社区，帮助投资者发现有价值的交易策略，不断吸引数字货币投资者参与"},
            {title:"数字货币基金发行工具", src:`${ROOT_URL}public/img/product3.png`, content:"为资产管理人提供智能合约和工具，协助发行并运营数字货币基金，并提供业绩鉴证"},
            {title:"数字货币基金加速服务 ", src:`${ROOT_URL}public/img/product4.png`, content:"在平台上筛选表现好、能力强的基金，给予资金、技术和推广支持，并提供风控管理"},
            {title:"数字货币基金市场", src:`${ROOT_URL}public/img/product5.png`, content:"为投资者提供数字货币基金投资入口，为平台上优秀的基金提供产品展示和销售服务"},
            {title:"数字货币金融投资产品", src:`${ROOT_URL}public/img/product6.png`, content:"开发数字货币投资组合如ETF、FOF等，填补数字货币市场基金产品空缺"},*/
        ];
        for (let i = 1; i <=6; i++) {
            productItem.push(
                {title:getLocalValue("product_section" + i + "_title"),
                    src:`${ROOT_URL}/public/img/product${i}.png`,
                    content:getLocalValue("product_section" + i + "_content")})
        }
        return(

                <section className="container g-pt-100 g-pb-70">
                    <div className="container text-center g-max-width-75" style={{textAlign:'center'}}>
                        <h2 className="g-font-weight-400 nl-home-title g-font-size-24">{getLocalValue("product_title")}</h2>
                        <div className="nl-underline g-mb-15">
                            <span className="nl-style"></span>
                        </div>
                        <p className="mb-0 g-line-height-1_3 g-mb-60 g-font-size-14"></p>
                    </div>

                    <div className="row">
                        {productItem.map(this.rendeProduct)}
                    </div>
                </section>

        )
    }
}
export default  Product;