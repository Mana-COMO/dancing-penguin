import { Scroll, useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useState } from 'react';
import InfoArea from './InfoArea';
import Hidden from '@mui/material/Hidden';
import Link from 'next/link';

const Section = props => {
	return (
		<Hidden mdDown implementation="css" sx={{ width: '100%' }}>
			<InfoArea
				vertical
				title={props.title}
				icon={props.icon}
				description=""
				opacity={props.opacity}
			/>
		</Hidden>
	);
};

export const Overlay = () => {
	const scroll = useScroll();
	// const [opacityFirstSection, setOpacityFirstSection] = useState(1);
	// const [opacitySecondSection, setOpacitySecondSection] = useState(1);
	const [opacityLastSection, setOpacityLastSection] = useState(1);

	useFrame(() => {
		// setOpacityFirstSection(1 - scroll.range(0, 1 / 3));
		// setOpacitySecondSection(scroll.curve(1 / 3, 1 / 3));
		setOpacityLastSection(scroll.range(2 / 3, 1 / 3));
	});

	return (
		<Scroll html>			
		<div style={{ position: 'absolute', top: '5vh', left: '70vw' }}>
			<a href='https://co-mo.jp' target='_blank' noreferrer>
		<img src='/assets/img/COMO-website-logo.svg' width='200px' height='80px' alt='COMO-logo' /></a>

</div>
			<div style={{ position: 'absolute', top: '15vh', left: '10vw' }}>
				<Section
					opacity={opacityLastSection}
					icon="/assets/img/pc.svg"
					title={'WEB DESIGN'}
					width="244px"
					height="200px"
				></Section>
			</div>
			<div style={{ position: 'absolute', top: '40vh', left: '10vw' }}>
				<Section
					opacity={opacityLastSection}
					icon="/assets/img/sp.svg"
					title={'WEB APPLICATION'}
					width="248px"
					height="209px"
				></Section>
			</div>
			<div style={{ position: 'absolute', top: '65vh', left: '10vw' }}>
				<Section
					opacity={opacityLastSection}
					icon="/assets/img/marketing.svg"
					title={'WEB MARKETING'}
					width="237px"
					height="203px"
				></Section>
			</div>
		</Scroll>
	);
};
