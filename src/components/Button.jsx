const Button = (props) => {
    const {action, disable, label, type} = props

    const negativeStyle = "bg-transparent hover:bg-blue-500 text-blue-700 hover:text-white border-blue-500"
    const positiveStyle = "text-white border-blue-500 hover:bg-indigo-700 bg-blue-500 "

    return(
        <button
          disabled={disable}
          onClick={action}
          className={`
          mt-6 
          px-6 
          py-3 
          width-50
          items-center 
          justify-center 
          text-base 
          font-medium 
          border 
          ${type === 'positif' ? positiveStyle : negativeStyle}
          ${ disable ? "opacity-50 cursor-not-allowed" : ""}
          `}
        >
        {label}
      </button>
    )
}

export default Button
