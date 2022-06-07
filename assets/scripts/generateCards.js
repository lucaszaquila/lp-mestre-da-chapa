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
    { name: "Catchup, Mostarda, Maionese", url:"catchup-mostarda-maionese.webp" },
];

const burguers = [
    { name: "Torre de Sauron", url:"torre.png" },
    // { name: "Beholder", url:"beholder.png" },
    { name: "Shangi Chi e os 10 Aneis", url:"shangchi.png" },
    { name: "Venom", url:"venom.png" },
    { name: "Peppa Burguer", url:"peppa.png" },
    { name: "Samurai X", url:"samurai.png" },
    { name: "Midoriya Burguer", url:"midoryia.png" },
    // { name: "O Espantalho", url:"espantalho.png" },
    { name: "Cebolethanos", url:"thanos.png" },
    { name: "Ham Vader", url:"vader.png" },
];

function Card({array, type = 'ingredient'}) {
    const renderCard = array.map(({name, url}) => (
        <div className={type} key={name}>
            <img src={`./assets/img/${type}/${url}`} alt={name} />
            <div>{name}</div>
        </div>
    ));
        
    return <>{renderCard}</>;
}

const containerIngredients = document.getElementById("ingredients");
const containerBurguers = document.getElementById("burguers");

const rootIngredients = ReactDOM.createRoot(containerIngredients);
const rootBurguers = ReactDOM.createRoot(containerBurguers);

rootIngredients.render(<Card array={ingredients} />);
rootBurguers.render(<Card array={burguers} type="burguer" />);  