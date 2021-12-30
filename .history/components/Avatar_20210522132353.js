function Avatar({url}) {
    return (
        <img 
        className="h-10 rounded-full"
        loading="lazy"
        src={url}
        alt="profile pic"
        >
            
        </img>
    )
}

export default Avatar
