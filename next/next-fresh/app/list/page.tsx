interface Product {
  id: number;
  name: string;
  price: number;
}

export default function Home() {
  const foodstuffs: Product[] = [
    { id: 1, name: 'Tomato', price: 40 },
    { id: 2, name: 'Potato', price: 40 },
    { id: 3, name: 'Carrot', price: 40 }
  ];
  
  return (
    <div>
      <h4 className="title">상품목록</h4>
      {foodstuffs.map((foodstuff: Product) => (
        <div className="food" key={foodstuff.id}>
          <img src="" />
          <h4>{foodstuff.name} ${foodstuff.price}</h4>
        </div>
      ))}
    </div>
  );
}