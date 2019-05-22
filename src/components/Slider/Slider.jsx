/* eslint-disable no-console */
/* eslint-disable key-spacing */
/* eslint-disable no-const-assign */
/* eslint-disable max-len */
/* eslint-disable indent */
/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable react/jsx-indent */
/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-tabs */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Image } from '../image';
import { randomNumber, roundRobin } from '../../libs';
import * as constant from '../../configs/constants';
import style from './style';

class BasicSlider extends Component {

	state = {
		index: 0,
	}

	componentDidMount() {
		const { banners, defaultAltText, random } = this.props;
		const { index } = this.state;
		console.log('Banner Length', banners.length, 'random', random, 'Index', index, 'altName', defaultAltText);

		if (banners.length > 1) {
			this.timerID = setInterval(
				() => this.tick(),
				this.props.duration,
			);
		}
	}

	componentWillUnmount() {
	  clearInterval(this.timerID);
	}

	tick() {
		const { banners, random, altText } = this.props;
		const { index } = this.state;
		console.log('Banner Length', banners.length, 'random', random, 'Index', index, 'altName', altText[index]);

		if (random) {
			this.setState({
				index: randomNumber(banners.length),
			});
		} else {
			this.setState({
				index: roundRobin(banners.length, index),
			});
		}
	}

	render() {
		const {
			height, banners, altText, defaultAltText, defaultBanner,
		} = this.props;

	  return (
	    <div style={style.imageDiv}>
	      {
	        <Image height={height} alt={altText.length ? altText[this.state.index] : defaultAltText} src={banners.length ? banners[this.state.index] : defaultBanner} />
	      }
  		</div>
	  );
	}
}

BasicSlider.defaultProps = {
  duration: '2000',
  height: '200',
	random: false,
	banners: [],
	altText: [],
	defaultBanner: constant.DEFAULT,
	defaultAltText: 'Default Image',
};

export default BasicSlider;
