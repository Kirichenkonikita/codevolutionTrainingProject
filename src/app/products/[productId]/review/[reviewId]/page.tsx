export default function Review(
    {
        params
    }: {
        params: {
            productId: string
            reviewId: string
        }

    }
) {
    return <h1>This is review {params.reviewId} on product {params.productId}</h1>
}