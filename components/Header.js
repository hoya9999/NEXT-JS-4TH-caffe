import Link from 'next/link'

export default function Header() {
    return (
      <header className='flex flex-row py-2 -ml-4 -mx-3 justify-between'>
        <div>
            <Link href="/">
            <a className="btn btn-link">Caffe</a>
            </Link>
        </div>
        <div>
            <Link href="/introduce">
                <a className="btn btn-link">Introduce</a>
            </Link>
            {/* <a href="/introduce" className="btn btn-link">Introduce</a> */}
            <Link href="/order">
                <a className="btn btn-link">Order</a>
            </Link>
            <Link href="/hiring">
                <a className="btn btn-link">Hiring!</a>
            </Link>
            <Link href="/contact_us">
                <a className="btn btn-link">Contact Us</a>
            </Link>             
            {/* <a href="#none" className="btn btn-link">Order</a>
            <a href="#none" className="btn btn-link">Hiring!</a>
            <a href="#none" className="btn btn-link">Contact Us</a> */}
        </div>
      </header>    
    )
}