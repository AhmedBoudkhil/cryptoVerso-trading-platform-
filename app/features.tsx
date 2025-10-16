import convert from "./assets/download3.avif"
import trading from "./assets/download4.avif"
import wallet from "./assets/Wallet.avif"
import './features.css' 



const  Features = () =>{

    const features = [
        {
            id: 1,
            tag: "CRYPTOVERSE",
            title: "Buy, sell, and store hundreds of cryptocurrencies",
            text: "From Bitcoin to Dogecoin, we make it easy to buy and sell cryptocurrency. Protect your crypto with best-in-class cold storage.",
            button: "Sign up",
            img: convert
        },
        {
            id: 2,
            tag: "ADVANCED",
            title: "Powerful tools, designed for the advanced trader",
            text: "Powerful analytical tools with the safety and security of Coinbase deliver the ultimate trading experience. Tap into sophisticated charting capabilities, real-time order books, and deep liquidity across hundreds of markets.",
            button: "Start trading",
            img: trading,
        },
        {
            id: 3,
            tag: "WALLET",
            title: "Do more with your crypto with Coinbase Wallet",
            text: "Store your crypto in your own personal crypto wallet and explore decentralized finance (DeFi), buy and sell NFTs, and more.",
            button: "Learn more",
            img: wallet,
        },
        {
            id: 4,
            tag: "WALLET",
            title: "The financial institution for a digital asset future",
            text: "Coinbase Prime is the first choice for sophisticated investors and institutions that want to invest in digital assets.",
            button: "Learn more",
            img: wallet,
        },


    ]
    return(
        <div className="features">
            {
                features.map((item,index) => (
                    <div
                       key={index}
                       className={`feature-item ${index % 2 !== 0 ? "reverse" : ""}`}

                    >
                        <div className="feature-img">
                            <img src={item.img?.src ?? item.img} alt={item.title} />
                        </div>
                        <div className="feature-text">
                            <h4>{item.tag}</h4>
                            <h2>{item.title}</h2>
                            <p>{item.text}</p>
                            <button>{item.button}</button>

                        </div>

                    </div>
                ))
            }

        </div>
    )
}

export default Features;