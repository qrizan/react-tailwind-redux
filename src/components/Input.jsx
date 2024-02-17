const Input = (props) => {
    const {action, alert, value, autoFocus, readOnly} = props

    return(
        <input
        type="text"
        value={value}
        onChange={action}
        autoFocus={autoFocus}
        readOnly={readOnly}
        className={`
            block w-full 
            text-gray-900 
            ring-1 
            ring-inset 
            ring-gray-300 
            placeholder:text-gray-400 
            focus:ring-2 
            focus:ring-inset 
            focus:ring-indigo-600 
            text-right
            ${alert ? "border-1 border-red-500" : "border-0"} 
            ${readOnly ? "border-gray-200 bg-gray-200" : ""}
            `}
        />
    )
}

export default Input