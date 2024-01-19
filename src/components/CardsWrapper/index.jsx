import TopCard from "../TopCard";

const CONTENTS = [
  {
    title: "Clientes nuevos",
    value: 18,
    chipState: "success",
    chipLabel: "+8.2%",
  },
  {
    title: "Préstamos activos",
    value: 25,
    chipState: "error",
    chipLabel: "+8.2%",
  },
  {
    title: "Pedidos totales",
    value: 1236,
    chipState: "success",
    chipLabel: "+8.2%",
  },
  {
    title: "Ingresos totales",
    value: 1783,
    valueUnit: "Bs",
    chipState: "success",
    chipLabel: "+8.2%",
  },
];

const CardsWrapper = () => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
      {CONTENTS.map((content) => (
        <TopCard key={content.title} {...content} />
      ))}
    </div>
  );
};

export default CardsWrapper;
