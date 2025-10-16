export default function ProductCard({titulo, preco, descricao, categoria, imagem, estrelas, avaliacoes}) {
    return (
        <div>
            <img src={imagem} alt="" />
            <div>
                <h3>{titulo}</h3>
                <p>{descricao}</p>
                <p>{preco}</p>
                <div>
                    ⭐ <span>{estrelas} em {avaliacoes} avaliações</span>
                </div>
            </div>
        </div>
    )
}