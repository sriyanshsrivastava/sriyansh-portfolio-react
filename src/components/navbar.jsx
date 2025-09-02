function Navbar(){
    const navlinks=["Home","About","Skills","Projects","Contact"]
    return(
        <div className="flex items-center">
            <div>Sriyansh S.</div>
            <div>
                <ul className="flex">
                    {navlinks.map((link, index) => (
                        <li key={index}>{link}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Navbar