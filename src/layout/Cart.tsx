import useLocalStorageData from "../hook/useLocalStorageData";
import Navbar from "../components/logic/Navbar";
// import "../App.css";
import CartCards from "../components/logic/CartCards";
// import { comidas } from "../utils/Comidas";

export default function Cart() {
    const dataLocalStorage: { [key: string]: any } = useLocalStorageData();

    return (
        <div id="Cart" className="h-screen w-screen">
                <Navbar
                    homeSelected={false}
                    AboutSelected={false}
                    cartSelected={true}
                />
            
            <main className="h-auto w-screen flex flex-col min-[760px]:flex-row">
                <section className="h-auto w-screen overflow-y-scroll  min-[760px]:w-[70vw]">
                    <h2 className="text-2xl font-bold">Carrito</h2>
                    <div className="w-full flex flex-col gap-4 items-center">
                        
                        {Object.keys(dataLocalStorage).map(clave => (
                            <CartCards 
                                key={dataLocalStorage[clave].id}
                                id={dataLocalStorage[clave].id}
                                title={dataLocalStorage[clave].title}
                                price={dataLocalStorage[clave].price}
                                image={dataLocalStorage[clave].image}
                                quantity={dataLocalStorage[clave].quantity}
                            />
                        ))}
                    </div>
                    {/* Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta cupiditate atque ipsa rerum porro praesentium totam ipsam sunt, distinctio, maiores saepe sed quaerat beatae, ex placeat minima in? Odio facilis repellat laboriosam aliquid quasi ea ducimus corporis, saepe, dolor doloremque magnam fugit dolorem ipsum, delectus laudantium distinctio rerum deleniti voluptates? Recusandae, maiores molestiae. Consequuntur fugiat omnis facere! Distinctio voluptate consequatur perferendis impedit aut, magnam, dolores accusantium animi earum obcaecati quasi ut aperiam eveniet culpa iure. Sed adipisci voluptatibus eaque commodi aliquid at dolorum et. Repudiandae fuga perspiciatis praesentium veritatis accusamus sunt, eaque inventore numquam, error ratione, corporis quasi esse asperiores officia doloremque commodi ea quod. Velit natus, tempore culpa aut labore mollitia incidunt hic! Optio placeat voluptatibus expedita consequuntur quas. Labore repellendus ex illo quas ducimus similique nemo consequatur voluptatum odit! Aspernatur ipsam iure ad nulla quas fugiat quos asperiores quod dolores recusandae quo quidem, voluptatibus ullam rem tempore quasi excepturi doloribus repellat. Excepturi debitis saepe reiciendis culpa, magni at repellat quod, voluptates porro distinctio recusandae ratione nisi. Provident dignissimos fugit nihil explicabo mollitia neque rem quos corrupti perspiciatis, quod esse quas modi vel nobis ad amet aliquid ipsum sapiente, ut, dolorem quibusdam. Neque, libero. Corrupti, nihil. Voluptate unde laudantium molestias nesciunt officia expedita harum rem facere, minus nostrum cumque vitae veniam? Officiis ex magni ipsa corrupti. Perferendis similique, quod laborum quibusdam ratione velit dolor veniam. Magni sint minus vero suscipit at reprehenderit magnam ab soluta tenetur nobis laboriosam nihil error reiciendis unde ex voluptate atque veritatis aperiam corrupti perferendis ipsam, inventore quaerat delectus rem. Quo modi, repudiandae voluptate ratione odit autem, soluta aut nihil veritatis beatae in. Adipisci corporis optio vitae? Explicabo quia beatae id enim reprehenderit, accusantium iusto ab, eveniet odio fugiat cupiditate ex ea autem exercitationem soluta libero. Tempora laboriosam molestiae obcaecati voluptate ullam aut provident sit repellat est, ea rem enim illo eos consectetur fugit delectus, laudantium corrupti unde? Earum dicta, in nemo, fugiat esse harum quis provident ipsum voluptates repellat architecto, iure ab ea ullam! Voluptas sed officiis debitis, quisquam ex, earum doloribus omnis laudantium esse, corporis cumque dolore ad? Odit optio, soluta commodi quos quisquam dolore mollitia tempora itaque quam, rem voluptates adipisci. Cum eveniet harum voluptas tempora dolore, nemo eaque labore fuga dolorem doloremque inventore velit veniam possimus numquam et illum, deleniti nostrum asperiores dicta hic deserunt? Aut sint, numquam molestiae molestias tempore odit quisquam! Officia, temporibus! Quas delectus enim accusamus sint, accusantium porro excepturi id illo recusandae dolor repellat libero suscipit obcaecati possimus officia odio magni natus animi. Ullam, porro quibusdam odit eos eaque animi excepturi corporis commodi doloribus cumque illum nostrum ipsum nulla voluptate veritatis, autem ut minima nesciunt saepe, laboriosam suscipit sequi culpa distinctio? Vitae commodi inventore enim, unde cupiditate deserunt aut dolor velit tempora dignissimos cum quaerat nisi porro ullam saepe, veritatis non ipsa asperiores ad maxime similique voluptatem corporis quidem veniam! Dicta temporibus obcaecati nemo maxime nulla illum laboriosam officiis perspiciatis libero neque nihil praesentium recusandae, excepturi quae? Id reprehenderit ullam maiores voluptatum dignissimos reiciendis non! Rem, aliquid. */}

                </section>
                <article className="sticky bottom-0 w-screen bg-black/40 overflow-y-hidden shadow min-[760px]:w-[30vw] min-[760px]:top-20 min-[760px]:h-[87.4vh] min-[760px]:shadow-lg">
                    hola
                </article>
            </main>
        </div>
    )
}