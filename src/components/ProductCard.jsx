export default function Card({title, price, image, rating}) {
  return (
    <div>
      <div className="border-1 p-2 rounded flex flex-col">
        <img src ={image} alt ="imagem produto" className="w-64"/>
        <h3 className="font-bold mb-3">{title}</h3>
        <p>R${price}</p>
        <div>
          <p>{rating.rate} ⭐ em <span>{rating.count} avaliações</span></p>
        </div>
      </div>
    </div>
  );
}