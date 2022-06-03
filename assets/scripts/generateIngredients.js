const ingredients = [
    { name: "Pão", url:"pao.jpg" },
    { name: "Carne", url: "burguer.webp" },
    { name: "Queijo Mussarela", url: "mussarela.webp" },
    { name: "Queijo Cheddar", url: "cheddar.jpg" },
    { name: "Gorgonzola", url: "gorgonzola.jpeg" },
    { name: "Cebola Frita", url: "cebola-frita.webp" },
    { name: "Cebola Caramelizada", url: "cebola-caramelizada.jpg" },
    { name: "Bacon", url: "bacon.jpg" },
    { name: "Alface", url: "alface.webp" },
    { name: "Tomate", url: "tomate.jpg" },
    { name: "Cebola Roxa", url: "cebola-roxa.webp" },
    { name: "Vinagrete", url: "vinagrete.jpg" },
    { name: "Hamburguer de Frango", url:"burguer-frango.webp" },
    { name: "Azeite", url:"azeite.jpg" },
    { name: "Maionese Verde", url:"maionese-verde.jpg" },
    { name: "Maionese de Bacon", url:"maionese-bacon.webp" },
    { name: "Maionese Aioli", url:"maionese-aioli.jpg" },
    { name: "Molho de Sriracha", url:"sriracha.jpg" },
    { name: "Cheddar Creme", url:"cheddar-creme.webp" },
    { name: "Hamburguer do Futuro (Vegetariano)", url:"burguer-veg.jpg" },
    { name: "Picles", url:"picles.webp" },
    { name: "Alho Frito", url:"alho-frito.jpg" },
    { name: "Molho Barbecue", url:"barbecue.webp" },
];

function Ingredients() {
    const renderIngredients = ingredients.map(({ name, url }) => (
        <div className="ingredient" key={name}>
            <img src={`./assets/img/ingredients/${url}`} />
            <div>{name}</div>
        </div>
    ));
        
    return <>{renderIngredients}</>;
}

const container = document.getElementById("ingredients");

const root = ReactDOM.createRoot(container);
root.render(<Ingredients />);