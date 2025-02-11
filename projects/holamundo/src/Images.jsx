const LoadImages = ({source}) => {
    return(
        source.map((img, i) => (
            <div>
                {i+1}
                <img src = {img}></img>
            </div>
        ))
    );
}
export default LoadImages;