import ProductCard from "../components/ProductCard";
import Section from "../components/Section";

export default function Home() {
  
  return (
    <div>
        <h2 className="text-2xl text-center font-bold mb-4 mt-4">Bem-vindo ao Fiap Commerce!</h2>
        <Section titulo="Titulo">
          <ProductCard
          titulo = "titulo"
          preco = "preco"
          descricao = "descricao"
          categoria = "categoria"
          imagem = "imagem"
          estrelas = "estrelas"
          avaliacoes = "avaliacoes"
          />
        </Section>
    </div>
  );
}
