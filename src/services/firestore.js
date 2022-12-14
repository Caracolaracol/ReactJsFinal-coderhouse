// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getFirestore, collection, getDocs, doc, getDoc, query, where, addDoc} from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDq6KOCLSvsfaJmAI0nKfF8MAbEnhlF50o",
  authDomain: "ironplant-20b9a.firebaseapp.com",
  projectId: "ironplant-20b9a",
  storageBucket: "ironplant-20b9a.appspot.com",
  messagingSenderId: "180357728358",
  appId: "1:180357728358:web:a8a0255da6f1b8dc8c45a7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app) 

export async function getItems(){
    const miColeccion = collection(firestore, 'productos')
    let snapShotDB = await getDocs(miColeccion) // captura del estado de la base de datos
    let dataDocs = snapShotDB.docs.map((doc) => {
        let docFormateado = {...doc.data(), id: doc.id}
        return docFormateado
    })
    return dataDocs
}

export async function getBestItems(){
    const collectionRef = collection(firestore, 'productos')
    const queryCategory = query(collectionRef, where('destacado', '==', true))
    const snapShotDB = await getDocs(queryCategory)

    let dataDocs = snapShotDB.docs.map((doc) => {
        let docFormateado = {...doc.data(), id: doc.id}
        return docFormateado
    })
    return dataDocs
}

export async function getSingleItem(idParams){
    const docRef = doc(firestore, 'productos', idParams) // referencia al un documento
    const docSnapshot = await getDoc(docRef)
    return {...docSnapshot.data(), id:docSnapshot.id}
}

export async function getItemsByCategory(catParams) {
    const collectionRef = collection(firestore, 'productos')
    const queryCategory = query(collectionRef, where('category', '==', catParams))
    const snapShotDB = await getDocs(queryCategory)

    let dataDocs = snapShotDB.docs.map((doc) => {
        let docFormateado = {...doc.data(), id: doc.id}
        return docFormateado
    })
    return dataDocs
}

export async function getItemsByType(typeParams) {
    const collectionRef = collection(firestore, 'productos')
    const queryCategory = query(collectionRef, where('tipo', '==', typeParams))
    const snapShotDB = await getDocs(queryCategory)

    let dataDocs = snapShotDB.docs.map((doc) => {
        let docFormateado = {...doc.data(), id: doc.id}
        return docFormateado
    })
    return dataDocs
}

export async function createBuyOrder(orderData){
    const collectionRef = collection(firestore, "orders")
    let respuesta = await addDoc(collectionRef, orderData)
    return respuesta.id
}

