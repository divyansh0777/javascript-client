/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable react/jsx-indent */
/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-tabs */
import React, { Component } from 'react';
import { BasicSlider } from '../../components';
import * as constant from '../../configs/constants';

class BasicSliderDemo extends Component {
	banners = [
	  constant.CLOUD,
	  constant.DNS_SERVER,
	  constant.FULL_STACK_JS_DEVELOPMENT,
	  constant.FULL_STACK_WEB_DEVELOPMENT,
	  constant.LOAD_BALANCER,
	]

	alternateText = [
	  'CLOUD',
	  'DNS_SERVER',
	  'FULL_STACK_JS_DEVELOPMENT',
	  'FULL_STACK_WEB_DEVELOPMENT',
	  'LOAD_BALANCER',
	]


	render() {
	  return (
			<>
	      <BasicSlider random altText={this.alternateText} banners={this.banners} />
				{/* <BasicSlider altText={this.alternateText} banners={this.banners} /> */}
				{/* <BasicSlider random banners={this.banners} /> */}
				{/* <BasicSlider random /> */}
				{/* <BasicSlider /> */}
			</>
	  );
	}
}

export default BasicSliderDemo;
