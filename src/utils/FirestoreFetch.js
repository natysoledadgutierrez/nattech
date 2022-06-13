import { query, orderBy, where, collection, getDocs } from '@firebase/firestore';
import { doc, getDoc } from "firebase/firestore";
import db from './FirebaseConfig';

export const FirestoreFetch = async (categoria) => {
    let consulta;
    if (categoria) {
        consulta = query(collection(db, "productos"), where('categoria', '==', categoria));
    } else {
        consulta = query(collection(db, "productos"), orderBy('nombre'));
    }
    const querySnapshot = await getDocs(consulta);
    const dataFromFirestore = querySnapshot.docs.map(document => ({
        id: document.id,
        ...document.data()
    }));
    
    return dataFromFirestore;
}

export const FirestoreFetchOne = async (idItem) => {
    const docRef = doc(db, "productos", idItem);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      return {
          id: idItem,
          ...docSnap.data()
      }
    } else {
      console.log("No se encontró el producto!");
    }
}