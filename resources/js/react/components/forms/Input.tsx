import { IMaskInput } from 'react-imask'

import { cn } from '../../utils/cn'

// Tipado de input
type InputProps = {
	name: string
	className?: string
	label?: string
	required?: boolean
	placeholder?: string
	type?: string
	validate?: {
		register: any
		rules: any
		validateErrorMessage?: string
	}
	value?: string
	disabled?: boolean
}

export default function Input({ className, name, type = 'text', label, validate, required, value, disabled }: InputProps) {
	return (
		<div className={cn('group relative z-0 mb-7 w-full', className)}>
			{type === 'telefono' ? (
				<IMaskInput
					name={name}
					id={name}
					placeholder={''}
					mask={'(000) 000-0000'}
					className='peer block w-full appearance-none border border-black bg-transparent px-4 py-2.5 font-chassiS text-sm focus:border-black focus:text-black focus:outline-none focus:ring-0'
				/>
			) : (
				<input
					id={name}
					className='peer block w-full appearance-none border border-black bg-transparent px-4 py-2.5 font-chassiS text-sm focus:border-black focus:text-black focus:outline-none focus:ring-0'
					placeholder={''}
					required={!!required}
					{...(disabled && { disabled })}
					{...(value && { value })}
					{...(type && { type })}
					{...(validate && validate.register(name, validate.rules))}
					{...(!validate && { name })}
				/>
			)}

			{validate?.validateErrorMessage && <span className='text-xs text-red-400'>{validate.validateErrorMessage}</span>}

			{label && (
				<label
					htmlFor={name}
					className={`md:text-baseduration-300 absolute left-4 top-2 -z-10 origin-[0] -translate-y-8 scale-100 font-chassiS text-xs leading-[1.47] duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-4 peer-focus:-translate-y-[2rem] peer-focus:scale-100 peer-focus:font-medium rtl:peer-focus:left-4 rtl:peer-focus:translate-x-1/4 ${
						validate?.validateErrorMessage && 'border-2 border-none text-red-700'
					}`}>
					{label}
					{(validate || !!required) && <span className='font-bold text-red-700'>*</span>}
				</label>
			)}
		</div>
	)
}
