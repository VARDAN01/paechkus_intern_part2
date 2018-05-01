import React, { Component } from 'react';
import logo from './product-1.jpg';
import './App.css';
import data from './products.json'
class App extends Component {
  render() {
    return (
    	<div>
      <div className="header-top-w3layouts">
	<div className="container">
		<div className="col-md-6 logo-w3">
			<a href="index.html"><img src="images/logo2.png" alt=" " /><h1>Productlist</h1></a>
		</div>
		<div className="col-md-6 phone-w3l">
			<ul>
				<li><span className="glyphicon glyphicon-earphone" aria-hidden="true"></span></li>
				<li>+91-XXXXXXXXXX</li>
			</ul>
		</div>
		<div className="clearfix"></div>
	</div>
</div>
<div className="top-products">
	<div className="container">
		<h3>Top Products</h3>
		<div className="sap_tabs">			
			<div id="horizontalTab">
				<ul className="resp-tabs-list">
					
					<li className="resp-tab-item"><span>Women</span></li>					
				</ul>	
				<div className="clearfix"> </div>	
				<div className="resp-tabs-container">
					<div className="tab-1 resp-tab-content">
						<div className="col-md-3 top-product-grids tp1 animated wow slideInUp" data-wow-delay=".5s">
							<a href="single.html"><div className="product-img">
								<img src="images/product-1.jpg" alt="" />
								<div className="p-mask">
									<button type="submit" className="w3ls-cart pw3ls-cart"><i className="fa fa-cart-plus" aria-hidden="true"></i> Add to cart</button>
								</div>
							</div></a>
							<h4>{data[0].productName}</h4>
							<h5>{data[0].price}</h5>
						</div>
						<div className="col-md-3 top-product-grids tp2">
							<a href="single.html"><div className="product-img">
								<img src="images/product-2.jpg" alt="" />
								<div className="p-mask">
									<button type="submit" className="w3ls-cart pw3ls-cart"><i className="fa fa-cart-plus" aria-hidden="true"></i> Add to cart</button>
								</div>
							</div></a>
							<h4>{data[1].productName}</h4>
							<h5>{data[1].price}</h5>	
							</div>
						<div className="col-md-3 top-product-grids tp3">
							<a href="single.html"><div className="product-img">
								<img src="images/product-3.jpg" alt="" />
								<div className="p-mask">
									<button type="submit" className="w3ls-cart pw3ls-cart"><i className="fa fa-cart-plus" aria-hidden="true"></i> Add to cart</button>
								</div>
							</div></a>
							<h4>{data[2].productName}</h4>
							<h5>{data[2].price}</h5>	
							</div>
						<div className="col-md-3 top-product-grids tp4">
							<a href="single.html"><div className="product-img">
								<img src="images/product-4.jpg" alt="" />
								<div className="p-mask">
									<button type="submit" className="w3ls-cart pw3ls-cart"><i className="fa fa-cart-plus" aria-hidden="true"></i> Add to cart</button>
								</div>
							</div></a>
							<h4>{data[3].productName}</h4>
							<h5>{data[3].price}</h5>	
							</div>
						<div className="clearfix"></div>
						<div className="top-products-set2">
						<div className="col-md-3 top-product-grids tp5">
							<a href="single.html"><div className="product-img">
								<img src="images/product-5.jpg" alt="" />
								<div className="p-mask">
									<button type="submit" className="w3ls-cart pw3ls-cart"><i className="fa fa-cart-plus" aria-hidden="true"></i> Add to cart</button>
								</div>
							</div></a>
							<h4>{data[4].productName}</h4>
							<h5>{data[4].price}</h5>	
								</div>
						<div className="col-md-3 top-product-grids tp6">
							<a href="single.html"><div className="product-img">
								<img src="images/product-6.jpg" alt="" />
								<div className="p-mask">
									<button type="submit" className="w3ls-cart pw3ls-cart"><i className="fa fa-cart-plus" aria-hidden="true"></i> Add to cart</button>
								</div>
							</div></a>
							<h4>{data[5].productName}</h4>
							<h5>{data[5].price}</h5>	
								</div>
						<div className="col-md-3 top-product-grids tp7">
							<a href="single.html"><div className="product-img">
								<img src="images/product-7.jpg" alt="" />
								<div className="p-mask">
									<button type="submit" className="w3ls-cart pw3ls-cart"><i className="fa fa-cart-plus" aria-hidden="true"></i> Add to cart</button>
								</div>
							</div></a>
							<h4>{data[6].productName}</h4>
							<h5>{data[6].price}</h5>	
							</div>
						<div className="col-md-3 top-product-grids tp4">
							<a href="single.html"><div className="product-img">
								<img src="images/product-8.jpg" alt="" />
								<div className="p-mask">
									<button type="submit" className="w3ls-cart pw3ls-cart"><i className="fa fa-cart-plus" aria-hidden="true"></i> Add to cart</button>
								</div>
							</div></a>
							<h4>{data[7].productName}</h4>
							<h5>{data[7].price}</h5>	
								</div>
						<div className="clearfix"></div>
						</div>
					</div>
					</div>						
				</div>
			</div>
		</div>	
	</div>
</div>
    );
  }
}

export default App;
