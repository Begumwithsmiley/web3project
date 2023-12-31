
export default function Navbar() {
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl">Cr8Product</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <button className="btn btn-active btn-primary">Connect Wallet</button>
                </ul>
            </div>
        </div>
    )
}