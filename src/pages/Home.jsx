import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import Section from "../components/Section";

export default function Home() {
  const [eletronics, setEletronics] = useState([]);
  const [jewelery, setJewelery] = useState([]);
  const [mens_clothing, setMen] = useState([]);

  const API = import.meta.env.VITE_API_URL;

  useEffect(() => {
    fetch(`${API}/category/electronics`)
      .then((response) => response.json())
      .then((data) => setEletronics(data));

    fetch(`${API}/category/jewelery`)
      .then((response) => response.json())
      .then((data) => setJewelery(data));

    fetch(`${API}/category/men's%20clothing`)
      .then((response) => response.json())
      .then((data) => setMen(data));
  }, []);

  return (
    <div>
      <h2 className="text-2xl text-center font-bold mb-4 mt-4">
        Bem-vindo ao Fiap Commerce!
      </h2>

      <Section titulo="Eletrônicos">
        {eletronics.map((product) => (
          <ProductCard {...product} />
        ))}
      </Section>

      <Section titulo="Joias">
        {jewelery.map((product) => (
          <ProductCard {...product} />
        ))}
      </Section>

      <Section titulo="Vestimenta Masculina">
        {mens_clothing.map((product) => (
          <ProductCard {...product} />
        ))}
      </Section>
    </div>
  );
}
