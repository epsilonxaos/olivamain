const Select = ({ name, label, options, required }) => {
	return (
		<div>
			<label
				htmlFor={name}
				className={`font-intervogueReg text-base text-inherit duration-300`}>
				{label}
				{required && <span className='font-bold text-red-700'>*</span>}
			</label>

			<select
				name={name}
				className="className='peer focus:ring-0' block w-full appearance-none border border-black bg-transparent px-4 py-2.5 font-chassiS text-sm focus:border-black focus:text-black focus:outline-none"
				id={name}>
				{options.map((option, index) => (
					<option
						key={index}
						value={option.value}>
						{option.label}
					</option>
				))}
			</select>
		</div>
	)
}

export default Select
