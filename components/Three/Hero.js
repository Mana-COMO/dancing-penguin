import {
	Float,
	Text,
	ScrollControls,
	Html,
	PresentationControls,
	ContactShadows,
	OrthographicCamera,
} from '@react-three/drei';
import { Suspense } from 'react';

import { Overlay } from './Overlay';
import { DancingPenguinModel } from './DancingPenguinModel';
import { Canvas } from '@react-three/fiber';

export default function Hero() {
	return (
		// <Canvas camera={{ near: 2, far: 80, position: [-7, 5, -5] }}>
		<Canvas>
			<PresentationControls
				snap
				global
				zoom={0.8}
				polar={[0, Math.PI / 4]}
				azimuth={[-Math.PI / 4, Math.PI / 4]}
			>
				<OrthographicCamera />
				<directionalLight castShadow position={[0.1, -0.4, 2]} intensity={1} />
				<ambientLight intensity={0.5} />
				<Html
					position={[1, -0.8, 0.5]}
					wrapperClass="label"
					center
					distanceFactor={10}
				>
					WEB制作 🐧
				</Html>
				<Html
					position={[-2, -1.5, 0.5]}
					wrapperClass="label"
					center
					distanceFactor={10}
				>
					<div
						onClick={() => {
							console.log('clicked');
						}}
					>
						マーケティング支援 🐧
					</div>
				</Html>
				<Html
					position={[1.5, 1, 0.7]}
					wrapperClass="label"
					center
					distanceFactor={10}
				>
					アプリ開発 🐧
				</Html>
				<Suspense fallback={<Text>COMO</Text>}>
					<ScrollControls page={3} smooth={{ damping: 0.1 }}>
						<Overlay />

						<Float>
							<DancingPenguinModel />
						</Float>
					</ScrollControls>
				</Suspense>
				<ContactShadows position-y={-3.4} opacity={0.3} scale={15} blur={3} />
			</PresentationControls>
		</Canvas>
	);
}
