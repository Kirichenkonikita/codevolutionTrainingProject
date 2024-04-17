export default function Product(
    { params }:
    // типизируем объект, получаемый в качестве параметров: это объект со свойством params, имеющим тип объекта со свойством productId, содержащим свойство типа "строка"
        { params: { productId: string } }
) {
    console.log(params) // { productId: 'somestuff' }
    return (
        <h1>This is Product {params.productId}</h1>
    )
}