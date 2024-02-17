const ButtonBig = (props) => {
    const {action, disable, label} = props

    return(
        <button
        onClick={action}
        disabled={disable}
        className={`
                    mt-4 flex w-full 
                    items-center 
                    justify-center 
                    border 
                    border-transparent 
                    bg-indigo-500 
                    px-8 py-3 text-base 
                    font-medium 
                    text-white 
                    hover:bg-indigo-700 
                    focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 
                    ${disable ? "opacity-50 cursor-not-allowed" : ""}                              
                    `}
      >
        {label}
      </button>
    )

}

export default ButtonBig
