function Navbar(){
    const navlinks=["Home","About","Skills","Projects","Contact"]
    return(
        <div className="flex bg-black items-center place-content-center h-15 fixed">
            <div className="flex  px-5 place-content-between">
                <div className="text-white">Sriyansh S.</div>
                <div>
                    <ul className="flex text-white gap-5">
                        {navlinks.map((link, index) => (
                            <li className="" key={index}>{link}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Navbar