import { cn } from '../../utils/cn'

// Tipado de input
type InputProps = {
	name: string
	className?: string
	label?: string
	type?: string
	validate?: {
		register: any
		rules: any
		validateErrorMessage?: string
	}
}

export default function Input({ className, name, type = 'text', label, validate }: InputProps) {
	return (
		<div className={cn('group relative z-0 mb-7 w-full', className)}>
			<input
				id={name}
				className='peer block w-full appearance-none border border-black bg-transparent px-4 py-2.5 font-chassiS text-sm focus:border-black focus:text-black focus:outline-none focus:ring-0'
				placeholder=' '
				{...(type && { type })}
				{...(validate && validate.register(name, validate.rules))}
				{...(!validate && { name })}
			/>

			{validate?.validateErrorMessage && <span className='text-xs text-red-400'>{validate.validateErrorMessage}</span>}

			{label && (
				<label
					htmlFor={name}
					className={`absolute left-4 top-2 -z-10 origin-[0] -translate-y-7 scale-75 font-chassiS text-base duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-4 peer-focus:-translate-y-[2rem] peer-focus:scale-75 peer-focus:font-medium rtl:peer-focus:left-4 rtl:peer-focus:translate-x-1/4 ${
						validate?.validateErrorMessage && 'border-2 border-none text-red-700'
					}`}>
					{label}
					{validate && <span className='font-bold text-red-700'>*</span>}
				</label>
			)}
		</div>
	)
}
