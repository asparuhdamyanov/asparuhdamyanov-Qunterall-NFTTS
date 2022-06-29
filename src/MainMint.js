import {useState} from  'react';
import {ethers, BigNumber} from 'ethers';
import NFTTS from './NFTTS.json'

const NFTTSAddress = "0x9421fac784c931aa87556321769d917163c6aea7";

const MainMint = ({accounts, setAccounts}) => {
    const[mintAmount, setMintAmount] = useState(1);
    const isConnected = Boolean(accounts[0]);

    async function handleMint() {
        if(window.ethereum) {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const contract = new ethers.Contract(
                NFTTSAddress,
                NFTTS.abi,
                signer
            );
            try {
                const response = await contract.mint(BigNumber.from(mintAmount), {
                    value: ethers.utils.parseEther((0.02 * mintAmount).toString()),
                });
                console.log('response', response);

            } catch(err) {
                console.log("error: ", err)
            }
        }
    }

    const handleDecrement = () => {
        if(mintAmount <= 1) return;
        setMintAmount(mintAmount - 1);
    };

    const handleIncrement = () => {
        if(mintAmount >= 3) return;
        setMintAmount(mintAmount + 1);
    };

    return (
        <div>
            <h1>NFTTS</h1>
            <p>How to pronounce NFTTS? NFT TS or NF TTs? Mint to find out.</p>
            {isConnected ? (
                <div>
                    <div>
                        <button onClick={handleDecrement}>-</button>
                        <input type="number" value={mintAmount} />
                        <button onClick={handleIncrement}>-</button>

                    </div>
                    <button onClick={handleMint}>Mint Now</button>
                    
                </div>

            ) : (
                <p>You must be connected to Mint.</p>
            )}
        </div>
    );

};

export default MainMint;