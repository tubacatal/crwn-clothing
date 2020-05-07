import React from 'react';
import MenuItem from "../menu-item/menu-item.component";

import './directory.styles.scss';

class Directory extends React.Component {
	constructor() {
		super();

		this.state = {
			sections: [
				{
					title: 'hats',
					imageUrl: require('../../images/hats.png'),
					id: 1,
					linkUrl: 'shop/hats'
				},
				{
					title: 'jackets',
					imageUrl: require('../../images/jackets.png'),
					id: 2,
					linkUrl: 'shop/jackets'
				},
				{
					title: 'sneakers',
					imageUrl: require('../../images/sneakers.png'),
					id: 3,
					linkUrl: 'shop/sneakers'
				},
				{
					title: 'womens',
					imageUrl: require('../../images/womens.png'),
					size: 'large',
					id: 4,
					linkUrl: 'shop/womens'
				},
				{
					title: 'mens',
					imageUrl: require('../../images/men.png'),
					size: 'large',
					id: 5,
					linkUrl: 'shop/mens'
				}
			]
		}
	}

	render () {
		return (
			<div className='directory-menu'>
				{
					this.state.sections.map(({id, ...otherSectionProps}) => {
						return <MenuItem key={id} {...otherSectionProps}/>
					})
				}
			</div>
		)
	}
}

export default Directory;