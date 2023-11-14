import Link from "next/link"
import React from "react"

export default function Navigation ({ href, text }) {
    return (
        <Link href={href} className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-lg my-3">
            {text}
        </Link>
    )
}