const Shimmer = ({ noofData }) => {
    console.log("****",noofData)
    return(
        <div className="shimmer-container">
            {Array.from({ length: parseInt(noofData) }).map((element, index) =><div className="shimmer-card"></div>)}
        </div>
    )
}

export default Shimmer;

//element - itirate krega har ek value pe

// index - 0, 1 jitna no. hai uspe chlega
