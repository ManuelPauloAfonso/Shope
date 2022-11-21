import { Children, ReactNode, useContext, useState } from "react";
import { createContext } from "react";


type ModalContextData = {
    modalIsOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

type Propschildren = {
    children: ReactNode
}

const ModalContext = createContext<ModalContextData>({} as ModalContextData);



function Provider({ children }: Propschildren) {
    const [modalIsOpen, setIsOpen] = useState(false);



    return (
        <ModalContext.Provider value={{ modalIsOpen, setIsOpen }}>
            {children}
        </ModalContext.Provider>
    );

}



export { Provider, ModalContext }