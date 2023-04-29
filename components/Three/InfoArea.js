import React from 'react';
import { styled, Typography } from '@mui/material';

export default function InfoArea(props) {
	const { title, icon, opacity, width, height } = props;

	const InfoAreaDiv = styled('div')(() => ({
		width: '420px',
		padding: '24px',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'flex-end',
		background: 'rgba(256, 256, 256, 0.2)',
		backdropFilter: 'blur(10px)',
		opacity: opacity,
		borderRadius: '10px',
		boxShadow: '0px 50px 60px rgba(0,0,0,0.1)',
		transition: 'opacity ease-in 0.3s',
		position: 'relative',
	}));
	const IconWrapperDiv = styled('div')(() => ({
		borderRadius: 10,
		position: 'absolute',
		top: -60,
		left: -120,
		transition: 'all 0.5s ease',
		'&:hover': {
			transform: 'translateY(-20px)',
			filter: 'brightness(110%) saturate(110%)',
		},
	}));

	const TitleTypography = styled(Typography)(theme => ({
		fontFamily: `"Amiko", sans-serif`,
		color: '#fff',
		fontSize: '24px',
	}));

	return (
		<InfoAreaDiv>
			<IconWrapperDiv>
				<img src={icon} width={width} height={height} alt={title} />
			</IconWrapperDiv>

			<TitleTypography>{title}</TitleTypography>
		</InfoAreaDiv>
	);
}
