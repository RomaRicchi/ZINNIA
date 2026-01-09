import type {
	CSSProperties,
	ComponentPropsWithoutRef,
	ElementType,
	ReactNode,
} from 'react';
import './StarBorder.css';

type StarBorderProps<T extends ElementType> = ComponentPropsWithoutRef<T> & {
	as?: T;
	className?: string;
	children?: ReactNode;
	color?: string;
	speed?: CSSProperties['animationDuration'];
	thickness?: number;
};

const StarBorder = <T extends ElementType = 'button'>({
	as,
	className = '',
	color = 'cyan',
	speed = '6s',
	thickness = 3,
	children,
	...rest
}: StarBorderProps<T>) => {
	const Component = (as || 'button') as ElementType;
	const inlineStyle = ((rest as any)?.style as CSSProperties) || {};

	return (
		<div className="star-item-wrapper flex">
			<Component
				className={`star-border-container ${className}`}
				{...(rest as any)}
				style={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					padding: `${thickness}px 0`,
					...inlineStyle,
				}}
			>
				<div
					className="border-gradient-bottom"
					style={{
						background: `radial-gradient(circle, ${color}, transparent 10%)`,
						animationDuration: speed,
					}}
				/>
				<div
					className="border-gradient-top"
					style={{
						background: `radial-gradient(circle, ${color}, transparent 10%)`,
						animationDuration: speed,
					}}
				/>
				<div className="inner-content">{children}</div>
			</Component>
		</div>
	);
};

export default StarBorder;
