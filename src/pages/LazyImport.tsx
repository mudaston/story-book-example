import React from 'react'

import { TextValue } from '../components/atoms'
import { Button } from '../components/molecules'

// import { Modal } from '../components/molecules'

const Modal = React.lazy(() => import('../components/molecules/Modal/Modal'))

interface LazyImportProps {}

type Props = LazyImportProps

const LazyImport: React.FC<Props> = ({}) => {
	const [showModal, setShowModal] = React.useState(false)

	return (
		<div>
			<Button onClick={() => setShowModal((prevState) => !prevState)}>
				<TextValue>Show modal</TextValue>
			</Button>
			<React.Suspense>
				{showModal && (
					<Modal marker="marker">
						<div style={{ display: 'flex', flexDirection: 'column' }}>
							<h1>Modal with click button</h1>
							<Button
								className="justify-content-center izi-padding-xs"
								variant="primary"
							>
								<TextValue>Hello world</TextValue>
							</Button>
						</div>
					</Modal>
				)}
			</React.Suspense>
		</div>
	)
}

export default LazyImport
