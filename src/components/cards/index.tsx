import { Card } from "./style";
import Img1 from '../../assets/calça.png'
import Img2 from '../../assets/strela.png'
import Car from '../../assets/carticon.svg'
import Img3 from '../../assets/camiseta-preta.png'

import { useContext } from "react";
import { ModalContext } from "../../context";


export default function Cards() {
    const {setIsOpen} = useContext(ModalContext)
    return (
        <Card>
            <div className="card-row row1">
                <div className="card-col">
                    <img className="imgone" src={Img1} alt="" />
                    <div>
                        <span>T-shirt lok</span> 
                        <img className="imgtwo" src={Img2} alt="" />3.1
                    </div>
                    <div>
                        <span>$23.00</span>
                        <button onClick={() => setIsOpen(true)}> <img  src={Car} /> </button>
                    </div>
                </div>
                <div className="card-col">
                    <img className="imgone" src={Img1} alt="" />
                    <div>
                        <span>T-shirt lok</span>
                        <img className="imgtwo" src={Img2} alt="" />
                    </div>
                    <div>
                        <span>$23.00</span>
                        <button> <img src={Car} /> </button>
                    </div>
                </div>
                <div className="card-col">
                    <img  className="imgone"  src={Img1} alt="" />
                    <div>
                        <span>T-shirt lok</span>
                        <img  className="imgtwo" src={Img2} alt="" />
                    </div>
                    <div>
                        <span>$23.00</span>
                        <button> <img src={Car} /> </button>
                    </div>
                </div>
                <div className="card-col">
                    <img className="imgone"  src={Img1} alt="" />
                    <div>
                        <span>T-shirt lok</span>
                        <img  className="imgtwo"src={Img2} alt="" />
                    </div>
                    <div>
                        <span>$23.00</span>
                        <button> <img src={Car} /> </button>
                    </div>
                </div>

            </div>
            <div className="card-row row2">
                <div className="card-col">
                    <img className="imgone"  src={Img3} alt="" />
                    <div>
                        <span>T-shirt lok</span>
                        <img className="imgtwo" src={Img2} alt="" />
                    </div>
                    <div>
                        <span>$23.00</span>
                        <button> <img src={Car} /> </button>
                    </div>
                </div>
                <div className="card-col"> 
                    <img className="imgone"  src={Img3} alt="" />
                    <div>
                        <span>T-shirt lok</span>
                        <img className="imgtwo" src={Img2} alt="" />
                    </div>
                    <div>
                        <span>$23.00</span>
                        <button> <img src={Car} /> </button>
                    </div>
                 </div>
                 <div className="card-col"> 
                    <img className="imgone"  src={Img3} alt="" />
                    <div>
                        <span>T-shirt lok</span>
                        <img className="imgtwo" src={Img2} alt="" />
                    </div>
                    <div>
                        <span>$23.00</span>
                        <button> <img src={Car} /> </button>
                    </div>
                 </div>
                 <div className="card-col"> 
                    <img className="imgone"  src={Img3} alt="" />
                    <div>
                        <span>T-shirt lok</span>
                        <img className="imgtwo" src={Img2} alt="" />
                    </div>
                    <div>
                        <span>$23.00</span>
                        <button> <img src={Car} /> </button>
                    </div>
                 </div>
            </div>

        </Card>
    )
}