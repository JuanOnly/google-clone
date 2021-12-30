function Avatar({url}) {
    return (
        <img 
        loading="lazy"
        className="h-10 rounded-full"
        
        src={url}
        alt="profile pic"
        >
            
        </img>
    )
}

export default Avatar
