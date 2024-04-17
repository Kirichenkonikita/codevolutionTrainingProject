import { notFound } from "next/navigation"
export default function ({ params }:
    {
        params: {
            slug: Array<string>
        }
    }
) {
    const slugs = params.slug
    if (slugs.some((item) => item === "notFound")) {
        notFound()
    }
    if (slugs?.length === 1) {
        return (
            <h1>Slugs {slugs[0]} for one segment</h1>
        )
    } else if (slugs?.length === 2) {
        return (
            <h1>Slugs {slugs[0]} and {slugs[1]} for two parameters</h1>
        )
    } else if (slugs?.length > 2) {
        return (
            <h1>Slugs contain too many parameters</h1>
        )
    } 
    return (
        <h1>No-slugs page</h1>
    )
}