export default function ProductCard({title, price, image, rating}) {
    return (
        <div className="border-1 border-amber-950 flex flex-col items-center gap-5 p-5">
            <img src={image} alt="" className="w-30 h-auto"/>
            <div className="flex flex-col gap-3">
                <h3 className="font-bold">{title}</h3>
                <p>R${price}</p>
                <div>
                    ⭐ <span>{rating.rate} em {rating.count} avaliações</span>
                </div>
            </div>
        </div>
    )
}