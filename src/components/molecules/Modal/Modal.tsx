import React from 'react'
import cn from 'classnames'

import { createPortal } from 'react-dom'

import './Modal.scss'

interface ModalProps {
	children: React.ReactNode
	marker?: string
}

type Props = ModalProps &
	React.HTMLAttributes<Pick<HTMLDivElement, 'className'>>

const rootModal = document.body.querySelector('#modal')

const Modal: React.FC<Props> = ({ ...props }) => {
	const { children, marker, className } = props

	console.log(
		cn('izi-modal', {
			[String(className)]: className,
		})
	)

	const element = React.useMemo(() => {
		const element = document.createElement('div', {
			...props,
		})
		element.className = cn('izi-modal', {
			[String(className)]: className,
		})

		if (marker) element.dataset.marker = marker

		return element
	}, [props])

	React.useEffect(() => {
		rootModal!.appendChild(element)

		return () => {
			rootModal!.removeChild(element)
		}
	})

	return createPortal(children, element)
}

export default Modal
