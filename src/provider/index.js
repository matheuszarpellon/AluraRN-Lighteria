import React, {useState, createContext} from 'react';

const DataContext = createContext();

export const Provider = ({children}) => {
  const [itensCheckout, setItensCheckout] = useState([]);
  return (
    <DataContext.Provider
      value={{
        itensCheckout,
        adicionarItem: (novoItem) => {
          let copiaitensCheckout = [...itensCheckout];
          let itemFiltrado = copiaitensCheckout.find(
            (item = item.id === novoItem.id),
          );
          if (itemFiltrado) {
            itemFiltrado.quantidade += 1;
          } else {
            item.quantidade = 1;
            copiaitensCheckout = [...copiaitensCheckout, novoItem];
          }
          setItensCheckout(copiaitensCheckout);
        },
      }}>
      {children}
    </DataContext.Provider>
  );
};
