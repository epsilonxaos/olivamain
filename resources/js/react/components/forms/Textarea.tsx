import { twMerge } from 'tailwind-merge'

type TextareaProps = {
	className?: string
	name: string
	label: string
	required?: boolean
	register?: any
	validate?: boolean
	rules?: any
	validateError?: boolean
	validateErrorMessage?: string
	placeholder?: string
}

export default function Textarea({
	className,
	name,
	label,
	register,
	validate = false,
	rules,
	validateError,
	validateErrorMessage = '',
	required,
	placeholder = '',
}: TextareaProps) {
	return (
		<div className={twMerge('group relative z-0 mb-7 w-full', className)}>
			<textarea
				cols='30'
				rows='5'
				required={!!required}
				name={name}
				id={name}
				className='font-intervogueReg peer block w-full appearance-none border border-black bg-transparent px-4 py-2.5 text-sm text-inherit focus:border-black focus:outline-none focus:ring-0'
				placeholder={' '}
				{...(validate && register(name, rules))}
				{...(!validate && { name })}
				// required
			/>

			{validateError && <span className='text-xs text-red-400'>{validateErrorMessage}</span>}

			<label
				htmlFor={name}
				className={`absolute left-4 top-1 -z-10 origin-[0] -translate-y-8 scale-100 font-chassiS text-base leading-[1.47] duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-4 peer-focus:-translate-y-7 peer-focus:scale-100 peer-focus:font-medium rtl:peer-focus:left-4 rtl:peer-focus:translate-x-1/4 ${
					validateError && 'border-2 border-none text-red-700'
				}`}>
				{label}
				{(validate || !!required) && <span className='font-bold text-red-700'>*</span>}
			</label>
		</div>
	)
}
