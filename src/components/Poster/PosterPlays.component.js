 const PosterPlays = (props) => {
    return (
        <>
            <div className="flex flex-col items-start p-2">
                <div  className="h-100 ">
                    <img className="rounded-xl  hover:cursor-pointer" src="https://images.unsplash.com/photo-1583407733101-223204b57928?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80" alt={props.title}/>
                </div>
                <h2 className={
                    `font-bold mt-2 text-sm lg:text-xl ${
                        props.isDark ? "text-white" : "text-gray-800"
                    }`
                }>
                    {props.title}
                </h2>
                <p className={
                    `text-xs lg:text-sm ${ props.isDark ? "text-white" : "text-gray-500"}`
                }>
                    {props.desc}
                </p>
            </div>
        </>
    );
};

export default PosterPlays