export async function exportDataToFirestore(){
    const data = [
        {
            id: 1,
            title: "Nitro Natural Arveja 1Kg",
            price: 24990,
            stock: 6,
            category: "proteinas-vegetales",
            subcategory: "arveja",
            destacado: true,
            tipo: "masa-muscular",
            img: '/products/nitropeanatural1kg02.png',
            imgaminograma: "/products/aminogramapea.jpg",
            imginfonutri: "/products/nutripea.jpg",
            detail:
                "La versi??n sin sabor a??adido de una de nuestras prote??nas m??s aclamadas NitroPea. Esta versi??n natural contiene a??n m??s prote??na por porci??n y no contiene cacao, solo el sabor puro de la prote??na de arveja ",
            extradetail:"3 Cucharadas colmadas(30gr). Consumir 1 a 3 porciones diarias dependiendo de tus necesidades y objetivos",
            ingredientes: "prote??na aislada de arvejas amarillas, Saborizante Lim??n. Formato de 1 kg, 33 porciones de 26 grs de prote??na."
        },
        {
            id: 2,
            title: "Proteina de Arveja, lim??n 1Kg",
            price: 21990,
            stock: 0,
            category: "proteinas-vegetales",
            subcategory: "arveja",
            destacado: false,
            tipo: "masa-muscular",
            img: '/products/proteinaarbejalimon1kg01.png',
            imgaminograma: "/products/aminogramapea.jpg",
            imginfonutri: "/products/nutripea.jpg",
            detail:
                "Natural Lemon Pea Protein es un aislado de prote??nas, un extracto proteico directo del alimento natural mezclada con saborizante Lim??n, el mismo que por a??os ha sido el refrescante sabor de productos nuestros c??mo BCAA, Arginina, Plant Energy, entre otros, aunque no hab??a sido usado con las prote??nas y ahora puedes ver y sentir su resultado! Tiene un toque ??cido obviamente pero algo de dulce tambi??n, un equilibrio muy agradable para consumir una prote??na vegetal solo con agua o mezclado con otros ingredientes. ",
            extradetail:"3 Cucharadas colmadas(30gr). Consumir 1 a 3 porciones diarias dependiendo de tus necesidades y objetivos",
            ingredientes: "prote??na aislada de arvejas amarillas, Saborizante Lim??n. Formato de 1 kg, 33 porciones de 26 grs de prote??na."
        },
        {
            id: 3,
            title: "Proteina de Arveja, cacao 1Kg",
            price: 21990,
            stock: 16,
            category: "proteinas-vegetales",
            subcategory: "arveja",
            destacado: false,
            tipo: "masa-muscular",
            img: '/products/proteinaarvejacacao1kg01.png',
            imgaminograma: "/products/aminogramapea.jpg",
            imginfonutri: "/products/nutripea.jpg",
            detail:
                "Una muy buena combinaci??n de prote??na org??nica de arvejas amarillas con cacao org??nico, hacen de esta prote??na una gran alternativa para quienes buscan un batido prot??ico sin grasa, az??cares, colorantes, de suave digesti??n,  buen sabor, y sin los al??rgenos m??s conocidos. Ideal para fines deportivos o s??lo para reforzar la dieta, es un alimento que se puede integrar a diario en cualquier momento, incluyendo la noche, al ser liviano en calor??as pero denso en nutrientes, sobre todo prote??na y hierro. ",
            extradetail:"3 Cucharadas colmadas(30gr). Consumir 1 a 3 porciones diarias dependiendo de tus necesidades y objetivos",
            ingredientes: "prote??na aislada de arvejas amarillas, Saborizante Lim??n. Formato de 1 kg, 33 porciones de 26 grs de prote??na."
        },
        {
            id: 4,
            title: "Proteina Arveja banana 1Kg",
            price: 21990,
            stock: 6,
            category: "proteinas-vegetales",
            subcategory: "arveja",
            destacado: false,
            tipo: "masa-muscular",
            img: '/products/proteinaarvejabanana1kg01.png',
            imgaminograma: "/products/aminogramapea.jpg",
            imginfonutri: "/products/nutripea.jpg",
            detail:
                "Luna muy buena combinaci??n de prote??na org??nica de arvejas amarillas con pl??tano liofilizado y stevia, hacen de esta prote??na una gran alternativa para quienes buscan un batido prot??ico sin grasa, az??cares, colorantes, de suave digesti??n,  buen sabor, y sin los al??rgenos m??s conocidos. Ideal para fines deportivos o s??lo para reforzar la dieta, es un alimento que se puede integrar a diario en cualquier momento, incluyendo la noche, al ser liviano en calor??as pero denso en nutrientes, sobre todo prote??na y hierro. 1 kg, 33 porciones. Ingredientes: Prote??na aislada de arveja, banana liofilizada, stevia, goma guar.",
            extradetail:"3 Cucharadas colmadas(30gr). Consumir 1 a 3 porciones diarias dependiendo de tus necesidades y objetivos",
            ingredientes: "Prote??na aislada de Arvejas amarillas, Pl??tano maduro liofilizado, stevia, Formato: 1 kg, 33 porciones por kg",
        },
        {
            id: 5,
            title: "Proteina Natural Arveja 1Kg",
            price: 24990,
            stock: 6,
            category: "proteinas-vegetales",
            subcategory: "arveja",
            destacado: false,
            tipo: "masa-muscular",
            img: '/products/proteinaarvejanatural1kg01.png',
            imgaminograma: "/products/aminogramapea.jpg",
            imginfonutri: "/products/nutripea.jpg",
            detail:
                "Prote??na aislada de arvejas amarillas, es una fuente de prote??nas distinta a las m??s conocidas, y 100% vegetal.No tiene carbohidratos, grasas, ni az??cares. Tampoco saborizantes, colorantes, o edulcorante alguno. Se debe mezclar con jugos, frutas o simplemente agua y consumir. Tambi??n puede ser usada para cocinar al tener un sabor neutral.Las prote??nas en estado puro son recomendadas para quienes buscan concentraci??n m??xima de prote??na, sin importarles el sabor. Si bien tiene un sabor neutral, no es recomendado para quienes buscan una prote??na que quede rica s??lo con agua, ya que se obtiene su mejor sabor al mezclar con frutas o leches vegetales. Ingredientes: prote??na aislada de arvejas amarillas Formato de 1 kg, 33 porciones de 26 grs de prote??na.",
            extradetail:"Las prote??nas en estado puro son recomendadas para quienes buscan concentraci??n m??xima de prote??na, sin importarles el sabor. Si bien tiene un sabor neutral, no es recomendado para quienes buscan una prote??na que quede rica s??lo con agua, ya que se obtiene su mejor sabor al mezclar con frutas o leches vegetales.",
            ingredientes: "prote??na aislada de arvejas amarillas. Formato de 1 kg, 33 porciones de 26 grs de prote??na."
        }, 
        {
            id: 6,
            title: "Nitro Cacao Arbeja 1Kg",
            price: 24990,
            stock: 6,
            category: "proteinas-vegetales",
            subcategory: "arveja",
            destacado: false,
            tipo: "masa-muscular",
            img: '/products/nitropeacacao1kg01.png',
            imgaminograma: "/products/aminogramapea.jpg",
            imginfonutri: "/products/nutripea.jpg",
            detail:
                "La versi??n sin sabor a??adido de una de nuestras prote??nas m??s aclamadas NitroPea. Esta versi??n natural contiene a??n m??s prote??na por porci??n y no contiene cacao, solo el sabor puro de la prote??na de arveja ",
            extradetail:"Las prote??nas en estado puro son recomendadas para quienes buscan concentraci??n m??xima de prote??na, sin importarles el sabor. Si bien tiene un sabor neutral, no es recomendado para quienes buscan una prote??na que quede rica s??lo con agua, ya que se obtiene su mejor sabor al mezclar con frutas o leches vegetales.",
            ingredientes: "Proteina aislada de arveja, creatina, taurina, sucralosa. Al??rgenos: Elaborado en lineas que procesan soya, trigo, maiz y cacao."
        },
        {
            id: 7,
            title: "Nitro Natural Rice 1Kg",
            price: 23990,
            stock: 50,
            category: "proteinas-vegetales",
            subcategory: "arroz",
            destacado: false,
            tipo: "masa-muscular",
            img: '/products/nitrorice1kg01.png',
            imgaminograma: "/products/aminogramarice.jpg",
            imginfonutri: "/products/nutririce.jpg",
            detail:
                "La clasica NitroRice ahora sin sabor a??adido y con m??s prote??na por porci??n ??25 grs! M??s los 1000 mg de creatina y 300 mg de taurina en cada porci??n, con el sabor 100% natural del arroz",
            extradetail:"Las prote??nas en estado puro son recomendadas para quienes buscan concentraci??n m??xima de prote??na, sin importarles el sabor. Si bien tiene un sabor neutral, no es recomendado para quienes buscan una prote??na que quede rica s??lo con agua, ya que se obtiene su mejor sabor al mezclar con frutas o leches vegetales.",
            ingredientes: "Proteina aislada de arroz, creatina, taurina, sucralosa. Al??rgenos: Elaborado en lineas que procesan soya, trigo, maiz y cacao."
        },
        {
            id: 8,
            title: "Nitro Cacao Rice 1Kg",
            price: 24990,
            stock: 6,
            category: "proteinas-vegetales",
            subcategory: "arroz",
            destacado: false,
            tipo: "masa-muscular",
            img: '/products/nitroricecacao1kg01.png',
            imgaminograma: "/products/aminogramarice.jpg",
            imginfonutri: "/products/nutririce.jpg",
            detail:
                "",
            extradetail:"3 Cucharadas colmadas(30gr). Consumir 1 a 3 porciones diarias dependiendo de tus necesidades y objetivos",
            ingredientes: "Proteina aislada de arroz, cacao, creatina, taurina, sucralosa. Al??rgenos: Elaborado en lineas que procesan soya, trigo, maiz y cacao."
        },
        {
            id: 9,
            title: "Proteina arroz limon 1Kg",
            price: 24990,
            stock: 26,
            category: "proteinas-vegetales",
            subcategory: "arroz",
            destacado: false,
            tipo: "masa-muscular",
            img: '/products/proteinaarrozlimon1kg01.png',
            imgaminograma: "/products/aminogramarice.jpg",
            imginfonutri: "/products/nutririce.jpg",
            detail:
                "Rice Lim??n es un aislado de prote??nas, un extracto proteico directo del alimento natural mezclada con saborizante Lim??n, el mismo que por a??os ha sido el refrescante sabor de productos nuestros c??mo BCAA, Arginina, Plant Energy, entre otros, aunque no hab??a sido usado con las prote??nas y ahora puedes ver y sentir su resultado! Tiene un toque ??cido obviamente pero algo de dulce tambi??n, un equilibrio muy agradable para consumir una prote??na vegetal solo con agua o mezclado con otros ingredientes.",
            extradetail:"3 Cucharadas colmadas(30gr). Consumir 1 a 3 porciones diarias dependiendo de tus necesidades y objetivos",
            ingredientes: "Ingredientes: Prote??na de arroz, saborizante lim??n, sucralosa. Formato: 1 kilo / 33 porciones"
        },
        {
            id: 10,
            title: "Proteina arroz banana 1Kg",
            price: 24990,
            stock: 6,
            category: "proteinas-vegetales",
            subcategory: "arroz",
            destacado: false,
            tipo: "masa-muscular",
            img: '/products/proteinaarrozbanana1kg01.png',
            imgaminograma: "/products/aminogramarice.jpg",
            imginfonutri: "/products/nutririce.jpg",
            detail:
                "",
            extradetail: "",
            ingredientes: ""
        },
        {
            id: 11,
            title: "Prote??na arroz cacao 1Kg",
            price: 24990,
            stock: 6,
            category: "proteinas-vegetales",
            subcategory: "arroz",
            destacado: true,
            tipo: "masa-muscular",
            img: '/products/proteinaarrozcacao1kg01.png',
            imgaminograma: "/products/aminogramarice.jpg",
            imginfonutri: "/products/nutririce.jpg",
            detail:
                "Una muy buena combinaci??n de prote??na org??nica de arroz con cacao org??nico, hacen de esta prote??na una gran alternativa para quienes buscan un batido prot??ico sin grasa, az??cares, colorantes, de suave digesti??n,  buen sabor, y sin los al??rgenos m??s conocidos. Ideal para fines deportivos o s??lo para reforzar la dieta, es un alimento que se puede integrar a diario en cualquier momento, incluyendo la noche, al ser liviano en calor??as pero denso en nutrientes, sobre todo prote??na y hierro. ",
            extradetail: "",
            ingredientes:""
        },
        {
            id: 12,
            title: "Proteina arroz natural 1Kg",
            price: 24990,
            stock: 8,
            category: "proteinas-vegetales",
            subcategory: "arveja",
            destacado: false,
            tipo: "masa-muscular",
            img: '/products/proteinaarroznatural1kg01.png',
            imgaminograma: "/products/aminogramarice.jpg",
            imginfonutri: "/products/nutririce.jpg",
            detail:
                "",
            extradetail: "",
            ingredientes:""
        },
        {
            id: 13,
            title: "Nitro Natural Mung 1Kg",
            price: 24990,
            stock: 8,
            category: "proteinas-vegetales",
            subcategory: "mung",
            destacado: false,
            tipo: "masa-muscular",
            img: '/products/nitromung1kg01.png',
            imgaminograma: "/products/aminogramarice.jpg",
            imginfonutri: "/products/nutririce.jpg",
            detail:
                "",
            extradetail: "",
            ingredientes:""
        },
        {
            id: 14,
            title: "Proteina Mung lim??n 1Kg",
            price: 23990,
            stock: 8,
            category: "proteinas-vegetales",
            subcategory: "mung",
            destacado: false,
            tipo: "masa-muscular",
            img: '/products/proteinamunglimon1kg01.png',
            imgaminograma: "/products/aminogramarice.jpg",
            imginfonutri: "/products/nutririce.jpg",
            detail:
                "",
            extradetail: "",
            ingredientes:"" 
        },
        {
            id: 15,
            title: "Nitro Mung cacao 1Kg",
            price: 24990,
            stock: 28,
            category: "proteinas-vegetales",
            subcategory: "mung",
            destacado: false,
            tipo: "masa-muscular",
            img: '/products/nitromungcacao1kg01.png',
            imgaminograma: "/products/aminogramarice.jpg",
            imginfonutri: "/products/nutririce.jpg",
            detail:
                "La prote??na aislada de poroto mung se obtiene del poroto mung, sienda esta versi??n una mezcla del aislado prote??co del poroto con cacao natural, creatina y taurina Todos los productos Iron Plant son elaborados con las mejores materias primas sin ingredientes de origen animal. Formato: 1 Kilo / 33 porciones 20 gr de prote??na por porci?? Ingredientes: Prote??na aislada de poroto mung, cacao natural, sucralosa. Al??rgenos: Elaborado en l??neas que procesan soya. trigo, y cacao. Cantidad de sucralosa por porci??n 0.3 mg IDA 15 mg p/cada kg de peso ",
            extradetail: "",
            ingredientes:"" 
        },
        {
            id: 16,
            title: "Proteina Mung cacao 1Kg",
            price: 24990,
            stock: 21,
            category: "proteinas-vegetales",
            subcategory: "mung",
            destacado: false,
            tipo: "masa-muscular",
            img: '/products/proteinacacaomung1kg01.png',
            imgaminograma: "/products/aminogramarice.jpg",
            imginfonutri: "/products/nutririce.jpg",
            detail:
                "La prote??na aislada de poroto mung se obtiene del poroto mung, sienda esta versi??n una mezcla del aislado prote??co del poroto con cacao natural. ",
            extradetail: "",
            ingredientes:"" 
        },
        {
            id: 17,
            title: "Proteina Mung Natural 1Kg",
            price: 24990,
            stock: 35,
            category: "proteinas-vegetales",
            subcategory: "mung",
            destacado: false,
            tipo: "masa-muscular",
            img: '/products/proteinamungnatural1kg01.png',
            imgaminograma: "/products/aminogramarice.jpg",
            imginfonutri: "/products/nutririce.jpg",
            detail:
                "",
            extradetail: "",
            ingredientes:"" 
        },
        {
            id: 18,
            title: "Proteina Mung Banana 1Kg",
            price: 24990,
            stock: 35,
            category: "proteinas-vegetales",
            subcategory: "mung",
            destacado: false,
            tipo: "masa-muscular",
            img: '/products/proteinamungbanana1kg01.png',
            imgaminograma: "/products/aminogramarice.jpg",
            imginfonutri: "/products/nutririce.jpg",
            detail:
                "",
            extradetail: "",
            ingredientes:"" 
        },
    
    
    
    
    
    
    
        {
            id: 101,
            title: "Monster Fava Plant Banana 4 Kg",
            price: 39990,
            stock: 35,
            category: "ganadores-de-peso",
            subcategory: "fava",
            destacado: true,
            tipo: "masa-muscular",
            img: '/products/monsterfavabanana4kg01.png',
            imgaminograma: "/products/aminogramarice.jpg",
            imginfonutri: "/products/nutririce.jpg",
            detail:
                "Por primera vez a base de Habas! El ganador de peso por excelencia de nuestra marca, una porci??n de 60 grs (6 cucharadas soperas) equivalen a un plato de 100 grs de legumbres, por lo que es un gran aliado para quienes necesitan comer m??s, o no quieren saltarse comidas, as?? como tambi??n aquellos que gustan de los deportes al aire libre y quieren llevar un alimento completo.",
            extradetail: "",
            ingredientes:"" 
        },
        {
            id: 102,
            title: "Monster Fava Plant Cacao 4 Kg",
            price: 39990,
            stock: 0,
            category: "ganadores-de-peso",
            subcategory: "fava",
            destacado: false,
            tipo: "masa-muscular",
            img: '/products/monsterfavacacao4kg01.png',
            imgaminograma: "/products/aminogramarice.jpg",
            imginfonutri: "/products/nutririce.jpg",
            detail:
                "Por primera vez a base de Habas! El ganador de peso por excelencia de nuestra marca, una porci??n de 60 grs (6 cucharadas soperas) equivalen a un plato de 100 grs de legumbres, por lo que es un gran aliado para quienes necesitan comer m??s, o no quieren saltarse comidas, as?? como tambi??n aquellos que gustan de los deportes al aire libre y quieren llevar un alimento completo.",
                extradetail: "",
                ingredientes:"" 
        },
        {
            id: 103,
            title: "Monster Mung Plant Banana 4 Kg",
            price: 39990,
            stock: 35,
            category: "ganadores-de-peso",
            subcategory: "mung",
            destacado: false,
            tipo: "masa-muscular",
            img: '/products/monstermungbanana4kg01.png',
            imgaminograma: "/products/aminogramarice.jpg",
            imginfonutri: "/products/nutririce.jpg",
            detail:
                "",
                extradetail: "",
                ingredientes:"" 
        },
        {
            id: 104,
            title: "Monster Mung Plant Cacao 4 Kg",
            price: 39990,
            stock: 35,
            category: "ganadores-de-peso",
            subcategory: "mung",
            destacado: false,
            tipo: "masa-muscular",
            img: '/products/monstermungcacao4kg01.png',
            imgaminograma: "/products/aminogramarice.jpg",
            imginfonutri: "/products/nutririce.jpg",
            detail:
                "",
                extradetail: "",
            ingredientes:"" 
        },
        {
            id: 105,
            title: "Monster Rice Plant Cacao 4 Kg",
            price: 39990,
            stock: 35,
            category: "ganadores-de-peso",
            subcategory: "arroz",
            destacado: false,
            tipo: "masa-muscular",
            img: '/products/monsterricecacao4kg01.png',
            imgaminograma: "/products/aminogramarice.jpg",
            imginfonutri: "/products/nutririce.jpg",
            detail:
                "",
                extradetail: "",
            ingredientes:"" 
        },
    
    
    
    
        {
            id: 201,
            title: "Vitamina B12 Metilcobalamina 100 grs ",
            price: 17990,
            stock: 35,
            category: "vitaminas-y-minerales",
            subcategory: "b12",
            destacado: false,
            tipo: "nutricion-diaria",
            img: '/products/b12.png',
            imgaminograma: "/products/aminogramarice.jpg",
            imginfonutri: "/products/nutririce.jpg",
            detail:
                " La metilcobalamina es una forma muy conocida de vitamina B12, formada a partir de carb??n activado con algunas bacterias capaces de sintetizar B12 como la acetibacterium, enterobacter, agrobacterium , entro otras por lo que no es de origen animal. La vitamina B12 interviene en el buen funcionamiento del sistema inmune, el sistema nervioso y la producci??n de neurotrasmisores, entre otros Contenido Neto 100 gramos Porciones por envase 100 aprox Depende de sus necesidades por cada gramo se obtiene 1000 mcg, por lo que se puede cubrir el requerimiento semanal (2000 mcg) con 2 gramos",
            extradetail:"Modo de Uso: Coloque de forma sublingual una cantidad de producto equivalente al tama??o de una gota de agua, esta cantidad cubre el requerimiento diario de B12 y este producto contiene 8333 porciones diarias aprox.",
            ingredientes: "Algunos especialistas suguieren suplementar B12 con una toma de 2000 mcg por semana o dos de 1000 mcg por semana, lo cual se obtiene mezclando 1 o 2 gramos (media cucharita de t?? aprox) en 100 cc de agua, usandolo de esta forma alcanzar?? para 50 semanas de uso."   
        },
    
    
    
    
    
    
    
        {
            id: 301,
            title: "Glucohydrat X",
            price: 17990,
            stock: 35,
            category: "carbohidratos",
            subcategory: "glucohydrat",
            destacado: false,
            tipo: "recuperacion-muscular",
            img: '/products/glucohydratx.png',
            imgaminograma: "/products/nutriglucohydratx.jpg",
            imginfonutri: "/products/nutriglucohydratx.jpg",
            detail:
                "Nuestra cl??sica mezcla de Carbohidratos llamada Glucohydrat, ahora en su versi??n mejorada, con Cacao org??nico, Arginina, Glutamina, y Creatina. La mejor mezcla para el pre y post entrenamiento, ideal para mezclar con prote??na y crear un alimento complejo para la recuperaci??n muscular. ",
            extradetail:"Rehidrataci??n, repone el gluc??geno muscular, evita la fatiga, gana m??s fuerza, mayor oxigenaci??n y menos catabolismo, hacen de Glucohydrat X un aliado perfecto de quienes entrenan duro o les cuesta mantener el peso o tener energ??a suficiente para terminar los entrenamientos.",
            ingredientes: "Por porci??n de 30 grs contiene: 27 grs de carbohidratos, 1 gramo de creatina, 1 gramo de arginina, 1 gramo de glutamina, 0 grs de sodio."    
        },
    
        {
            id: 302,
            title: "Glucohydrat",
            price: 17990,
            stock: 35,
            category: "carbohidratos",
            subcategory: "glucohydrat",
            destacado: true,
            tipo: "recuperacion-muscular",
            img: '/products/glucohydrat.png',
            imgaminograma: "/products/nutriglucohydrat.jpg",
            imginfonutri: "/products/nutriglucohydrat.jpg",
            detail:
                "Glucohydrat es una mezcla de carbohidratos constitu??da por: Monosac??ridos: 17%, Disac??ridos: 5%, Trisac??ridos: 7%, Tetrasac??ridos: 5%, Pentasac??ridos: 66%. Brinda carbohidratos simples, pero tambi??n complejos. ??til para todo tipo de deportes y actividades de alto desgaste f??sico que no necesariamente son deportivas, como m??sicos, o trabajos que involucran fuerza.",
            extradetail:"Rehidrataci??n, repone el gluc??geno muscular, evita la fatiga, gana m??s fuerza, mayor oxigenaci??n y menos catabolismo, hacen de Glucohydrat X un aliado perfecto de quienes entrenan duro o les cuesta mantener el peso o tener energ??a suficiente para terminar los entrenamientos.",
            ingredientes: "Por porci??n de 30 grs contiene: 27 grs de carbohidratos, 1 gramo de creatina, 1 gramo de arginina, 1 gramo de glutamina, 0 grs de sodio."
        },
    
    
    
    
    
    
        {
            id: 401,
            title: "Probi??tico 50 billones/C??psula vegana ",
            price: 19990,
            stock: 31,
            category: "probioticos",
            subcategory: "probioticos",
            destacado: false,
            tipo: "nutricion-diaria",
            img: '/products/probiotic.png',
            imgaminograma: "/products/aminogramarice.jpg",
            imginfonutri: "/products/nutririce.jpg",
            detail:
                "Probi??tico con c??psula vegetal y 11 cepas que suman en total 50 billones d?? probi??ticos por cada veggie cap! Hemos fusionado nuestras cl??sicas cepas de Reuteri y Plantarum y hemos a??adido 9 m??s; Bifidobacterium breve, Bifidobacterium bifidum, ssp lactis, B. longum, lactobacillus acidophilus, lactobacillus rhamnosus, Lac. Casei, Lac. Salivarius y lac. Helveticus. Todo esto en una sola c??psula, la cual es libre de gelatina. Ideal para el sistema digestivo",
            extradetail:"Modo de uso: consumir una c??psula al d??a con un vaso de agua. 1.9 calor??as por c??psula. ",
            ingredientes: ""    
        },
    
    
    
    ];
    const collectionRef = collection(firestore, 'productos')
    for (let item of data){
        const newDoc = await addDoc(collectionRef, item)
        console.log('Doc created', newDoc.id)
    }

}
export default firestore